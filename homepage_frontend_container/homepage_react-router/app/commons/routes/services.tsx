import Layout from '~/commons/components/Layout';
import Main from '~/commons/components/Main';
import SectionHeader from '~/commons/components/SectionHeader';
import { Link } from 'react-router';

export default function Services() {
  return (
    <Layout>
      {/* 大タイトル */}
      <SectionHeader title="サービス" subtitle="事業紹介" />

      {/* コンテンツ部分 */}
      <Main>
        <div className="mx-auto px-4 py-12 max-w-screen-xl">
          {/* 受託開発セクション */}
          <section className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-10">
              受託開発
            </h2>
            <div className="flex flex-col gap-8 items-center">
              <div className="flex flex-col md:flex-row items-stretch rounded-lg overflow-hidden bg-white w-full mt-16">
                <img
                  src="/テスト画像.webp"
                  alt="Webシステム開発"
                  className="w-full md:w-1/2 h-auto object-cover rounded-lg md:rounded-none md:rounded-l-lg p-2"
                />
                <div className="p-6 flex flex-col">
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-800">
                    Webシステム開発
                  </h3>
                  <p className="text-gray-700 text-xl md:text-2xl leading-loose mb-6">
                    クラウドインフラを活用した高度なWebシステムをゼロから構築します。
                    要件定義から設計、開発、テスト、リリースまで一貫して対応します。
                  </p>
                  <p className="text-gray-700 text-xl md:text-2xl leading-loose">
                    システム稼働後の保守運用についても柔軟に対応し、長期的なサポートを提供します。
                  </p>
                  {/* TODO: ここにバッチ形式などで作成可能なシステムが具体的に述べたい */}
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-stretch rounded-lg overflow-hidden bg-white w-full mt-24">
                <img
                  src="/テスト画像.webp"
                  alt="既存システム改修"
                  className="w-full md:w-1/2 h-auto object-cover rounded-lg md:rounded-none md:rounded-l-lg p-2"
                />
                <div className="p-6 flex flex-col">
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-800">
                    既存システムの改修
                  </h3>
                  <p className="text-gray-700 text-xl md:text-2xl leading-loose mb-6">
                    他社が開発した既存システムについて、解析から改善まで対応します。
                    パフォーマンスの向上や新機能の追加などをご相談ください。
                  </p>
                  <p className="text-gray-700 text-xl md:text-2xl leading-loose">
                    コードレビューやバグ修正、セキュリティ強化など、さまざまな改善ポイントに対応可能です。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SESセクション */}
          <section>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mt-36">
              SES
            </h2>
            <div className="flex flex-col gap-8 items-center">
              <div className="flex flex-col md:flex-row items-stretch rounded-lg overflow-hidden bg-white w-full mt-24">
                <img
                  src="/テスト画像.webp"
                  alt="開発支援"
                  className="w-full md:w-1/2 h-auto object-cover rounded-lg md:rounded-none md:rounded-l-lg p-2"
                />
                <div className="p-6 flex flex-col">
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-800">
                    エンジニアとして開発支援
                  </h3>
                  <p className="text-gray-700 text-xl md:text-2xl leading-loose mb-6">
                    Python、Java、PHPなどのバックエンド開発を中心に、
                    フロントエンドなども含めた総合的な支援を提供します。
                  </p>
                  <p className="text-gray-700 text-xl md:text-2xl leading-loose mb-6">
                    チームの一員としてプロジェクトを円滑に進めるため、コミュニケーションを重視し、
                    成果物の品質向上に努めます。
                  </p>
                  <p className="text-gray-700 text-xl md:text-2xl leading-loose">
                    詳細なスキルや実績については
                    <Link to="/about" className="text-blue-500 hover:underline">
                      私について
                    </Link>
                    をご覧ください
                  </p>     
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-stretch rounded-lg overflow-hidden bg-white w-full mt-24">
                <img
                  src="/テスト画像.webp"
                  alt="IT講師"
                  className="w-full md:w-1/2 h-auto object-cover rounded-lg md:rounded-none md:rounded-l-lg p-2"
                />
                <div className="p-6 flex flex-col">
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-800">
                    インストラクター
                  </h3>
                  <p className="text-gray-700 text-xl md:text-2xl leading-loose mb-6">
                    大手会社様向けの研修講師やプログラミングスクールのメンターとして活躍できます。
                  </p>
                  <p className="text-gray-700 text-xl md:text-2xl leading-loose mb-6">
                    ITの基礎的な内容やJavaやPythonなどプログラミングスキルだけでなく、要件定義～テストまでの作法やマネジメント方法の指導なども可能です。
                  </p>
                  <p className="text-gray-700 text-xl md:text-2xl leading-loose">
                    教材開発や研修スケジュールの作成なども担当していました。
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Main>
    </Layout>
  );
}
