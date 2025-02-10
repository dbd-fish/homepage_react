import { useState } from 'react';
import Layout from '~/commons/components/Layout';
import Main from '~/commons/components/Main';
import SectionHeader from '~/commons/components/SectionHeader';
import { Card, CardContent, CardTitle } from '~/components/ui/card';
import { Modal } from '~/commons/components/Modal';

// プロジェクトデータの型を定義（id 削除, details を配列に変更）
type Project = {
  section: string;
  title: string;
  details: (string | JSX.Element)[]; // 文字列またはJSX要素
  images: string[];
};

const projects: Project[] = [
  {
    section: '開発支援(SES)',
    title: 'Webエンジニアとして開発支援',
    details: [
      'Python、PHPなどのバックエンドを中心にWebシステムの開発に従事。',
      'フロントエンド業務やAWS環境などの調査も兼任して、様々な面でクライアント様をサポート。',
      <>
        具体的なスキルなどは{' '}
        <a href="/about" className="text-blue-500 hover:underline">
          私について
        </a>{' '}
        を参照。
      </>,
    ],
    images: ['/テスト画像.webp'],
  },
  {
    section: 'インストラクター',
    title: '新人研修向けIT講師',
    details: [
      '大手企業向け新人研修講師として登壇。',
      '基本情報技術者試験レベルの基礎的な内容からWebシステム構築するために必要なプログラミングスキルを指導。',
      '具体的なスキルとしてはJava, Spring boot, HTML, JavaScript, CSS, MySQLなどを指導。',
    ],
    images: ['/テスト画像.webp', '/テスト画像.webp'],
  },
  {
    section: 'インストラクター',
    title: 'プログラミングスクールのテクニカルメンター',
    details: [
      '社会人向けプログラミングスクールにおいて、メンター業務を担当。',
      '進捗管理やテクニカル面のサポートにより受講者の成長を支える。',
      '具体的なスキルとしてはPHP, Laravel, HTML, JavaScript, CSS, MySQLなどを指導。',
    ],
    images: ['/テスト画像.webp', '/テスト画像.webp'],
  },
];

export default function Works() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // projects 配列から section のユニークな値を抽出
  const sections = Array.from(
    new Set(projects.map((project) => project.section)),
  );

  return (
    <Layout>
      <SectionHeader title="実績" subtitle="主な実績" />

      <Main>
        <div className="mx-auto px-4 py-12 max-w-screen-xl">
          {sections.map((section) => (
            <section key={section} className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-10">
                {section}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter((project) => project.section === section)
                  .map((project, index) => (
                    <Card
                      key={index}
                      className="cursor-pointer w-full sm:w-auto lg:w-[400px] lg:h-[500px] hover:shadow-lg transition duration-200"
                      onClick={() => setSelectedProject(project)}
                    >
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-auto object-cover rounded-t-lg"
                      />
                      <CardContent>
                        <CardTitle className="text-xl font-bold text-center">
                          {project.title}
                        </CardTitle>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </section>
          ))}
        </div>
      </Main>

      {/* モーダル */}
      {selectedProject && (
        <Modal
          open={!!selectedProject}
          onOpenChange={() => setSelectedProject(null)}
          images={selectedProject.images}
        >
          <div>
            <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
            <div className="text-lg text-gray-700 space-y-2">
              {selectedProject.details.map((detail, i) => (
                <p key={i}>{detail}</p> // 配列の各要素をリスト化
              ))}
            </div>
          </div>
        </Modal>
      )}
    </Layout>
  );
}
