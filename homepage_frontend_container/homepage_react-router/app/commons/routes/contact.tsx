import { useState, useEffect } from 'react';
import { ActionFunction, useActionData } from 'react-router';
import nodemailer from 'nodemailer';
import Layout from '~/commons/components/Layout';
import Main from '~/commons/components/Main';
import SectionHeader from '~/commons/components/SectionHeader';
import { Separator } from '~/components/ui/separator';
import { Form } from 'react-router';
import { Input } from '~/components/ui/input';
import { Button } from '~/components/ui/button';
import { Textarea } from '~/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';

// メール送信用の nodemailer 設定
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// メール送信のアクション関数
export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get('name')?.toString() || '';
  const email = formData.get('email')?.toString() || '';
  const message = formData.get('message')?.toString() || '';

  if (!name || !email || !message) {
    return { success: false, message: '必須項目が未入力です' };
  }

  try {
    await transporter.sendMail({
      from: `"お問い合わせフォーム" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER,
      subject: `【ホームページお問い合わせ】${name}様より`,
      text: `以下の内容でお問い合わせを受け付けました。\n\n【お名前】 ${name}\n【メールアドレス】 ${email}\n【お問い合わせ内容】\n${message}\n\n───────────\n※本メールはシステムからの自動送信です。`,
      html: `<div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <p>以下の内容でお問い合わせを受け付けました。</p>
          <hr>
          <p><strong>お名前:</strong> ${name}</p>
          <p><strong>メールアドレス:</strong> ${email}</p>
          <p><strong>お問い合わせ内容:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <hr>
          <p style="font-size: 12px; color: #555;">※本メールはシステムからの自動送信です。</p>
        </div>`,
    });

    return { success: true, message: 'お問い合わせ内容を送信しました。ありがとうございます！' };
  } catch (error) {
    console.error('メール送信エラー:', error);
    return { success: false, message: 'お問い合わせの送信に失敗しました。再度お試しください。' };
  }
};

// **Contact ページ**
export default function Contact() {
  const actionData = useActionData<{ success: boolean; message: string }>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (actionData) {
      setIsSubmitting(false);
    }
  }, [actionData]);

  return (
    <Layout>
      <SectionHeader title="お問い合わせ" subtitle="フォームからお気軽にご連絡ください" />

      <Main>
        <div className="max-w-3xl mx-auto py-12">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-4xl font-bold text-gray-800 text-center">
                お問い合わせフォーム
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 text-center mb-8 leading-relaxed">
                以下のフォームに必要事項をご記入の上、「送信」ボタンを押してください。
                <br />
                お問い合わせ内容を確認後、担当者よりご連絡させていただきます。
              </p>

              <Form method="post" className="space-y-8" onSubmit={() => setIsSubmitting(true)}>
                <div>
                  <label htmlFor="name" className="block text-lg font-medium text-gray-800 mb-2">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <Input type="text" id="name" name="name" required placeholder="例: 山田 太郎" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-lg font-medium text-gray-800 mb-2">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <Input type="email" id="email" name="email" required placeholder="例: example@example.com" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-lg font-medium text-gray-800 mb-2">
                    メッセージ <span className="text-red-500">*</span>
                  </label>
                  <Textarea id="message" name="message" rows={6} required placeholder="お問い合わせ内容をご記入ください" />
                </div>

                <Separator className="my-6" />
                <div className="text-center">
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? '送信中...' : '送信する'}
                  </Button>
                </div>
              </Form>

              {/* メッセージ表示 */}
              {actionData && (
                <div
                  className={`mt-6 font-medium text-center ${
                    actionData.success ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {actionData.message}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </Main>
    </Layout>
  );
}

