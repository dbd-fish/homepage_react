import { Button } from '~/components/ui/button';
import { FaGithub, FaNoteSticky } from 'react-icons/fa6'; // GitHub & Note
import { SiZenn } from 'react-icons/si'; // Zenn アイコン

export default function SocialLinks() {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/', icon: <FaGithub /> },
    { name: 'Note', url: 'https://note.com/', icon: <FaNoteSticky /> },
    { name: 'Zenn', url: 'https://zenn.dev/', icon: <SiZenn /> },
  ];

  return (
    <section className="mb-16 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-10">
        SNS & 連絡先
      </h2>
      <p className="text-lg text-gray-600 mb-10">
        このホームページを含めて公開可能なコードはGithubに格納してます。<br />
        技術的な投稿はZenn、技術以外の内容はNoteに投稿しています。
        Noteには趣味も投稿しています。
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        {socialLinks.map((sns, index) => (
          <Button key={index} variant="outline" asChild>
            <a href={sns.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              {sns.icon} {sns.name}
            </a>
          </Button>
        ))}
      </div>
    </section>
  );
}
