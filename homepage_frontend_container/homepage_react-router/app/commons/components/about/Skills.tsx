import React from 'react';
import { Card, CardContent, CardTitle } from '~/components/ui/card';

// スキルデータ
const skillData = [
  { 
    title: 'フロントエンド', 
    skills: [
      { name: 'TypeScript', level: 'medium' },
      { name: 'JavaScript', level: 'medium' },
      { name: 'HTML', level: 'medium' },
      { name: 'CSS', level: 'low' },
      { name: 'React (React Router 7)', level: 'low' },
      { name: 'Vue.js', level: 'low' },
      { name: 'Vuetify', level: 'low' }
    ]
  },
  { 
    title: 'バックエンド', 
    skills: [
      { name: 'Python', level: 'high' },
      { name: 'PHP', level: 'high' },
      { name: 'Java', level: 'high' },
      { name: 'Django', level: 'low' },
      { name: 'FastAPI', level: 'medium' },
      { name: 'Laravel', level: 'high' },
      { name: 'Spring Boot', level: 'medium' }
    ]
  },
  { 
    title: 'データベース', 
    skills: [
      { name: 'PostgreSQL', level: 'medium' },
      { name: 'MySQL', level: 'medium' },
      { name: 'DynamoDB', level: 'low' },
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
      { name: 'Docker', level: 'medium' },
      { name: 'GitLab', level: 'medium' },
      { name: 'GitHub', level: 'medium' },
      { name: 'SVN', level: 'low' }
    ]
  },
  { 
    title: 'その他スキル', 
    skills: [
      { name: 'C', level: 'medium' },
      { name: 'VBA', level: 'low' },
      { name: 'PowerShell', level: 'low' },
      { name: 'ASM', level: 'low' }
    ]
  },
  { 
    title: '工程', 
    skills: [
      { name: '要件定義', level: 'medium' },
      { name: '設計', level: 'high' },
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
      <div className="text-center text-gray-700 text-lg mb-6 space-y-2">
        <p>

          <span className="text-orange-500 font-bold">🟠</span> メインスキル: 業務で経験済み。自走可能。
        </p>
        <p>
          <span className="text-blue-500 font-bold">🔵</span> サブスキル: 業務で少し経験orそれに相当するぐらい自己学習済み。時間を要するが自走可能。
        </p>

        <p>
          <span className="font-bold">記号なし</span> 業務や自己学習で触れたことがあるが、キャッチアップに時間が必要。
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillData.map((category, index) => (
          <Card key={index}>
            <CardContent>
              <CardTitle className="text-xl font-bold text-center pt-4">{category.title}</CardTitle>
              <ul className="text-gray-700 text-lg leading-loose mt-2">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2">
                    {skill.level === 'high' ? (
                      <span className="text-orange-500">🟠</span>
                    ) : skill.level === 'medium' ? (
                      <span className="text-blue-500">🔵</span>
                    ) : skill.level === 'low' ? (
                      <span className="opacity-0">🔵</span> // 空白を入れるために透明の丸を使用
                    ) : null}
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
