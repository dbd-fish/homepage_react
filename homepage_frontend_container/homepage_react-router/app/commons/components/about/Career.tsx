import React from 'react';
import { Card, CardContent } from '~/components/ui/card';
import { FaBriefcase } from "react-icons/fa"; // アイコン追加

const experienceData = [
  { year: '2019年', description: '組み込み系の中堅Sier企業に新卒入社、エンジニアとしてキャリア開始' },
  { year: '2021年', description: 'Web系のSES企業に転職' },
  { year: '2023年', description: 'フリーランスとして独立、SESやIT講師として活躍' },
  { year: '現在', description: '引き続きフリーランスエンジニアとして活動中' },
];

export default function Experience() {
  return (
    <section className="mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-10">
        経歴
      </h2>
      <Card className="shadow-md p-6">
        <CardContent>
          <ul className="space-y-6">
            {experienceData.map((exp, index) => (
              <li key={index} className="flex items-start gap-4">

                <div>
                  {/* 年 */}
                  <span className="block text-lg font-bold text-gray-900">{exp.year}</span>
                  {/* 説明 */}
                  <p className="text-gray-700 text-base leading-relaxed">{exp.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}
