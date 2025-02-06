import { type RouteConfig, route, index } from '@react-router/dev/routes';

export default [
  // ルートパスに対応するコンポーネント
  index('./commons/routes/home.tsx'),

  // テスト用
  route('test', './commons/routes/test.tsx'), 

  // メインページ
  route('works', './commons/routes/works.tsx'),  // 制作実績
  route('about', './commons/routes/about.tsx'), // 私について
  route('services', './commons/routes/services.tsx'),  // サービス
  route('contact', './commons/routes/contact.tsx'),  // お問い合わせ

  // フッター情報
  route('privacy-policy', './commons/routes/privacyPolicy.tsx'), // プライバシーポリシー
  route('terms-of-service', './commons/routes/termsOfService.tsx'), // 利用規約
  route('e-commerce-law', './commons/routes/eCommerceLaw.tsx'), // 特定商取引法に基づく表記
] satisfies RouteConfig;
