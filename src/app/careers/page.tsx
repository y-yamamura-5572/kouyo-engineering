'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, MapPin, Clock, Users, Award, Shield, Briefcase, MessageCircle } from 'lucide-react'

export default function CareersPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* ヘッダー */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-6"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center text-slate-300 hover:text-white transition-colors duration-300"
            >
              <ArrowLeft className="mr-2" size={20} />
              トップページに戻る
            </Link>
            <h1 className="text-2xl font-bold">採用情報</h1>
          </div>
        </div>
      </motion.div>

      {/* メインコンテンツ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* タイトルセクション */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            ともに働き、豊かな未来を
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            向洋エンジニアリング株式会社では、電気工事等の施工管理業務を担当していただける仲間を募集しています。
            未経験者も歓迎、先輩社員がサポートします。
          </p>
        </motion.div>

        {/* 募集職種セクション */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">募集職種</h2>
          
          <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12">
            <div className="flex items-start mb-8">
              <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mr-6">
                <Briefcase className="text-white" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">施工管理技術者</h3>
                <p className="text-emerald-600 font-semibold text-lg">正社員募集</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-slate-900 mb-3">業務内容</h4>
                <ul className="text-slate-600 space-y-2">
                  <li>• 電気工事等の施工管理</li>
                  <li>• 工程管理・品質管理</li>
                  <li>• 材料発注・協力業者との連携</li>
                  <li>• 安全管理業務</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-slate-900 mb-3">求める人物像</h4>
                <ul className="text-slate-600 space-y-2">
                  <li>• 責任感があり、チームワークを大切にする方</li>
                  <li>• 学習意欲があり、成長したい方</li>
                  <li>• コミュニケーション能力のある方</li>
                  <li>• 未経験でもやる気のある方歓迎</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 募集要項セクション */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">募集要項</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 給与・勤務条件 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl shadow-lg border border-emerald-100 p-8"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <Briefcase className="text-emerald-600 mr-3" size={28} />
                給与・勤務条件
              </h3>
              
              <div className="space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h4 className="font-semibold text-slate-900 mb-1">給与</h4>
                  <p className="text-slate-600">月給 35万円～40万円</p>
                  <p className="text-slate-500 text-sm">※未経験の場合は月給28万円～</p>
                  <p className="text-emerald-600 font-medium">報奨金：3.8～3.9か月分</p>
                </div>
                
                <div className="border-b border-slate-200 pb-3">
                  <h4 className="font-semibold text-slate-900 mb-1">勤務地</h4>
                  <p className="text-slate-600">兵庫県神戸市灘区琵琶町3-3-8（会社）</p>
                  <p className="text-slate-600">基本は現場に常駐</p>
                  <p className="text-slate-500 text-sm">※社用車(または自家用車)にて直行直帰</p>
                </div>
                
                <div className="border-b border-slate-200 pb-3">
                  <h4 className="font-semibold text-slate-900 mb-1">勤務時間</h4>
                  <p className="text-slate-600">8:30～17:30</p>
                </div>
                
                <div className="border-b border-slate-200 pb-3">
                  <h4 className="font-semibold text-slate-900 mb-1">休日</h4>
                  <p className="text-slate-600">土日祝、年間休日120日</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">雇用形態</h4>
                  <p className="text-slate-600">正社員（期間契約社員も同時募集）</p>
                  <p className="text-slate-500 text-sm">※給与条件は正社員と同じ</p>
                  <p className="text-slate-500 text-sm">試用期間：3ヶ月</p>
                </div>
              </div>
            </motion.div>

            {/* 福利厚生・資格 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg border border-blue-100 p-8"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <Shield className="text-blue-600 mr-3" size={28} />
                福利厚生・資格
              </h3>
              
              <div className="space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h4 className="font-semibold text-slate-900 mb-2">福利厚生</h4>
                  <ul className="text-slate-600 space-y-1">
                    <li>• 社会保険完備</li>
                    <li>• 定期健康診断</li>
                    <li>• 各種手当（交通費、資格、出張、住宅、家族）</li>
                    <li>• 資格取得支援</li>
                    <li>• 退職金制度</li>
                  </ul>
                </div>
                
                <div className="border-b border-slate-200 pb-3">
                  <h4 className="font-semibold text-slate-900 mb-2">応募資格</h4>
                  <p className="text-slate-600">• 普通自動車運転免許（第1種）</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">歓迎資格</h4>
                  <ul className="text-slate-600 space-y-1">
                    <li>• 電気工事施工管理技士</li>
                    <li>• 電気工事士</li>
                    <li>• 消防設備士</li>
                    <li>• 電気通信工事施工管理技士</li>
                  </ul>
                  <p className="text-emerald-600 text-sm mt-2 font-medium">
                    ※資格がなくても大丈夫！取得支援制度があります
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* 応募・お問い合わせセクション */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-3xl shadow-2xl text-white p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">応募・お問い合わせ</h2>
          <p className="text-xl mb-8 text-emerald-100">
            ご質問やご相談がございましたら、お気軽にお問い合わせください。
          </p>
          
          <div className="flex justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="https://lin.ee/7p7uVgs"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold hover:bg-emerald-50 transition-all duration-300 flex items-center justify-center shadow-lg"
              >
                <MessageCircle className="mr-2" size={20} />
                LINEできいてみる！ニックネーム可能！
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}