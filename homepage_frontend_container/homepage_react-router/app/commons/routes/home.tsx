import Layout from '~/commons/components/Layout';
import Main from '~/commons/components/Main';
import SectionHeader from '~/commons/components/SectionHeader';
// import logger from '~/commons/utils/logger';


export default function Home() {
  return (
    <Layout>
      {/* 大タイトル */}
      <SectionHeader title="ホーム" subtitle="このサイトについて" />

      {/* コンテンツ部分 */}
      <Main>
        <div className="mx-auto px-4 py-12 max-w-screen-xl">
          {/* 受託開発セクション */}
          <section className="mb-16">

          </section>

          {/* セクション */}

        </div>
      </Main>
    </Layout>
  );
}
