import { Card, CardContent, CardTitle } from '~/components/ui/card';
import { Button } from '~/components/ui/button';
import { Link } from 'react-router';

export default function Profile() {
  return (
    <section className="mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-10">
        自己紹介
      </h2>
      <Card className="flex flex-col md:flex-row items-center p-6">
        <img
          src="/テスト画像.webp"
          alt="プロフィール画像"
          className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full mx-auto md:mx-0 shadow-lg"
        />
        <CardContent className="p-6">
          <CardTitle className="text-3xl font-extrabold text-gray-800">山田 太郎</CardTitle>
          <p className="text-gray-700 text-xl leading-loose">
            フルスタックエンジニアとして、Webシステム開発・SES・IT講師など幅広く活動。
            <br />
            クライアントの課題解決に向け、技術的な知見を活かしたサポートを提供します。
          </p>
          <Button variant="outline" asChild className="mt-4">
            <Link to="/contact">お問い合わせはこちら</Link>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
