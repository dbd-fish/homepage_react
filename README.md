# リポジトリ概要
Reactでホームページを作る

## ポイント


## 画面例
### PC画面


### スマホ画面


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



# ディレクトリ構成
下記のようなディレクトリ構成としました。
```txt


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
https://localhost:5173/home


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

