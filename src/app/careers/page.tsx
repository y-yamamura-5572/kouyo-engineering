'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Shield, Briefcase, MessageCircle, Zap, Target } from 'lucide-react'

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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">募集職種</h2>
          
          <div className="relative rounded-3xl shadow-2xl p-8 md:p-12 overflow-hidden transform-gpu transition-all duration-500 hover:shadow-3xl hover:-translate-y-2">
            {/* Metallic Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900" />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent" />
            
            {/* Metallic Shine Effect */}
            <motion.div
              animate={{ 
                x: [-200, 400],
                opacity: [0, 0.6, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                repeatDelay: 2,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
            />
            
            {/* Embossed Border */}
            <div className="absolute inset-0 rounded-3xl border-2 bg-gradient-to-br from-slate-500/50 via-slate-400/30 to-slate-600/50 p-px">
              <div className="w-full h-full rounded-3xl bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900" />
            </div>
            <div className="absolute inset-1 rounded-3xl border border-slate-300/20" />
            
            {/* Corner Highlights */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-white/20 to-transparent rounded-br-3xl" />
            
            {/* Metallic Texture Overlay */}
            <div className="absolute inset-0 opacity-30 rounded-3xl" style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%),
                linear-gradient(45deg, transparent 48%, rgba(255,255,255,0.05) 49%, rgba(255,255,255,0.05) 51%, transparent 52%)
              `,
              backgroundSize: '20px 20px, 20px 20px, 10px 10px'
            }} />
            
            {/* Glow Effects */}
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-40 h-40 bg-emerald-400/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ 
                scale: [1.1, 1, 1.1],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-0 left-0 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl"
            />
            
            <div className="relative z-10">
              <div className="flex items-start mb-8">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="relative w-20 h-20 mr-6"
                >
                  {/* Metallic Icon Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 rounded-2xl shadow-lg" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-transparent rounded-2xl" />
                  <div className="absolute inset-px bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl" />
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Briefcase className="text-white drop-shadow-lg" size={36} />
                  </div>
                </motion.div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-3 bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
                    施工管理技術者
                  </h3>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-emerald-400/20 border border-emerald-400/30 backdrop-blur-sm">
                    <Zap className="text-emerald-400" size={16} />
                    <span className="text-emerald-300 font-semibold">正社員募集</span>
                  </div>
                </div>
              </div>
            
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Target className="text-emerald-400" size={24} />
                    <h4 className="text-xl font-bold text-white">業務内容</h4>
                  </div>
                  <div className="space-y-3">
                    {[
                      '電気工事等の施工管理',
                      '工程管理・品質管理', 
                      '材料発注・協力業者との連携',
                      '安全管理業務'
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        className="flex items-center gap-3 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                      >
                        <div className="w-2 h-2 bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/50" />
                        <span className="text-slate-200 font-medium">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Shield className="text-blue-400" size={24} />
                    <h4 className="text-xl font-bold text-white">求める人物像</h4>
                  </div>
                  <div className="space-y-3">
                    {[
                      '責任感があり、チームワークを大切にする方',
                      '学習意欲があり、成長したい方',
                      'コミュニケーション能力のある方',
                      '未経験でもやる気のある方歓迎'
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                        className="flex items-center gap-3 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                      >
                        <div className="w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50" />
                        <span className="text-slate-200 font-medium">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">募集要項</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* 給与・勤務条件 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="relative rounded-2xl shadow-2xl p-8 overflow-hidden transform-gpu transition-all duration-500 hover:shadow-3xl">
                {/* Metallic Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900" />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent" />
                
                {/* Metallic Shine Effect */}
                <motion.div
                  animate={{ 
                    x: [-150, 300],
                    opacity: [0, 0.5, 0]
                  }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity, 
                    repeatDelay: 3,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent skew-x-12 group-hover:via-emerald-400/30"
                />
                
                {/* Embossed Border */}
                <div className="absolute inset-0 rounded-2xl border-2 bg-gradient-to-br from-emerald-500/50 via-emerald-400/30 to-emerald-600/50 p-px">
                  <div className="w-full h-full rounded-2xl bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900" />
                </div>
                <div className="absolute inset-1 rounded-2xl border border-emerald-300/20" />
                
                {/* Corner Highlights */}
                <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-emerald-400/20 to-transparent rounded-tl-2xl" />
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-emerald-400/20 to-transparent rounded-br-2xl" />
                
                {/* Glow Effect */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 right-0 w-32 h-32 bg-emerald-400/20 rounded-full blur-2xl group-hover:bg-emerald-400/30"
                />
                
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="relative w-12 h-12 mr-4"
                    >
                      {/* Metallic Icon Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 rounded-xl shadow-lg" />
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-transparent rounded-xl" />
                      <div className="relative w-full h-full flex items-center justify-center">
                        <Briefcase className="text-white drop-shadow-lg" size={24} />
                      </div>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
                      給与・勤務条件
                    </h3>
                  </div>
              
                  <div className="space-y-6">
                    {[
                      {
                        title: '給与',
                        content: [
                          { text: '月給 35万円～40万円', highlight: true },
                          { text: '※未経験の場合は月給28万円～' },
                          { text: '報奨金：3.8～3.9か月分', highlight: true, color: 'emerald' }
                        ]
                      },
                      {
                        title: '勤務地',
                        content: [
                          { text: '兵庫県神戸市灘区琵琶町3丁目3-8（会社）' },
                          { text: '基本は現場に常駐' },
                          { text: '※社用車(または自家用車)にて直行直帰' }
                        ]
                      },
                      {
                        title: '勤務時間',
                        content: [{ text: '8:30～17:30' }]
                      },
                      {
                        title: '休日',
                        content: [{ text: '土日祝、年間休日120日', highlight: true, color: 'blue' }]
                      },
                      {
                        title: '雇用形態',
                        content: [
                          { text: '正社員（期間契約社員も同時募集）' },
                          { text: '※給与条件は正社員と同じ' },
                          { text: '試用期間：3ヶ月' }
                        ]
                      }
                    ].map((section, index) => (
                      <motion.div
                        key={section.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                        className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                      >
                        <h4 className="font-bold text-emerald-300 mb-3 text-lg">{section.title}</h4>
                        <div className="space-y-2">
                          {section.content.map((item, i) => (
                            <p key={i} className={`${
                              'highlight' in item && item.highlight 
                                ? 'color' in item && item.color === 'emerald' 
                                  ? 'text-emerald-300 font-semibold' 
                                  : 'color' in item && item.color === 'blue' 
                                    ? 'text-blue-300 font-semibold'
                                    : 'text-white font-semibold'
                                : 'text-slate-300'
                            }`}>
                              {item.text}
                            </p>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 福利厚生・資格 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="relative rounded-2xl shadow-2xl p-8 overflow-hidden transform-gpu transition-all duration-500 hover:shadow-3xl">
                {/* Metallic Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900" />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent" />
                
                {/* Metallic Shine Effect */}
                <motion.div
                  animate={{ 
                    x: [-150, 300],
                    opacity: [0, 0.5, 0]
                  }}
                  transition={{ 
                    duration: 2.8, 
                    repeat: Infinity, 
                    repeatDelay: 3.5,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent skew-x-12 group-hover:via-blue-400/30"
                />
                
                {/* Embossed Border */}
                <div className="absolute inset-0 rounded-2xl border-2 bg-gradient-to-br from-blue-500/50 via-blue-400/30 to-blue-600/50 p-px">
                  <div className="w-full h-full rounded-2xl bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900" />
                </div>
                <div className="absolute inset-1 rounded-2xl border border-blue-300/20" />
                
                {/* Corner Highlights */}
                <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-transparent rounded-tl-2xl" />
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-blue-400/20 to-transparent rounded-br-2xl" />
                
                {/* Glow Effect */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 right-0 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl group-hover:bg-blue-400/30"
                />
                
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="relative w-12 h-12 mr-4"
                    >
                      {/* Metallic Icon Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-xl shadow-lg" />
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-transparent rounded-xl" />
                      <div className="relative w-full h-full flex items-center justify-center">
                        <Shield className="text-white drop-shadow-lg" size={24} />
                      </div>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                      福利厚生・資格
                    </h3>
                  </div>
              
                  <div className="space-y-6">
                    {[
                      {
                        title: '福利厚生',
                        content: [
                          { text: '社会保険完備', highlight: true },
                          { text: '定期健康診断' },
                          { text: '各種手当（交通費、資格、出張、住宅、家族）', highlight: true, color: 'blue' },
                          { text: '資格取得支援' },
                          { text: '退職金制度' }
                        ]
                      },
                      {
                        title: '応募資格',
                        content: [
                          { text: '普通自動車運転免許（第1種）', highlight: true, color: 'blue' }
                        ]
                      },
                      {
                        title: '歓迎資格',
                        content: [
                          { text: '電気工事施工管理技士' },
                          { text: '電気工事士' },
                          { text: '消防設備士' },
                          { text: '電気通信工事施工管理技士' }
                        ],
                        note: '※資格がなくても大丈夫！取得支援制度があります'
                      }
                    ].map((section, index) => (
                      <motion.div
                        key={section.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                        className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                      >
                        <h4 className="font-bold text-blue-300 mb-3 text-lg">{section.title}</h4>
                        <div className="space-y-2">
                          {section.content.map((item, i) => (
                            <p key={i} className={`${
                              'highlight' in item && item.highlight 
                                ? 'color' in item && item.color === 'blue' 
                                  ? 'text-blue-300 font-semibold' 
                                  : 'text-white font-semibold'
                                : 'text-slate-300'
                            }`}>
                              • {item.text}
                            </p>
                          ))}
                          {section.note && (
                            <p className="text-blue-300 text-sm mt-3 font-medium bg-blue-500/10 p-2 rounded-lg border border-blue-400/20">
                              {section.note}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
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