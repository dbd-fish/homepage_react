import { type RouteConfig, route, index } from '@react-router/dev/routes';

export default [
  // ルートパスに対応するコンポーネント
  index('./features/auth_user/routes/home.tsx'), // NOTE: 同一のtsxファイルを異なるルーティングに指定できないため、home.tsxはここのみで使用

  // その他のルート
  route('login', './features/auth_user/routes/login.tsx'),
  route('mypage', './features/auth_user/routes/mypage.tsx'),

  // 会員登録
  route('signup', './features/auth_user/routes/signup.tsx'),
  route('send-signup-email', './features/auth_user/routes/send-signup-email.tsx'),
  route('signup-vertify-complete', './features/auth_user/routes/signup-vertify-complete.tsx'),

  // パスワードリセット
  route('send-reset-password-email', './features/auth_user/routes/send-reset-password-email.tsx'),
  route('send-reset-password-email-complete', './features/auth_user/routes/send-reset-password-email-complete.tsx'),
  route('reset-password', './features/auth_user/routes/reset-password.tsx'),
  route('reset-password-complete', './features/auth_user/routes/reset-password-complete.tsx'),

  // フッター情報
  route('privacy-policy', './commons/routes/privacyPolicy.tsx'), // プライバシーポリシー
  route('terms-of-service', './commons/routes/termsOfService.tsx'), // 利用規約
  route('e-commerce-law', './commons/routes/eCommerceLaw.tsx'), // 特定商取引法に基づく表記
  route('about-us', './commons/routes/aboutUs.tsx'), // 運営者情報
  route('contact', './commons/routes/contact.tsx'), // お問い合わせ

] satisfies RouteConfig;
