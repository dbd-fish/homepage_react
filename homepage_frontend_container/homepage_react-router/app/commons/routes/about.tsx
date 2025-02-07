import Layout from '~/commons/components/Layout';
import Main from '~/commons/components/Main';
import SectionHeader from '~/commons/components/SectionHeader';
import { Separator } from '~/components/ui/separator';
import Profile from '~/commons/components/about/Profile'; // 自己紹介コンポーネント
import Skills from '~/commons/components/about/Skills'; // スキル一覧コンポーネント
import Qualifications from '~/commons/components/about/Qualifications'; // 資格コンポーネント
import SocialLinks from '~/commons/components/about/SocialLinks'; // SNSコンポーネント

export default function About() {
  return (
    <Layout>
      {/* 大タイトル */}
      <SectionHeader title="私について" subtitle="自己紹介と経歴" />

      {/* コンテンツ部分 */}
      <Main>
        <div className="mx-auto px-4 py-12 max-w-screen-xl">
          {/* 自己紹介 */}
          <Profile />

          <Separator className="my-12" />

          {/* スキル一覧 */}
          <Skills />

          <Separator className="my-12" />

          {/* 資格・認定 */}
          <Qualifications />

          <Separator className="my-12" />

          {/* SNS & 連絡先 */}
          <SocialLinks />
        </div>
      </Main>
    </Layout>
  );
}
