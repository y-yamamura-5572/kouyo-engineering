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
  metadataBase: new URL('https://kouyo-engineering.com'),
  title: "向洋エンジニアリング | 神戸市電気工事",
  description: "神戸市の向洋エンジニアリング。電気工事のスペシャリスト。未経験者歓迎、年間休日120日以上。",
  keywords: "人材採用,神戸市,電気工事,施工管理,資格取得支援,キャリアパス,兵庫,未経験歓迎,休み多い,年間休日120日",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "向洋エンジニアリング株式会社",
              "url": "https://kouyo-engineering.com",
              "logo": "https://kouyo-engineering.com/logo.png",
              "description": "神戸市の向洋エンジニアリング。電気工事のスペシャリスト。未経験者歓迎、年間休日120日以上。",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "灘区琵琶町3丁目3-8",
                "addressLocality": "神戸市",
                "addressRegion": "兵庫県",
                "addressCountry": "JP"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "採用情報",
                "availableLanguage": "Japanese"
              },
              "sameAs": []
            })
          }}
        />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
