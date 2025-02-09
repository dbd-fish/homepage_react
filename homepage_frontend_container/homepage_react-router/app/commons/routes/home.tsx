import Layout from "~/commons/components/Layout";
import Main from "~/commons/components/Main";
import SectionHeader from "~/commons/components/SectionHeader";
import { Button } from "~/components/ui/button";
import { Link } from 'react-router';
import { Separator } from '~/components/ui/separator';
import Profile from '~/commons/components/about/Profile';

export default function Home() {
  return (
    <Layout>
      {/* ヘッダー */}
      <SectionHeader title="ホーム" subtitle="このサイトの概要" />

      {/* メインコンテンツ */}
      <Main>
        <div className="mx-auto px-4 py-12 max-w-screen-xl">

          {/* このサイト説明 */}
          <section className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">このサイトについて</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              フリーランスエンジニアとして活動する
              <span className="font-bold">山田太郎</span> のポートフォリオ兼ホームページです。
              私の提供するサービスや実績、技術スタックについて紹介しています。
            </p>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mt-4">
              このサイトはReact Router7, shadcn/uiを使って自作しました。
            </p>
          </section>

          <Separator className="my-12" />


          {/* Heroセクション */}
          <Profile />

          <Separator className="my-12" />

          {/* サービスセクション */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">提供するサービス</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white shadow-md rounded-lg">
                <h3 className="text-xl font-bold mb-2">Webシステム開発</h3>
                <p className="text-gray-600">
                  最新の技術スタックを使用し、パフォーマンスと拡張性を考慮したWebシステムを開発します。
                </p>
              </div>
              <div className="p-6 bg-white shadow-md rounded-lg">
                <h3 className="text-xl font-bold mb-2">インストラクター</h3>
                <p className="text-gray-600">
                  今までのエンジニアとしての経験をもとに、新入社員様やエンジニア転職をされる方向けに講師として指導します。
                </p>
              </div>
            </div>
          </section>

          <Separator className="my-12" />

          {/* お問い合わせセクション */}
          <section className="text-center">
            <h2 className="text-2xl font-semibold mb-4">お問い合わせ</h2>
            <p className="text-gray-600 mb-6">
              サービスに関するご質問やご依頼はこちらからお気軽にご連絡ください。
            </p>
            <Button size="lg" className="px-8 py-4">
              <Link to="/contact">お問い合わせフォームへ</Link>
            </Button>
          </section>
        </div>
      </Main>
    </Layout>
  );
}
