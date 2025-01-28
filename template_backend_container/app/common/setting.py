

from pydantic_settings import BaseSettings

# NOTE: template_backend_container\.envから下記を読み取る
class Setting(BaseSettings):
    # アプリケーション基本設定
    APP_NAME: str
    DEV_MODE: bool
    APP_URL :str

    # セキュリティ設定
    SECRET_KEY: str
    ALGORITHM: str
    ACCESS_TOKEN_EXPIRE_MINUTES: int

    # ログの保存先
    APP_LOG_DIRECTORY: str
    SQL_LOG_DIRECTORY: str
    PYTEST_APP_LOG_DIRECTORY: str
    PYTEST_SQL_LOG_DIRECTORY: str


    # データベース設定
    # alembic.iniに記載
    

    # メールサーバー設定
    SMTP_SERVER: str 
    SMTP_PORT: int 
    SMTP_PASSWORD: str 
    SMTP_USERNAME :str

    class Config:
        env_file = ".env"  # .env ファイルを指定

setting = Setting()
