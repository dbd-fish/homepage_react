# Dockerfile for Frontend (React)
# ファイル名: frontend/Dockerfile

# ベースイメージとしてNode.jsを使用
FROM node:22

# 作業ディレクトリを設定
WORKDIR /app


# プロジェクトのソースコード全体をコピー
COPY . .

# ENV で実行時の環境変数を定義
ENV SMTP_USER=test@test.com
ENV SMTP_PASS=test
ENV CONTACT_RECEIVER=test.test@test.com


# 作業ディレクトリを作成済みのReactRouterプロジェクトに変更して、依存関係をインストール
WORKDIR /app/homepage_react-router
RUN npm install

RUN npm run build
CMD ["npm", "run", "start"]


# デフォルトのCMDをbashにしておく（デバッグや後の変更用）
# CMD ["bash"]

