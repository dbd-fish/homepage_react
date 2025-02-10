import { useState } from 'react';
import Layout from '~/commons/components/Layout';
import Main from '~/commons/components/Main';
import SectionHeader from '~/commons/components/SectionHeader';
import { Card, CardContent, CardTitle } from '~/components/ui/card';
import { Modal } from '~/commons/components/Modal';

// ポートフォリオデータの型を定義（id 削除, details を配列に変更）
type PortfolioProject = {
  section: string;
  title: string;
  details: (string | JSX.Element)[]; // 文字列またはJSX要素
  images: string[];
  url: string;
};

const portfolioProjects: PortfolioProject[] = [
  {
    section: 'ポートフォリオ',
    title: '私のホームページサイト',
    details: [
      '私のホームページです。',
      'シンプルなデザインを意識しつつ、使いやすさを考慮しました。',
      '下記を使用して作成しました。',
      'React(React Router7), TypeScript, Tailwind CSS, shadcn/ui',
    ],
    images: ['/テスト画像.webp', '/テスト画像2.webp'],
    url: 'https://example.com/portfolio-site2',
  },
  {
    section: 'ポートフォリオ',
    title: '認証機能のサンプルサイト',
    details: [
      'FastAPIとReact Route7の練習として認証機能を作成しました。',
      'ユーザー登録、ログイン、ログアウト、パスワードリセットが可能です。',
      'ユーザー登録とパスワードリセット時はメールアドレス宛に専用のURLを送ります。',
      'また、UI には shadcn/uiとTailwind CSSを採用し、シンプルなデザインにしました。',
      'PytestやCypressテストなどの環境も整えました。',
    ],
    images: ['/テスト画像.webp', '/テスト画像2.webp'],
    url: 'https://example.com/portfolio-app1',
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] =
    useState<PortfolioProject | null>(null);

  // projects 配列から section のユニークな値を抽出
  const sections = Array.from(
    new Set(portfolioProjects.map((project) => project.section)),
  );

  return (
    <Layout>
      <SectionHeader title="ポートフォリオ" subtitle="個人的な制作物" />

      <Main>
        <div className="mx-auto px-4 py-12 max-w-screen-xl">
          {sections.map((section) => (
            <section key={section} className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-10">
                {section}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioProjects
                  .filter((project) => project.section === section)
                  .map((project, index) => (
                    <Card
                      key={index}
                      className="cursor-pointer w-full sm:w-auto lg:w-[400px] lg:h-[450px] hover:shadow-lg transition duration-200"
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
            <a
              href={selectedProject.url}
              className="text-blue-500 hover:underline mt-4 block"
              target="_blank"
              rel="noopener noreferrer"
            >
              サイトを見る
            </a>
          </div>
        </Modal>
      )}
    </Layout>
  );
}
