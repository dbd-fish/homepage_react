import Layout from '~/commons/components/Layout';
import Main from '~/commons/components/Main';
import SectionHeader from '~/commons/components/SectionHeader';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';

export default function PrivacyPolicy() {
  const sections = [
    {
      title: '第1条（個人情報の定義）',
      content:
        '「個人情報」とは、個人情報保護法において定義される「個人情報」を指し、氏名、生年月日、住所、電話番号、電子メールアドレス、その他の記述等により個人を識別できる情報を含みます。',
    },
    {
      title: '第2条（個人情報の収集方法）',
      content: (
        <>
          <p>当社は、以下の方法で個人情報を収集することがあります：</p>
          <ul className="list-disc list-inside mt-2">
            <li>
              ユーザーが本サービスに登録する際に提供される情報（氏名、メールアドレス、住所、電話番号など）
            </li>
            <li>商品購入やお問い合わせの際に提供される情報</li>
            <li>
              Googleアドセンスやアクセス解析ツールを通じて収集されるクッキー（Cookie）情報やアクセスログ
            </li>
          </ul>
        </>
      ),
    },
    {
      title: '第3条（個人情報の利用目的）',
      content: (
        <>
          <p>当社は、収集した個人情報を以下の目的で利用します：</p>
          <ul className="list-disc list-inside mt-2">
            <li>本サービスの提供および運営</li>
            <li>ユーザーからのお問い合わせへの対応（本人確認を含む）</li>
            <li>商品の配送および代金決済</li>
            <li>サービス向上を目的としたマーケティングや分析</li>
            <li>法令遵守のための対応</li>
          </ul>
        </>
      ),
    },
    {
      title: '第4条（Googleアドセンスとクッキー）',
      content: (
        <>
          <p>
            本サービスでは、第三者配信の広告サービス「Googleアドセンス」を利用しています。Googleを含む第三者広告配信事業者は、ユーザーのブラウザにクッキーを設定し、それを使用して広告を配信します。
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>
              クッキーによる情報収集を希望しない場合は、ブラウザの設定で無効化できます。ただし、一部のサービスが利用できなくなる場合があります。
            </li>
            <li>
              Googleアドセンスの詳細については、{' '}
              <a
                href="https://policies.google.com/technologies/ads?hl=ja"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Googleの広告に関するポリシー
              </a>{' '}
              をご参照ください。
            </li>
          </ul>
        </>
      ),
    },
    {
      title: '第5条（個人情報の第三者提供）',
      content: (
        <>
          <p>
            当社は、次の場合を除き、ユーザーの同意を得ることなく個人情報を第三者に提供しません：
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>法令に基づく場合</li>
            <li>
              人の生命、身体または財産の保護のために必要がある場合で、本人の同意を得ることが困難な場合
            </li>
            <li>
              公衆衛生の向上や児童の健全な育成の推進のために特に必要がある場合
            </li>
            <li>
              国の機関や地方公共団体、またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合
            </li>
          </ul>
        </>
      ),
    },
    {
      title: '第8条（お問い合わせ窓口）',
      content: (
        <ul className="list-none">
          <li>会社名: 株式会社〇〇</li>
          <li>担当者: 個人情報管理責任者</li>
          <li>メールアドレス: support@example.com</li>
          <li>電話番号: 03-1234-5678</li>
          <li>住所: 東京都渋谷区〇〇丁目〇〇番地〇〇</li>
        </ul>
      ),
    },
  ];

  return (
    <Layout>
      {/* セクションヘッダー */}
      <SectionHeader title="プライバシーポリシー" subtitle="" />

      {/* メインコンテンツ */}
      <Main>
        <div className="max-w-4xl mx-auto py-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-2xl font-bold">
                プライバシーポリシー
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {sections.map((section, index) => (
                <div key={index}>
                  <h2 className="text-xl font-semibold text-gray-700 mb-4">
                    {section.title}
                  </h2>
                  <div className="text-gray-600 leading-relaxed">
                    {section.content}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </Main>
    </Layout>
  );
}
