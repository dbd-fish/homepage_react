import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "~/components/ui/sheet";
import { Separator } from "~/components/ui/separator";
import { Menu, X } from "lucide-react";
import SiteTitle from "~/commons/components/SiteTitle";

export default function HomeHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // リンクデータ
  const navLinks = [
    { label: "ホーム", href: "/" },
    { label: "サービス", href: "/services" },
    { label: "実績", href: "/works" },
    { label: "ポートフォリオ", href: "/portfolios" },
    { label: "私について", href: "/about" },
    { label: "お問い合わせ", href: "/contact" },
  ];

  return (
    <header className="bg-gray-600 text-gray-100 py-6 shadow-xl fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* サイトタイトル */}
        <SiteTitle />

        {/* ナビゲーションメニュー（PC用） */}
        <nav className="hidden sm:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <Button
              key={index}
              variant="link"
              asChild
              className="text-2xl text-white transition-all duration-200 hover:text-gray-300 hover:scale-110"
            >
              <a href={link.href}>{link.label}</a>
            </Button>
          ))}
        </nav>

        {/* ハンバーガーメニュー（スマホ用） */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="sm:hidden hover:bg-gray-500">
              <Menu size={32} />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-gray-700 text-gray-100 w-64">
            <div className="flex justify-between items-center p-4">
              <SiteTitle />
            </div>
            <Separator />
            <nav className="flex flex-col gap-5 mt-6">
              {navLinks.map((link, index) => (
                <Button
                  key={index}
                  variant="link"
                  asChild
                  className="text-2xl text-white transition-all duration-200 hover:text-gray-300 hover:scale-110"
                >
                  <a href={link.href}>{link.label}</a>
                </Button>
              ))}
            </nav>
            <Separator className="my-6" />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
