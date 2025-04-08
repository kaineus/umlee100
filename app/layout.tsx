import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "이엄지 포트폴리오",
  description: "웹 디자인과 3D 작업물 포트폴리오",
  openGraph: {
    title: "이엄지 포트폴리오",
    description: "웹 디자인과 3D 작업물 포트폴리오",
    url: "https://umlee100.vercel.app",
    siteName: "이엄지 포트폴리오",
    images: [
      {
        url: "/preview.jpg",
        width: 1200,
        height: 630,
        alt: "이엄지 포트폴리오 미리보기",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "이엄지 포트폴리오",
    description: "웹 디자인과 3D 작업물 포트폴리오",
    images: ["/preview.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-xl font-bold text-blue-600">
                이엄지 포트폴리오
              </Link>
              
              <nav>
                <ul className="flex space-x-6">
                  <li>
                    <Link href="/web-design" className="text-gray-600 hover:text-blue-600 transition-colors">
                      웹 디자인
                    </Link>
                  </li>
                  <li>
                    <Link href="/3d-works" className="text-gray-600 hover:text-blue-600 transition-colors">
                      3D 작업
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                      경력
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        
        {children}
        
        <footer className="bg-neutral-900 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p>&copy; 2025 이엄지. All rights reserved.</p>
              </div>
              
              <div className="flex space-x-4">
                <Link href="/web-design" className="hover:text-blue-400 transition-colors">
                  웹 디자인
                </Link>
                <Link href="/3d-works" className="hover:text-blue-400 transition-colors">
                  3D 작업
                </Link>
                <Link href="/about" className="hover:text-blue-400 transition-colors">
                  경력
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
