import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Avatar } from "~/components/ui/avatar";

export default function AboutPage() {
  return (
    <div className="max-w-screen-md mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">私について</h1>
      <Card className="max-w-lg mx-auto">
        <CardHeader className="text-center">
          <Avatar className="w-24 h-24 mx-auto" />
          <CardTitle className="mt-4">フルスタックエンジニア</CardTitle>
        </CardHeader>
        <CardContent>
          <p>私はフルスタックエンジニアとして、Webアプリケーションの設計・開発を行っています。</p>
          <p className="mt-2">React, Remix, FastAPI などの技術を使用し、シンプルでモダンな開発を目指しています。</p>
        </CardContent>
      </Card>
    </div>
  );
}
