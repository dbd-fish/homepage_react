import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import SiteTitle from "~/commons/components/SiteTitle";
import { FaGithub, FaNoteSticky } from 'react-icons/fa6'; // GitHub & Note
import { SiZenn } from 'react-icons/si'; // Zenn アイコン

export default function Footer() {
  // フッターナビゲーションリンク
  const footerLinks = [
    { label: "ホーム", href: "/" },
    { label: "サービス", href: "/services" },
    { label: "実績", href: "/works" },
    { label: "ポートフォリオ", href: "/portfolios" },
    { label: "私について", href: "/about" },
    { label: "お問い合わせ", href: "/contact" },
    { label: "プライバシーポリシー", href: "/privacy-policy" },
  ];
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/', icon: <FaGithub /> },
    { name: 'Note', url: 'https://note.com/', icon: <FaNoteSticky /> },
    { name: 'Zenn', url: 'https://zenn.dev/', icon: <SiZenn /> },
  ];
  return (
    <footer className="bg-gray-700 text-gray-100 py-8">
      <div className="container mx-auto flex flex-col items-center px-6">
        {/* サイトタイトル */}
        <SiteTitle />

        {/* ナビゲーションメニュー（PCでは横並び、スマホでは縦並び） */}
        <nav className="flex flex-col sm:flex-row items-center gap-4 mt-6 text-center">
          {footerLinks.map((link, index) => (
            <Button
              key={index}
              variant="link"
              asChild
              className="text-lg text-gray-100 transition-all duration-200 hover:text-gray-300"
            >
              <a href={link.href}>{link.label}</a>
            </Button>
          ))}
        </nav>


        <div className="flex flex-wrap justify-center gap-6">
        {socialLinks.map((sns, index) => (
          <Button key={index} variant="ghost" asChild>
            <a href={sns.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              {sns.icon} {sns.name}
            </a>
          </Button>
        ))}
      </div>

        {/* 仕切り線 */}
        <Separator className="my-6 w-full max-w-md" />

        {/* 著作権情報 */}
        <p className="text-sm text-center text-gray-300">
          &copy; 2024 My Website. All rights reserved.
        </p>
        <p className="text-xs text-center text-gray-400 mt-2">
          このサイトは個人情報を適切に管理しています。
        </p>
      </div>
    </footer>
  );
}
