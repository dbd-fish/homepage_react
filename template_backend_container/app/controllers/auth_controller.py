import structlog
from fastapi import APIRouter, Depends, HTTPException, Request, Response, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.security import authenticate_user, create_access_token
from app.database import get_db
from app.models.user import User
from app.schemas.user import PasswordReset, UserCreate, UserResponse
from app.services.auth_service import create_user, get_current_user, reset_password

# ログの設定
logger = structlog.get_logger()

router = APIRouter()

@router.post("/me", response_model=UserResponse)
async def get_me(request: Request, db: AsyncSession = Depends(get_db)):
    """現在ログインしているユーザーの情報を取得するエンドポイント。

    Args:
        request (Request): リクエストオブジェクト（クッキーの解析に使用）。
        db (AsyncSession): 非同期データベースセッション。

    Returns:
        UserResponse: ログイン中のユーザー情報。

    """
    logger.info("get_me - start")
    try:
        user = await get_current_user(request, db)
        logger.info("get_me - success", user_id=user.user_id)
        return user
    finally:
        logger.info("get_me - end")

@router.post("/register", response_model=dict)
async def register_user(user: UserCreate, db: AsyncSession = Depends(get_db)):
    """新しいユーザーを登録するエンドポイント。

    Args:
        user (UserCreate): 新規ユーザーの情報（メール、ユーザー名、パスワード）。
        db (AsyncSession): 非同期データベースセッション。

    Returns:
        dict: 登録成功メッセージと新規ユーザーID。

    """
    logger.info("register_user - start", email=user.email, username=user.username)
    try:
        new_user = await create_user(user.email, user.username, user.password, db)
        logger.info("register_user - success", user_id=new_user.user_id)
        return {"msg": "User created successfully", "user_id": new_user.user_id}
    finally:
        logger.info("register_user - end")

@router.post("/login", response_model=dict)
async def login(request: Request,response: Response, form_data: OAuth2PasswordRequestForm = Depends(), db: AsyncSession = Depends(get_db)):
    """ログイン処理を行うエンドポイント。

    Args:
        response (Response): レスポンスオブジェクト。
        form_data (OAuth2PasswordRequestForm): ユーザー名とパスワード。
        db (AsyncSession): 非同期データベースセッション。

    Returns:
        dict: アクセストークンとトークンタイプ。

    """
    logger.info("login - start", username=form_data.username)
    try:
        user = await authenticate_user(form_data.username, form_data.password, db)
        if not user:
            logger.info("login - authentication failed", username=form_data.username)
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Incorrect username or password",
                headers={"WWW-Authenticate": "Bearer"},
            )
        # NOTE: クライアントのIPの取得方法はプロキシなどに依存する可能性あり
        # client_host = request.client.host
        client_host = (
            request.headers.get("X-Forwarded-For")
            or (request.client.host if request.client else "unknown")
        )
        access_token = create_access_token(data={"sub": user.email, "client_ip": client_host})  # アクセストークンを生成
        logger.info("login - success", user_id=user.user_id)

        # HttpOnlyクッキーとしてトークンを設定
        response.set_cookie(
            # TODO: リフレッシュトークンを考慮する
            key="authToken",
            value=access_token,
            httponly=True,  # JavaScriptからアクセスできないようにする
            # TODO: 現状はアクセストークンであるAuht_tokeの有効期限を長めに設定する
            max_age=60 * 60 * 3,  # クッキーの有効期限（秒）　3時間
            secure=True,   # HTTPSのみで送信
            samesite="lax"  # クロスサイトリクエストに対する制御
        )
        logger.info("login - success", extra={"user_id": user.user_id})
        return {"message": "Login successful"}
    finally:
        logger.info("login - end")

@router.post("/logout")
async def logout(current_user: User = Depends(get_current_user)):
    """ログアウト処理を行うエンドポイント。

    Args:
        current_user (User): 現在ログイン中のユーザー。

    Returns:
        dict: ログアウト成功メッセージ。

    """
    logger.info("logout - start", current_user=current_user.user_id)
    try:
        # クライアント側でトークンを削除するシンプルな処理
        logger.info("logout - success")
        return {"msg": "Logged out successfully"}
    finally:
        logger.info("logout - end")

@router.post("/reset-password", response_model=dict)
async def reset_password_endpoint(data: PasswordReset, db: AsyncSession = Depends(get_db), current_user: User = Depends(get_current_user)):
    """パスワードリセット処理を行うエンドポイント。

    Args:
        data (PasswordReset): パスワードリセットの情報（メールと新しいパスワード）。
        db (AsyncSession): 非同期データベースセッション。
        current_user (User): 現在ログイン中のユーザー。

    Returns:
        dict: パスワードリセット成功メッセージ。

    """
    logger.info("reset_password - start", email=data.email)
    try:
        await reset_password(data.email, data.new_password, db)
        logger.info("reset_password - success", email=data.email)
        return {"msg": "Password reset successful"}
    finally:
        logger.info("reset_password - end")
