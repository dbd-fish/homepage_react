# リポジトリ概要
Docker + React(React Router7) + FastAPIで認証機能を作成。Cypressによるテスト環境も構築。
- ログイン機能
- ユーザー登録機能
- パスワードリセット機能
- メール認証機能

## ポイント
- cert.pemとkey.pemを準備すればHTTPSでLocalhostを起動して、HttpOnlyCookieに認証情報を格納してAPIに送信する。
- CypressによるE2Eテストが可能

# 主な技術スタック
- 環境構築: 
    - Docker
    - docker-compose
- フロントエンド:
    - React (^18.2.0)
    - ReactRouter (^2.15.1)
    - TypeScript (^5.1.6)
    - TailwindCSS (^3.4.17)
    - shadcn/ui (^2.3.0)
    - npm

    - ビルドツール:
        - Vite (^5.1.0)

    - コード品質:
        - ESLint (^8.57.1)
        - Prettier (^2.8.8)

    - APIモック:
        - MSW (Mock Service Worker ^2.7.0)

    
- バックエンド:
    - Python (3.13)
    - FastAPI (^0.115.5)
    - Structlog (^24.4.0)
    - Poetry (1.8.4)

    - データベース:
        - SQLAlchemy (^2.0.36)
        - Asyncpg (^0.30.0)
        - Alembic (^1.14.0)
        - Psycopg2 (^2.9.10)

    - コード品質:
        - Ruff (^0.7.2)
        - MyPy (^1.13.0)
        - Pytest (^8.3.3)
        - Pytest-Asyncio (^0.24.0)



# ディレクトリ構成
下記のようなディレクトリ構成としました。
```txt
.
├── .github                                # GitHub関連の設定とワークフロー管理ディレクトリ
│   ├── ISSUE_TEMPLATE                     # GitHub Issuesの新規作成時に使用するテンプレートを格納
│   │   └── issue_template.md              # Issueの標準フォーマットを定義
│   ├── workflows                          # GitHub Actionsの自動ワークフロー定義ディレクトリ
│   │   ├── github-actions_backend_pytest.yml  # バックエンド用の単体テスト
│   │   ├── github-actions_backend_sa.yml  # バックエンド用のの自動フォーマット・リント
│   │   └── github-actions_frontend_prettier_eslint.yml  # フロントエンドコードの自動フォーマット・リント

│   └── pull_request_template.md           # プルリクエスト作成時の標準テンプレート
├── init-scripts                           # システム初期化用スクリプトを保存するディレクトリ
│   └── create_test_databases.sql          # テスト環境用のデータベースをセットアップする
├── template_backend_container             # バックエンドコンテナのソースコード
│   ├── .vscode
│   │   └── settings.json                  # VSCodeの設定ファイル。エディタの振る舞いをカスタマイズ。
│   ├── alembic                            # データベースマイグレーション管理ツール
│   │   ├── versions                       # マイグレーションバージョンを管理するディレクトリ
│   │   │   └── 97337ec4b949_initial_migration.py  # 初期データベースマイグレーションスクリプト
│   │   ├── env.py                         # Alembicの環境設定ファイル
│   │   └── script.py.mako                 # マイグレーションスクリプトのテンプレート
│   ├── app                                # アプリケーションのメインソースコード
│   │   ├── common                         # 共通機能と設定
│   │   │   ├── core                       # コアシステム機能
│   │   │   │   ├── init.py
│   │   │   │   ├── http_exception_handler.py  # HTTPの例外処理を管理
│   │   │   │   ├── log_config.py          # ロギング設定
│   │   │   │   └── request_validation_error.py  # リクエストのバリデーションエラー処理
│   │   │   ├── middleware                 # ミドルウェアコンポーネント
│   │   │   │   ├── init.py
│   │   │   │   ├── add_userIP_middleware.py  # ユーザーIPアドレスを追加するミドルウェア
│   │   │   │   └── error_handler_middleware.py  # エラーハンドリングミドルウェア
│   │   │   ├── init.py
│   │   │   ├── common.py
│   │   │   ├── database.py                # データベース関連の処理
│   │   │   ├── setting.py                 # プロジェクト固有の定数関連
│   │   │   └── test_data.py               # テストデータ関連
│   │   ├── features                       # アプリケーションの機能モジュール
│   │   │   ├── feature_auth               # 認証機能
│   │   │   │   ├── schemas                # データスキーマ定義
│   │   │   │   │   ├── init.py
│   │   │   │   │   └── user.py            # ユーザースキーマ
│   │   │   │   ├── init.py
│   │   │   │   ├── auth_controller.py     # 認証コントローラー
│   │   │   │   ├── auth_repository.py     # 認証データアクセス層
│   │   │   │   ├── auth_service.py        # 認証ビジネスロジック
│   │   │   │   ├── security.py            # セキュリティ関連ユーティリティ
│   │   │   │   ├── send_reset_password_email.py  # パスワードリセットメール送信
│   │   │   │   └── send_verification_email.py  # 検証メール送信
│   │   │   └── feature_dev                # 開発用機能
│   │   │       ├── init.py
│   │   │       ├── dev_controller.py      # 開発環境用コントローラー
│   │   │       ├── seed_data.py           # 初期データ投入
│   │   │       └── seed_user.py           # ユーザーシードデータ
│   │   ├── models                         # データベースモデル
│   │   │   ├── init.py
│   │   │   └── user.py                    # ユーザーモデル定義
│   │   ├── init.py
│   │   └── routes.py                      # APIのルーティング設定
│   ├── logs                               # ログファイル保存ディレクトリ
│   │   ├── Pytest                         # テスト関連ログ
│   │   │   ├── app                        # アプリケーションログ
│   │   │   └── sql                        # データベースログ
│   │   └── Server                         # サーバー稼働ログ
│   │       ├── app                        # アプリケーションログ
│   │       └── sql                        # データベースログ
│   ├── tests                              # テストコード
│   │   ├── features                       # 機能テスト
│   │   │   └── feature_auth               # 認証機能テスト
│   │   │       ├── unit                   # ユニットテスト
│   │   │       │   └── test_security.py
│   │   │       └── test_auth_controller.py
│   │   ├── fixtures                       # テスト用フィクスチャ
│   │   │   ├── authenticate_fixture.py    # 認証フィクスチャ
│   │   │   ├── db_fixture.py              # データベースフィクスチャ
│   │   │   └── logging_fixture.py         # ロギングフィクスチャ
│   │   ├── init.py
│   │   └── conftest.py                    # pytest設定ファイル
│   ├── .env                               # 環境変数設定ファイル
│   ├── alembic.ini                        # Alembic設定ファイル
│   ├── Dockerfile                         # バックエンドコンテナのDocker設定
│   ├── main.py                            # アプリケーションのエントリーポイント
│   ├── poetry.lock                        # Poetryパッケージマネージャーのロックファイル
│   └── pyproject.toml                     # Pythonプロジェクト設定ファイル
├── template_cypress_container             # Cypressによるエンドツーエンドテストコンテナ
│   ├── cypress                            # Cypressテスト関連ディレクトリ
│   │   ├── fixtures                       # テストデータ保存ディレクトリ
│   │   │   └── loginData.json             # ログインテスト用のサンプルデータ
│   │   ├── screenshots                    # テスト失敗時のスクリーンショット保存先
│   │   └── support                        # カスタムコマンドやグローバル設定
│   │       ├── commands                   # カスタムCypressコマンド
│   │       │   ├── login.js               # ログインプロセスのカスタムコマンド
│   │       │   └── logout.js              # ログアウトプロセスのカスタムコマンド
│   │       ├── errorHandling.js           # エラーハンドリング設定
│   │       └── index.js                   # Cypressサポート設定のメインファイル
│   ├── e2e                                # エンドツーエンドテストスクリプト
│   │   └── cypress                        # Cypressテストファイル
│   │       ├── home.cy.js                 # ホームページのテストスクリプト
│   │       └── login-to-mypage.cy.js      # マイページへのログインテストスクリプト
│   ├── front_st                           # フロントエンドステートテスト
│   │   └── routes                         # ルーティングテスト
│   │       └── login.cy.js                # ログインルートのテストスクリプト
│   ├── cypress.config.js                  # Cypressの設定ファイル
│   └── Dockerfile                         # Cypressコンテナ用Docker設定
├── template_frontend_container            # フロントエンドコンテナ（React + React Router）
│   ├── .vscode                            # VSCode設定
│   │   └── settings.json                  # VSCodeエディタ設定
│   ├── template_react-router              # Reactアプリケーション本体
│   │   ├── .react-router                  # React Router7用のディレクトリ
│   │   ├── app                            # アプリケーションのメインディレクトリ
│   │   │   ├── commons                    # 共通コンポーネントと機能
│   │   │   │   ├── components             # 汎用UIコンポーネント
│   │   │   │   │   ├── header             # ヘッダー関連コンポーネント
│   │   │   │   │   │   ├── LoggedInHeade.tsx    # ログイン後のヘッダー
│   │   │   │   │   │   └── LoggedOutHeader.tsx # ログアウト時のヘッダー
│   │   │   │   │   ├── ErrorMessage.tsx   # エラーメッセージコンポーネント
│   │   │   │   │   ├── Footer.tsx         # フッターコンポーネント
│   │   │   │   │   ├── Header.tsx         # メインヘッダーコンポーネント
│   │   │   │   │   ├── Layout.tsx         # ページレイアウト
│   │   │   │   │   ├── Main.tsx           # メインコンテンツエリア
│   │   │   │   │   ├── SimpleCard.tsx     # シンプルカードコンポーネント
│   │   │   │   │   └── SiteTitle.tsx      # サイトタイトルコンポーネント
│   │   │   │   ├── hooks                  # カスタムフック
│   │   │   │   │   └── useClickOutside.tsx # クリック外検出フック
│   │   │   │   ├── routes                 # 汎用ページのルートコンポーネント
│   │   │   │   │   ├── aboutUs.tsx
│   │   │   │   │   ├── contact.tsx
│   │   │   │   │   ├── eCommerceLaw.tsx
│   │   │   │   │   ├── privacyPolicy.tsx
│   │   │   │   │   └── termsOfService.tsx
│   │   │   │   └── utils                  # ユーティリティ
│   │   │   │       ├── errors             # エラー関連
│   │   │   │       │   └── AuthenticationError.tsx # 認証エラー
│   │   │   │       ├── logger.ts          # ロガー。現状は使用していない
│   │   │   │       └── types.ts           # ローダー関数の戻り値を型定義
│   │   │   ├── components                 # shadcn/ui用のディレクトリ
│   │   │   ├── features                   # 機能別モジュール
│   │   │   │   └── feature_auth           # 認証機能
│   │   │   │       ├── actions            # アクション関数で使用する汎用処理
│   │   │   │       │   └── logoutAction.tsx  # ログアウトアクション
│   │   │   │       ├── apis               # API関連
│   │   │   │       │   ├── fetchLoginData.tsx           # ログインを取得するAPI関数
│   │   │   │       │   ├── fetchLogoutData.tsx          # ログアウトを送信するAPI関数
│   │   │   │       │   ├── fetchResetPasswordData.tsx   # パスワードリセット処理するAPI関数
│   │   │   │       │   ├── fetchSendResetPasswordData.tsx  # パスワードリセット用メール送信のAPI関数
│   │   │   │       │   ├── fetchSendVerifyEmailData.tsx # メール検証用のデータを送信するAPI関数
│   │   │   │       │   ├── fetchSignupData.tsx          # サインアップデータを送信するAPI関数
│   │   │   │       │   └── fetchUserData.tsx            # ユーザーデータを取得するAPI関数
│   │   │   │       ├── components         # 認証関連コンポーネント
│   │   │   │       │   ├── LoginForm.tsx  # ログインフォームのコンポーネント
│   │   │   │       │   ├── ProfileCard.tsx # ユーザープロファイル情報を表示するカードコンポーネント
│   │   │   │       │   ├── ResetPasswordForm.tsx # パスワードリセット用フォームコンポーネント
│   │   │   │       │   ├── SendResetPasswordForm.tsx # パスワードリセットメール送信フォームコンポーネント
│   │   │   │       │   └── SignupForm.tsx # サインアップフォームコンポーネント
│   │   │   │       ├── loaders            # ローダー関数で使用する汎用処理
│   │   │   │       │   ├── authTokenLoader.tsx # 認証トークンの存在を確認するローダー関数
│   │   │   │       │   └── userDataLoader.tsx # ユーザーデータをロードするローダー関数
│   │   │   │       ├── routes             # 認証関連ルート
│   │   │   │       │   ├── _index.tsx     # ルートインデックスページのコンポーネントああああああああああああああああああああああああああ
│   │   │   │       │   ├── home.tsx       # ホームページのコンポーネント
│   │   │   │       │   ├── index.tsx      # 認証機能のメインインデックスコンポーネントあああああああああああああああああああああ
│   │   │   │       │   ├── login.tsx      # ログインページのコンポーネント
│   │   │   │       │   ├── mypage.tsx     # マイページのコンポーネント
│   │   │   │       │   ├── reset-password-complete.tsx # パスワードリセット完了ページのコンポーネント
│   │   │   │       │   ├── reset-password.tsx # パスワードリセットページのコンポーネント
│   │   │   │       │   ├── send-reset-password-email-complete.tsx # パスワードリセットメール送信完了ページのコンポーネント
│   │   │   │       │   ├── send-reset-password-email.tsx # パスワードリセットメール送信ページのコンポーネント
│   │   │   │       │   ├── send-signup-email.tsx # サインアップメール送信ページのコンポーネント
│   │   │   │       │   ├── signup-vertify-complete.tsx # サインアップ検証完了ページのコンポーネント
│   │   │   │       │   └── signup.tsx     # サインアップページのコンポーネント
│   │   │   │       ├── cookies.ts         # Cookie管理
│   │   │   │       └── passwordValidation.ts  # パスワードバリデーション
│   │   │   ├── lib
│   │   │   │   └── utils.ts               # ユーティリティ関数
│   │   │   ├── mocks                      # モックデータ
│   │   │   │   ├── handlers               # APIモックハンドラー。現在は使用しておらずメンテナンスも破棄。
│   │   │   │   │   ├── getMeHandler.ts
│   │   │   │   │   ├── index.ts
│   │   │   │   │   ├── loginHandler.ts
│   │   │   │   │   └── logoutHandler.ts
│   │   │   │   ├── browser.ts             # ブラウザ用モックサービス
│   │   │   │   └── server.ts              # サーバー用モックサービス
│   │   │   ├── entry.client.tsx           # クライアントサイドエントリーポイント
│   │   │   ├── entry.server.tsx           # サーバーサイドエントリーポイント
│   │   │   ├── root.tsx                   # アプリケーションのルートコンポーネント
│   │   │   ├── routes.ts                  # ルーティング設定
│   │   │   └── tailwind.css               # Tailwind CSS設定
│   │   ├── build                          # ビルド成果物
│   │   ├── certs                          # SSL証明書
│   │   │   ├── cert.pem
│   │   │   ├── key.pem
│   │   │   └── readme.md
│   │   ├── public                         # 静的ファイル
│   │   │   ├── favicon.ico                # ファビコン
│   │   │   └── mockServiceWorker.js       # msw用ファイル
│   │   ├── .env                           # 環境変数
│   │   ├── .env.example                   # 環境変数の例
│   │   ├── .eslintrc.cjs                  # ESLint設定
│   │   ├── .gitignore                     # Git無視ファイル
│   │   ├── .prettierrc                    # Prettier設定
│   │   ├── components.json                # コンポーネント設定
│   │   ├── package-lock.json
│   │   ├── package.json                   # npm依存関係
│   │   ├── postcss.config.js              # PostCSS設定
│   │   ├── react-router.config.ts         # React Router設定
│   │   ├── tailwind.config.ts             # Tailwind CSS設定
│   │   ├── tsconfig.json                  # TypeScript設定
│   │   └── vite.config.ts                 # Vite設定
│   ├── .dockerignore                      # Docker除外設定
│   └── Dockerfile                         # フロントエンドコンテナ用Docker設定
├── .gitignore                             # Git管理から除外するファイルの設定
├── docker-compose.yml                     # マルチコンテナDocker環境の設定
└── README.md                              # プロジェクト説明ドキュメント


```

# 環境構築手順
localhostをHTTPSで起動するためにcert.pemとkey.pemを生成する。
Windows端末でcert.pemとkey.pemを生成する方法は下記に記載。  
https://github.com/dbd-fish/react_sample/issues/12#issuecomment-2570993736

cert.pemとkey.pemを下記に格納。
`template_frontend_container\template_react-router\certs\cert.pem`
`template_frontend_container\template_react-router\certs\key.pem`

Docker環境を構築して下記コマンドを実行。
```Bash
docker-compose up --build
```

下記URLからAPIの動作確認が可能。
http://localhost:8000/docs

下記2つのAPIを実行してテスト用データを設定する
api/dev/clear_data
api/dev/seed_data

frontendコンテナを起動して下記コマンドを実行
```Bash
cd template_react-router
npm run dev
```

下記URLから動作確認が可能。  
https://localhost:5173/home


Cypressによるテストをする場合は`https://localhost:5173`が有効な状態でCypressコンテナを起動する。

# 各種コマンド
コンテナ内で下記コマンドを実行可能。

## フロントエンド
### tsc
frontコンテナ内において下記コマンドでtscを実行可能。
```Bash
npm run typecheck
```

### prettier
frontコンテナ内において下記コマンドでprettierの自動修正。
```Bash
npm run format
```

### eslint
frontコンテナ内において下記コマンドでeslintの自動修正。
```Bash
npm run lint
```

## バックエンド

## Pytest
下記コマンドPytestを実行可能。
```Bash
poetry run pytest
```

## Ruff
下記コマンドで静的コード解析＆自動修正。
```Bash
poetry run ruff check . --fix
```

## mypy
下記コマンドで型チェック。
```Bash
poetry run mypy .
```




