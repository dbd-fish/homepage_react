# seed_data.py
# 動作確認用の初期データを投入する。実行コマンドの引数は必要に応じて精査する。
# 実行コマンド:
# export PYTHONPATH=/app
# poetry run python app/seeders/seed_data.py

import asyncio

from passlib.context import CryptContext  # type: ignore
from sqlalchemy.future import select

import app.models
from app.common.common import datetime_now
from app.config.test_data import TestData
from app.database import AsyncSessionLocal, Base, engine

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

async def clear_data():
    """データベースをクリアします。すべてのテーブルを削除し、再作成します。
    """
    async with engine.begin() as conn:

        try:
            print("データベースURL:", engine.url)  # 接続先DB確認
            print("すべてのテーブルを削除中...")
            await conn.run_sync(Base.metadata.drop_all)  # テーブルを削除
            print("すべてのテーブルを作成中...")
            await conn.run_sync(Base.metadata.create_all)  # テーブルを作成
            print("データベースのクリアが完了しました。")
        except Exception as e:
            print(f"データベースクリア中にエラーが発生しました: {e}")


async def seed_data():
    """テーブルへデータを挿入します。
    """
    async with AsyncSessionLocal(bind=engine) as session:
        try:
            # 固定値のUUIDやIDを定義
            user1_id = TestData.TEST_USER_ID_1
            user2_id = TestData.TEST_USER_ID_2

            # 1. Userテーブル
            result = await session.execute(
                select(app.models.User).where(app.models.User.username == TestData.TEST_USERNAME_1),
            )
            if not result.scalars().first():
                session.add(
                    app.models.User(
                        user_id=TestData.TEST_USER_ID_1,
                        username=TestData.TEST_USERNAME_1,
                        email=TestData.TEST_USER_EMAIL_1,
                        hashed_password=pwd_context.hash(TestData.TEST_USER_PASSWORD),
                        contact_number=TestData.TEST_USER_CONTACT_1,
                        user_role=1,
                        user_status=1,
                        created_at=datetime_now(),
                        updated_at=datetime_now(),
                    ),
                )
            await session.commit()

            # 1. Userテーブル (target_user_id 用のデータ追加)
            result = await session.execute(
                select(app.models.User).where(app.models.User.username == TestData.TEST_USERNAME_2),
            )
            if not result.scalars().first():
                session.add(
                    app.models.User(
                        user_id=TestData.TEST_USER_ID_2,
                        username=TestData.TEST_USERNAME_2,
                        email=TestData.TEST_USER_EMAIL_2,
                        hashed_password=pwd_context.hash(TestData.TEST_USER_PASSWORD),
                        contact_number=TestData.TEST_USER_CONTACT_2,
                        user_role=2,
                        user_status=1,
                        created_at=datetime_now(),
                        updated_at=datetime_now(),
                    ),
                )
            await session.commit()
            print("Data seeded successfully!")

        except Exception as e:
            await session.rollback()
            print(f"An error occurred: {e}")
        finally:
            await session.close()


if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser(description="Seed or clear database.")
    parser.add_argument("--clear", action="store_true", help="Clear all database data")
    parser.add_argument("--seed", action="store_true", help="Seed the database with initial data")
    args = parser.parse_args()

    async def main():
        if args.clear:
            print("Clearing database...")
            await clear_data()
        elif args.seed:
            print("Seeding database...")
            await seed_data()
        else:
            # 引数なしの場合、両方を実行
            print("No arguments provided. Clearing and seeding database...")
            await clear_data()
            await seed_data()

    asyncio.run(main())
