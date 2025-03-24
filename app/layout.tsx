import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "포트폴리오 | 이엄지",
  description: "이엄지의 웹 디자이너 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${plusJakarta.variable} font-sans bg-neutral-50 text-neutral-900`}>
        <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 border-b border-neutral-200">
          <div className="container mx-auto px-4 flex justify-between items-center h-16">
            <Link href="/" className="font-bold text-xl">이엄지</Link>
            <nav>
              <ul className="flex gap-6">
                <li><Link href="/" className="hover:text-blue-500 transition-colors">홈</Link></li>
                <li><Link href="/about" className="hover:text-blue-500 transition-colors">소개</Link></li>
                <li><Link href="/web-design" className="hover:text-blue-500 transition-colors">웹디자인</Link></li>
                <li><Link href="/3d-works" className="hover:text-blue-500 transition-colors">3D 작업물</Link></li>
                <li><Link href="/contact" className="hover:text-blue-500 transition-colors">연락처</Link></li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="min-h-screen py-8">
          {children}
        </main>
        <footer className="bg-neutral-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <h3 className="font-bold text-xl mb-2">이엄지</h3>
                <p className="text-neutral-400">웹 디자이너 & 3D 아티스트</p>
              </div>
              <div>
                <ul className="flex gap-4">
                  <li><a href="mailto:umlee100@naver.com" className="text-neutral-400 hover:text-white transition-colors">이메일</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-neutral-800 text-neutral-500 text-center">
              <p>© {new Date().getFullYear()} 이엄지. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
