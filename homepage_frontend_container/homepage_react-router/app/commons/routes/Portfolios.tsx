import React from 'react';
import Layout from '~/commons/components/Layout';
import Main from '~/commons/components/Main';
import SectionHeader from '~/commons/components/SectionHeader';
import { Card, CardContent, CardTitle } from '~/components/ui/card';

// ポートフォリオデータの型
type PortfolioProject = {
  id: number;
  title: string;
  description: string;
  details: string;
  images: string[];
  url: string; 
};

const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    title: '私のホームページサイト',
    description: '私のホームページ',
    details: '簡素なデザインのホームページ',
    images: ['/テスト画像.webp', '/テスト画像2.webp'],
    url: 'https://example.com/portfolio-site2',
  },
  {
    id: 2,
    title: '認証機能のサンプルサイト',
    description: 'ログイン、ユーザー登録、パスワードリセットをメール認証を用いて実現',
    details: 'React & Firebaseを活用し、リアルタイムデータ同期。',
    images: ['/テスト画像.webp', '/テスト画像2.webp'],
    url: 'https://example.com/portfolio-app1',
  },
];

export default function Portfolio() {
  return (
    <Layout>
      <SectionHeader title="ポートフォリオ" subtitle="個人的な制作物" />

      <Main>
        <div className="mx-auto px-4 py-12 max-w-screen-xl">
          <section className="mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {portfolioProjects.map((project) => (
                <Card
                  key={project.id}
                  className="cursor-pointer hover:shadow-lg transition duration-200"
                  onClick={() => window.location.href = project.url}
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
        </div>
      </Main>
    </Layout>
  );
}
