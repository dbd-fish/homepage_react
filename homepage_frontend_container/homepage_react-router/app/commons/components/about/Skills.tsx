import React from 'react';
import { Card, CardContent, CardTitle } from '~/components/ui/card';

// スキルレベルに対応する記号
const skillLevels: { [key: string]: string } = {
  high: '●',   // 熟練
  medium: '▲', // 経験あり
  low: ''    // 未経験または学習中
};

// スキルデータ
const skillData = [
  { 
    title: 'フロントエンド', 
    skills: [
      { name: 'TypeScript', level: 'high' },
      { name: 'JavaScript', level: 'high' },
      { name: 'HTML', level: 'high' },
      { name: 'CSS', level: 'high' },
      { name: 'React (React Router 7)', level: 'medium' },
      { name: 'Vue.js', level: 'medium' },
      { name: 'Vuetify', level: 'low' }
    ]
  },
  { 
    title: 'バックエンド', 
    skills: [
      { name: 'Python', level: 'high' },
      { name: 'PHP', level: 'high' },
      { name: 'Java', level: 'medium' },
      { name: 'Django', level: 'medium' },
      { name: 'FastAPI', level: 'medium' },
      { name: 'Laravel', level: 'medium' },
      { name: 'Spring Boot', level: 'low' }
    ]
  },
  { 
    title: 'データベース', 
    skills: [
      { name: 'PostgreSQL', level: 'high' },
      { name: 'MySQL', level: 'high' },
      { name: 'DynamoDB', level: 'medium' },
      { name: 'H2 Database', level: 'low' }
    ]
  },
  { 
    title: 'インフラ', 
    skills: [
      { name: 'AWS', level: 'medium' }
    ]
  },
  { 
    title: '開発ツール', 
    skills: [
      { name: 'Docker', level: 'high' },
      { name: 'GitLab', level: 'high' },
      { name: 'GitHub', level: 'high' },
      { name: 'SVN', level: 'low' }
    ]
  },
  { 
    title: 'その他スキル', 
    skills: [
      { name: 'C', level: 'low' },
      { name: 'VBA', level: 'low' },
      { name: 'PowerShell', level: 'low' },
      { name: 'ASM', level: 'low' }
    ]
  },
  { 
    title: '工程', 
    skills: [
      { name: '要件定義', level: 'medium' },
      { name: '設計', level: 'medium' },
      { name: '実装', level: 'high' },
      { name: 'テスト仕様書作成＆テスト', level: 'medium' }
    ]
  },
  { 
    title: 'その他', 
    skills: [
      { name: '新人研修向け講師', level: 'high' },
      { name: 'プログラミングスクールのメンター', level: 'medium' }
    ]
  }
];

export default function Skills() {
  return (
    <section className="mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-10">
        スキル一覧
      </h2>

      {/* スキルレベル凡例（注釈） */}
      <div className="text-center text-gray-700 text-lg mb-6">
        <p className="inline-block mr-4"><span className="font-bold">●</span> 熟練</p>
        <p className="inline-block mr-4"><span className="font-bold">▲</span> 経験あり</p>
        <p className="inline-block"><span className="font-bold">ー</span> 未経験または学習中</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillData.map((category, index) => (
          <Card key={index}>
            <CardContent>
              <CardTitle className="text-xl font-bold text-center pt-4">{category.title}</CardTitle>
              <ul className="text-gray-700 text-lg leading-loose mt-2">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-2">{skillLevels[skill.level]}</span>
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
