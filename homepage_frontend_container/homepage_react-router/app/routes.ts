import { type RouteConfig, route, index } from '@react-router/dev/routes';

export default [
  // ルートパスに対応するコンポーネント
  index('./commons/routes/home.tsx'),

  // テスト用
  route('test', './commons/routes/test.tsx'), 

  // メインページ
  route('works', './commons/routes/works.tsx'),  // 実績
  route('portfolios', './commons/routes/portfolios.tsx'),  // ポートフォリオ
  route('about', './commons/routes/about.tsx'), // 私について
  route('services', './commons/routes/services.tsx'),  // サービス
  route('contact', './commons/routes/contact.tsx'),  // お問い合わせ
  
  // フッター情報
  route('privacy-policy', './commons/routes/privacyPolicy.tsx'), // プライバシーポリシー

] satisfies RouteConfig;
