import { ActionFunction, useActionData } from "react-router";
import Layout from "~/commons/components/Layout";
import Main from "~/commons/components/Main";
import SectionHeader from "~/commons/components/SectionHeader";
import { Separator } from "~/components/ui/separator";
import { Form } from "react-router";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Textarea } from "~/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

// Action Function
export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // バリデーション
  if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string") {
    return new Response("Invalid form submission.", { status: 400 });
  }

  try {
    // メール送信処理をここに記述 (仮の処理)
    console.log("Sending email...");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
    console.log("Email sent successfully!");

    return new Response("Success", { status: 200 });
  } catch (error) {
    console.error("Failed to send email:", error);
    return new Response("Failed to send email.", { status: 500 });
  }
};

// Contact Page Component
export default function Contact() {
  const actionData = useActionData<string>(); // メッセージを文字列として取得

  return (
    <Layout>
      {/* 大タイトル */}
      <SectionHeader title="お問い合わせ" subtitle="フォームからお気軽にご連絡ください" />

      {/* メインコンテンツ */}
      <Main>
        <div className="max-w-3xl mx-auto">
          {/* カードコンポーネントでフォームを囲む */}
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
              {/* フォーム */}
              <Form method="post" className="space-y-8">
                {/* 名前 */}
                <div>
                  <label htmlFor="name" className="block text-lg font-medium text-gray-800 mb-2">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <Input type="text" id="name" name="name" required placeholder="例: 山田 太郎" />
                </div>

                {/* メールアドレス */}
                <div>
                  <label htmlFor="email" className="block text-lg font-medium text-gray-800 mb-2">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <Input type="email" id="email" name="email" required placeholder="例: example@example.com" />
                </div>

                {/* メッセージ */}
                <div>
                  <label htmlFor="message" className="block text-lg font-medium text-gray-800 mb-2">
                    メッセージ <span className="text-red-500">*</span>
                  </label>
                  <Textarea id="message" name="message" rows={6} required placeholder="お問い合わせ内容をご記入ください" />
                </div>

                {/* 送信ボタン */}
                <Separator className="my-6" />
                <div className="text-center">
                  <Button type="submit" className="w-full">送信する</Button>
                </div>
              </Form>

              {/* メッセージ表示 (フォームの下に配置) */}
              {actionData && (
                <div className={`mt-6 font-medium text-center ${actionData === "Success" ? "text-green-600" : "text-red-600"}`}>
                  {actionData === "Success"
                    ? "お問い合わせ内容を送信しました。ありがとうございます！"
                    : "お問い合わせの送信に失敗しました。再度お試しください。"}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </Main>
    </Layout>
  );
}
