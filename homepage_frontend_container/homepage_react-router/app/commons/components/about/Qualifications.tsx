import { Card, CardContent } from '~/components/ui/card';

export default function Qualifications() {
  const qualifications = ['Python 3 エンジニア認定データ分析'];

  return (
    <section className="mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-10">
        資格・認定
      </h2>
      <Card>
        <CardContent>
          <ul className="text-gray-700 text-xl leading-loose">
            {qualifications.map((qualification, index) => (
              <li key={index}>{qualification}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}
