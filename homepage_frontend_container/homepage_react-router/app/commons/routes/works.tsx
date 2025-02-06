import React, { useState } from 'react';
import Layout from '~/commons/components/Layout';
import Main from '~/commons/components/Main';
import SectionHeader from '~/commons/components/SectionHeader';
import { Card, CardContent, CardTitle } from '~/components/ui/card';
import { Modal } from '~/commons/components/Modal';

// プロジェクトデータの型を定義
type Project = {
  id: number;
  section: string;
  title: string;
  description: string;
  details: string;
  images: string[]; 
};

const projects: Project[] = [
  {
    id: 1,
    section: '受託開発',
    title: 'Webシステム開発',
    description:
      'クラウドインフラを活用した高度なWebシステムをゼロから構築します。要件定義から設計、開発、テスト、リリースまで一貫して対応します。',
    details:
      'システム稼働後の保守運用についても柔軟に対応し、長期的なサポートを提供します。',
    images: ['/テスト画像.webp', '/テスト画像2.webp', '/テスト画像.webp'], // 複数画像
  },
  {
    id: 2,
    section: '受託開発',
    title: '既存システムの改修',
    description:
      '他社が開発した既存のWebシステムについて、解析から改善まで対応します。',
    details:
      'パフォーマンス向上や新機能追加、コードレビューなど幅広いサポートを行います。',
    images: ['/テスト画像2.webp', '/テスト画像.webp'], // 複数画像
  },
  {
    id: 3,
    section: 'SES',
    title: 'エンジニアとして開発支援',
    description:
      'Python、Java、PHPなどのバックエンド開発を中心に、フロントエンド開発も対応可能です。',
    details:
      'チームの一員として成果物の品質向上に努め、プロジェクト成功を支援します。',
    images: ['/テスト画像.webp'], // 単一画像も許容
  },
  {
    id: 4,
    section: 'SES',
    title: 'IT講師',
    description:
      '大手企業向け研修講師として、実践的なプログラミングやインフラ技術を指導します。',
    details:
      'JavaやPythonを中心に、クラウドやセキュリティに関するトレーニングを提供します。',
    images: ['/テスト画像.webp', '/テスト画像.webp'], // 複数画像
  },
];

export default function Works() {
  // 型を Project | null に設定
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <Layout>
      <SectionHeader title="制作実績" subtitle="これまでの成果" />

      <Main>
        <div className="mx-auto px-4 py-12 max-w-screen-xl">
          {['受託開発', 'SES'].map((section) => (
            <section key={section} className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-10">
                {section}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter((project) => project.section === section)
                  .map((project) => (
                    <Card
                      key={project.id}
                      className="cursor-pointer"
                      onClick={() => setSelectedProject(project)}
                    >
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-48 object-cover rounded-t-lg"
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
          <p className="text-lg text-gray-700">{selectedProject.details}</p>
        </div>
      </Modal>
    )}
    </Layout>
  );
}
