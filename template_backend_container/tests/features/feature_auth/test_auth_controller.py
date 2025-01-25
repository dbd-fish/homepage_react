

import pytest
from httpx import ASGITransport, AsyncClient
from sqlalchemy import select

from app.config.test_data import TestData
from app.features.feature_auth.schemas.user import UserCreate
from app.features.feature_auth.security import verify_password
from app.models.user import User
from main import app


# NOTE: setup_test_dbはfixture(scope="function", autouse=True)だが、戻り値を利用する場合はテスト関数の引数として実装する必要あり。
@pytest.mark.asyncio(loop_scope="session")
async def test_register_user(regist_user_data: UserCreate, setup_test_db) -> None:
    """ユーザー登録のテスト。
    """
    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://localhost:8000") as client:
        response = await client.post("/api/auth/register", json=regist_user_data.model_dump())
        assert response.status_code == 200
        assert response.json()["msg"] == "User created successfully"


        # データベース内のユーザーを確認
        # NOTE: オーバーライドしたget_db()からDB操作をする
        override_get_db = setup_test_db["override_get_db"]
        async for db_session in override_get_db():
            result = await db_session.execute(
                select(User).where(User.email == regist_user_data.email),
            )
            user: User | None = result.scalars().first()
            assert user is not None
            assert user.email == regist_user_data.email
            assert user.username == regist_user_data.username

@pytest.mark.asyncio(loop_scope="session")
async def test_register_existing_user(regist_user_data: UserCreate) -> None:
    """既に存在するメールアドレスでユーザー登録を試みた場合のテスト。
    """
    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://localhost:8000") as client:
        # 最初の登録は成功する
        response = await client.post("/api/auth/register", json=regist_user_data.model_dump())
        assert response.status_code == 200

        # 同じメールアドレスで再登録を試みる
        response = await client.post("/api/auth/register", json=regist_user_data.model_dump())
        assert response.status_code == 400
        assert "User already exists" in response.json()["detail"]

@pytest.mark.asyncio(loop_scope="session")
async def test_login_user() -> None:
    """ログイン処理のテスト。
    """
    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://localhost:8000/") as client:
        response = await client.post(
            "/api/auth/login",
            data={"username": TestData.TEST_USER_EMAIL_1, "password": TestData.TEST_USER_PASSWORD},
            headers={"Content-Type": "application/x-www-form-urlencoded"},
        )
        assert response.status_code == 200
        response_json = response.json()
        message = response_json.get("message", "")
        assert "successful" in message

@pytest.mark.asyncio(loop_scope="session")
async def test_login_with_invalid_credentials() -> None:
    """誤った資格情報でログインを試みた場合のテスト。
    """
    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://localhost:8000/") as client:
        response = await client.post(
            "/api/auth/login",
            data={"username": "wronguser@example.com", "password": "wrongpassword"},
            headers={"Content-Type": "application/x-www-form-urlencoded"},
        )
        assert response.status_code == 401
        assert "Invalid email or password" in response.json()["detail"]

@pytest.mark.asyncio(loop_scope="session")
async def test_reset_password(authenticated_client: AsyncClient, setup_test_db) -> None:
    """パスワードリセットのテスト。
    """
    new_password = "newpassword"
    response = await authenticated_client.post(
        "/api/auth/reset-password",
        json={"email": TestData.TEST_USER_EMAIL_1, "new_password": new_password},
    )
    assert response.status_code == 200
    assert response.json()["msg"] == "Password reset successful"

    # データベース内のユーザーのパスワードを確認
    override_get_db = setup_test_db["override_get_db"]  # 関数を取得
    async for db_session in override_get_db():
        result = await db_session.execute(
            select(User).where(User.email == TestData.TEST_USER_EMAIL_1),
        )
        user: User | None = result.scalars().first()
        assert user is not None
        assert verify_password(new_password, user.hashed_password)

@pytest.mark.asyncio(loop_scope="session")
async def test_reset_password_with_invalid_email(authenticated_client: AsyncClient) -> None:
    """存在しないメールアドレスでパスワードリセットを試みた場合のテスト。
    """
    response = await authenticated_client.post(
        "/api/auth/reset-password",
        json={"email": "nonexistent@example.com", "new_password": "newpassword"},
    )
    assert response.status_code == 404
    assert "User not found" in response.json()["detail"]
