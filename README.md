# リポジトリ概要
React(ReactRouter7)でホームページをつくる




# 主な技術スタック
- 環境構築: 
    - Docker
    - docker-compose
- フロントエンド:
    - React (18.3.1)
    - ReactRouter (7.1.1)
    - TypeScript (5.7.3)
    - TailwindCSS (3.4.17)
    - shadcn/ui (2.3.0)
    - npm

    - ビルドツール:
        - Vite (5.4.11)

    - コード品質:
        - ESLint (
            8.57.1)
        - Prettier (9.1.0)


mswは残しているが使用していない

# ディレクトリ構成
下記のようなディレクトリ構成としました。
```txt
C:.
│  .gitignore                         # Git の無視リスト
│  docker-compose.yml                  # Docker Compose の設定ファイル
│  README.md                            # プロジェクトの説明ファイル
│  
├─.github                               # GitHub関連の設定フォルダ
│  │  pull_request_template.md          # プルリクエストのテンプレート
│  │  
│  ├─ISSUE_TEMPLATE                     # Issue テンプレート関連
│  │      issue_template.md             # Issue 作成時のテンプレート
│  │      
│  └─workflows                          # GitHub Actions のワークフローファイル
│          github-actions_frontend_prettier_eslint.yml  # PrettierとESLintなどのCI設定
│          
└─homepage_frontend_container           # フロントエンドのDockerコンテナ設定
    │  .dockerignore                    # Docker の無視リスト
    │  Dockerfile                        # フロントエンドのDockerファイル
    │  
    ├─.vscode                            # VSCodeの設定フォルダ
    │      settings.json                 # VSCodeの設定
    │      
    └─homepage_react-router              # React Router を使用したフロントエンドアプリ
        │  .env                          # 環境変数の設定ファイル
        │  .env.example                  # 環境変数のサンプル
        │  .eslintrc.cjs                 # ESLint の設定ファイル
        │  .gitignore                    # Git の無視リスト
        │  .prettierrc                   # Prettier の設定ファイル
        │  components.json                # コンポーネントの設定
        │  package-lock.json              # npm のロックファイル
        │  package.json                   # npm の依存関係管理ファイル
        │  postcss.config.js              # PostCSS の設定ファイル
        │  react-router.config.ts         # React Router の設定
        │  tailwind.config.ts             # TailwindCSS の設定ファイル
        │  tsconfig.json                  # TypeScript の設定ファイル
        │  vite.config.ts                 # Vite の設定ファイル
        │  
        ├─.react-router                   # React Router のキャッシュフォルダ
        ├─app                             # アプリケーションの主要コード
        │  │  entry.client.tsx            # クライアントエントリーポイント
        │  │  entry.server.tsx            # サーバーエントリーポイント
        │  │  root.tsx                    # ルートコンポーネント
        │  │  routes.ts                   # ルーティングの定義
        │  │  tailwind.css                # TailwindCSS のスタイル
        │  │  
        │  ├─commons                      # 共通コンポーネント
        │  │  ├─components
        │  │  │  │  ErrorMessage.tsx      # エラーメッセージコンポーネント
        │  │  │  │  Footer.tsx            # フッターコンポーネント
        │  │  │  │  Header.tsx            # ヘッダーコンポーネント
        │  │  │  │  Layout.tsx            # ページのレイアウト
        │  │  │  │  Main.tsx              # メインコンテンツ領域
        │  │  │  │  Modal.tsx             # モーダルコンポーネント
        │  │  │  │  SectionHeader.tsx     # セクションヘッダー
        │  │  │  │  SiteTitle.tsx         # サイトのタイトル
        │  │  │  │  
        │  │  │  └─about                  # Aboutページ用コンポーネント
        │  │  │          Career.tsx       # キャリア情報
        │  │  │          Profile.tsx      # プロフィール情報
        │  │  │          Qualifications.tsx # 資格情報
        │  │  │          Skills.tsx       # スキル情報
        │  │  │          SocialLinks.tsx  # ソーシャルリンク
        │  │  │      
        │  │  ├─routes                    # ルーティングコンポーネント
        │  │  │      about.tsx            # About ページ
        │  │  │      contact.tsx          # お問い合わせページ
        │  │  │      home.tsx             # ホームページ
        │  │  │      Portfolios.tsx       # ポートフォリオページ
        │  │  │      privacyPolicy.tsx    # プライバシーポリシーページ
        │  │  │      services.tsx         # サービスページ
        │  │  │      test.tsx             # テスト用ページ
        │  │  │      works.tsx            # 実績ページ
        │  │  │      
        │  │  └─utils                     # ユーティリティ関数
        │  │      │  logger.ts            # ログ機能
        │  │      │  types.ts             # 型定義
        │  │      │  
        │  │      └─errors                 # エラー関連
        │  │              AuthenticationError.tsx # 認証エラー
        │  │              
        │  ├─components                   # shadcn/ui用のフォルダ
        │              
        ├─build                           # ビルド後のファイル
        ├─certs                           # SSL証明書などのフォルダ
        │      cert.pem                   # SSL 証明書
        │      key.pem                    # SSL 秘密鍵
        │      readme.md                   # 証明書に関する説明
        │          
        └─public                          # 公開用の静的ファイル
                favicon.ico                # ファビコン
                mockServiceWorker.js       # MSW (Mock Service Worker)
                認証機能1.png               # 認証機能のスクリーンショット
                ホームページ画像_PC.png      # ホームページの画像
                プログラミングスクールのテクニカルメンター.png # 教育関連の画像
```

# 環境構築手順
## 開発環境
localhostをHTTPSで起動するためにcert.pemとkey.pemを生成する。
Windows端末でcert.pemとkey.pemを生成する方法は下記に記載。  
https://github.com/dbd-fish/react_sample/issues/12#issuecomment-2570993736

cert.pemとkey.pemを下記に格納。
`homepage_frontend_container\homepage_react-router\certs\cert.pem`
`homepage_frontend_container\homepage_react-router\certs\key.pem`

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
cd homepage_react-router
npm run dev
```

下記URLから動作確認が可能。  
https://localhost:5173


Cypressによるテストをする場合は`https://localhost:5173`が有効な状態でCypressコンテナを起動する。

## 本番環境
下記コマンドで.envに設定した値を環境変数として登録
```Bash
export SMTP_USER="your-email@gmail.com"
export SMTP_PASS="your-password"
export CONTACT_RECEIVER="receiver@example.com"
```


下記コマンドで本番用のビルドファイルを作成＆起動
```Bash
cd homepage_react-router
npm run build
npm run start
```
ローカル環境で確かめる場合は下記URLから動作確認可能。
https://localhost:5173


# 各種コマンド
コンテナ内で下記コマンドを実行可能。

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

