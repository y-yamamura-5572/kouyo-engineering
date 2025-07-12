import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "神戸市　人材採用 | 施工管理　向洋エンジニアリング - 電気工事",
  description: "向洋エンジニアリング株式会社の採用情報。未経験者歓迎、年間休日120日以上、充実した福利厚生。電気工事の施工管理として一緒に働きませんか？",
  keywords: "人材採用,神戸市,電気工事,施工管理,資格取得支援,キャリアパス,兵庫,未経験歓迎,休み多い,年間休日120日",
}

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}