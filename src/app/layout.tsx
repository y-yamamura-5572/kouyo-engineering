import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "向洋エンジニアリング | 神戸市電気工事",
  description: "神戸市の向洋エンジニアリング。電気工事のスペシャリスト。未経験者歓迎、年間休日120日以上。",
  keywords: "電気工事,プラント,防災,神戸,兵庫,採用,求人",
  openGraph: {
    title: "向洋エンジニアリング | 神戸市電気工事",
    description: "神戸市の向洋エンジニアリング。電気工事のスペシャリスト。未経験者歓迎、年間休日120日以上。",
    url: "https://kouyo-engineering.com",
    siteName: "向洋エンジニアリング",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "向洋エンジニアリング株式会社",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "向洋エンジニアリング | 神戸市電気工事",
    description: "神戸市の向洋エンジニアリング。電気工事のスペシャリスト。未経験者歓迎、年間休日120日以上。",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
