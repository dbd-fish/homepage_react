import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export default function WorksPage() {
  return (
    <div className="max-w-screen-lg mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">制作実績</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          { title: "プロジェクト A", description: "説明 A" },
          { title: "プロジェクト B", description: "説明 B" },
          { title: "プロジェクト C", description: "説明 C" },
        ].map((work, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{work.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{work.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
