import type { Metadata } from "next";
import { Suspense } from "react";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const pretendard = localFont({
  src: "../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "100 900",
  variable: "--font-pretendard",
});

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
      <body className={pretendard.className}>
        <Suspense><Header /></Suspense>
        <div className="content-area">
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
