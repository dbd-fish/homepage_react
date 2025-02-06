import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "~/components/ui/sheet";
import { Separator } from "~/components/ui/separator";
import { Menu, X } from "lucide-react";
import SiteTitle from "~/commons/components/SiteTitle";

export default function HomeHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-600 text-gray-100 py-6 shadow-xl fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* サイトタイトル */}
        <SiteTitle />

        {/* ナビゲーションメニュー（PC用） */}
        <nav className="hidden sm:flex items-center gap-8">
          <Button
            variant="link"
            asChild
            className="text-2xl text-white transition-all duration-200 hover:text-gray-300 hover:scale-110"
          >
            <a href="/">ホーム</a>
          </Button>
          <Button
            variant="link"
            asChild
            className="text-2xl text-white transition-all duration-200 hover:text-gray-300 hover:scale-110"
          >
            <a href="/services">サービス</a>
          </Button>
          <Button
            variant="link"
            asChild
            className="text-2xl text-white transition-all duration-200 hover:text-gray-300 hover:scale-110"
          >
            <a href="/works">制作実績</a>
          </Button>
          <Button
            variant="link"
            asChild
            className="text-2xl text-white transition-all duration-200 hover:text-gray-300 hover:scale-110"
          >
            <a href="/about">私について</a>
          </Button>
          <Button
            variant="link"
            asChild
            className="text-2xl text-white transition-all duration-200 hover:text-gray-300 hover:scale-110"
          >
            <a href="/contact">お問い合わせ</a>
          </Button>
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
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                <X size={32} className="hover:scale-110 transition-transform" />
              </Button>
            </div>
            <Separator />
            <nav className="flex flex-col gap-5 mt-6">
              <Button
                variant="link"
                asChild
                className="text-2xl text-white transition-all duration-200 hover:text-gray-300 hover:scale-110"
              >
                <a href="/">ホーム</a>
              </Button>
              <Button
                variant="link"
                asChild
                className="text-2xl text-white transition-all duration-200 hover:text-gray-300 hover:scale-110"
              >
                <a href="/services">サービス</a>
              </Button>
              <Button
                variant="link"
                asChild
                className="text-2xl text-white transition-all duration-200 hover:text-gray-300 hover:scale-110"
              >
                <a href="/works">制作実績</a>
              </Button>
              <Button
                variant="link"
                asChild
                className="text-2xl text-white transition-all duration-200 hover:text-gray-300 hover:scale-110"
              >
                <a href="/about">私について</a>
              </Button>
              <Button
                variant="link"
                asChild
                className="text-2xl text-white transition-all duration-200 hover:text-gray-300 hover:scale-110"
              >
                <a href="/contact">お問い合わせ</a>
              </Button>
            </nav>
            <Separator className="my-6" />
            <div className="flex flex-col gap-3">
              <Button
                variant="outline"
                asChild
                className="text-xl border-gray-400 text-white hover:border-gray-200 hover:text-gray-200 transition-all duration-200"
              >
                <a href="/signup">会員登録</a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
