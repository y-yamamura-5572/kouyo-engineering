'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Shield, Users, Clock, Award } from 'lucide-react'
import dynamic from 'next/dynamic'
import ClientOnly from '@/components/ClientOnly'

const VideoBackground = dynamic(() => import('@/components/SwitchingVideoBackground'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute inset-0 bg-slate-900/60" />
    </div>
  )
})

export default function Home() {
  return (
    <div className="bg-white">
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        {/* 動画背景 */}
        <VideoBackground />

        {/* コンテンツ */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <ClientOnly fallback={
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="block">
                  社会と共に、未来を創造する
                </span>
                <br />
                <span className="text-emerald-400">
                  ～向洋エンジニアリング株式会社～
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-slate-100">
                未経験者歓迎・年間休日120日以上・充実した福利厚生
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/careers"
                  className="bg-emerald-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-600 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-2xl backdrop-blur-sm"
                >
                  採用情報を見る
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  href="/about"
                  className="border-2 border-white/50 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 hover:border-white backdrop-blur-sm"
                >
                  会社概要
                </Link>
              </div>
            </div>
          }>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <motion.span
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    scale: 1
                  }}
                  transition={{ 
                    duration: 1.2, 
                    delay: 0.2,
                    type: "spring",
                    stiffness: 200
                  }}
                  className="block"
                >
                  社会と共に、未来を創造する
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0, y: 50, scale: 0.5 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    scale: 1
                  }}
                  transition={{ 
                    duration: 1.5, 
                    delay: 0.7,
                    type: "spring",
                    stiffness: 150
                  }}
                  className="text-emerald-400"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.5 }
                  }}
                >
                  ～向洋エンジニアリング株式会社～
                </motion.span>
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ 
                  opacity: 1, 
                  y: 0, 
                  scale: 1
                }}
                transition={{ 
                  duration: 1.0, 
                  delay: 1.2,
                  type: "spring",
                  stiffness: 180
                }}
                className="text-xl md:text-2xl mb-8 text-slate-100"
                whileHover={{
                  scale: 1.02,
                  y: -2,
                  transition: { duration: 0.3 }
                }}
              >
                未経験者歓迎・年間休日120日以上・充実した福利厚生
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
              <motion.div
                whileHover={{ 
                  scale: 1.15, 
                  y: -5,
                  transition: { duration: 0.4 }
                }}
                whileTap={{ 
                  scale: 0.85,
                  transition: { duration: 0.2 }
                }}
              >
                <Link
                  href="/careers"
                  className="bg-emerald-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-600 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-2xl backdrop-blur-sm"
                >
                  <motion.span
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    採用情報を見る
                  </motion.span>
                  <motion.div
                    whileHover={{ x: 5, rotate: 360 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ArrowRight className="ml-2" size={20} />
                  </motion.div>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ 
                  scale: 1.15, 
                  y: -5,
                  transition: { duration: 0.4 }
                }}
                whileTap={{ 
                  scale: 0.85,
                  transition: { duration: 0.2 }
                }}
              >
                <Link
                  href="/about"
                  className="border-2 border-white/50 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 hover:border-white backdrop-blur-sm"
                >
                  <motion.span
                    whileHover={{ 
                      scale: 1.1,
                      transition: { duration: 0.2 }
                    }}
                  >
                    会社概要
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
          </ClientOnly>
        </div>

        {/* 装飾的なアニメーション要素 */}
        <ClientOnly>
          <motion.div
            className="absolute top-10 right-10 w-72 h-72 bg-emerald-500/10 rounded-full backdrop-blur-sm"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.6, 0.2],
              rotate: [0, 360],
              x: [0, 20, 0],
              y: [0, -20, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-10 left-10 w-48 h-48 bg-slate-500/10 rounded-full backdrop-blur-sm"
            animate={{
              scale: [1.2, 0.8, 1.2],
              opacity: [0.2, 0.5, 0.2],
              rotate: [0, -360],
              x: [0, -15, 0],
              y: [0, 15, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </ClientOnly>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-lg text-slate-600">
              私たちが選ばれる理由
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: '未経験者歓迎',
                description: '経験がなくても安心。充実した研修制度でサポートします。'
              },
              {
                icon: Clock,
                title: '年間休日120日以上',
                description: 'ワークライフバランスを重視。しっかりと休んで、しっかりと働く。'
              },
              {
                icon: Shield,
                title: '安全第一',
                description: '徹底した安全管理で、作業員の安全を最優先に考えています。'
              },
              {
                icon: Award,
                title: '資格取得支援',
                description: '電気工事士などの資格取得を会社が全面的にバックアップします。'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.8, rotate: -10 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0, 
                  scale: 1, 
                  rotate: 0,
                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }
                }}
                transition={{ duration: 1.2, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.15,
                  y: -15,
                  rotate: [0, -3, 3, 0],
                  boxShadow: "0 35px 60px -12px rgba(0, 0, 0, 0.35)",
                  transition: { duration: 0.4 }
                }}
                whileTap={{ 
                  scale: 0.95,
                  rotate: [0, 5, -5, 0],
                  transition: { duration: 0.2 }
                }}
                className="bg-white p-8 rounded-2xl shadow-xl text-center border border-slate-100 hover:border-emerald-200 transition-all duration-300 group cursor-pointer"
              >
                <motion.div
                  whileHover={{ 
                    rotate: 720,
                    scale: 1.2,
                    transition: { duration: 0.6 }
                  }}
                  initial={{ rotate: 0 }}
                >
                  <feature.icon className="w-12 h-12 text-emerald-600 mx-auto mb-4 group-hover:text-emerald-700" />
                </motion.div>
                <motion.h3 
                  className="text-xl font-semibold mb-2 text-slate-900"
                  whileHover={{ 
                    scale: 1.1,
                    color: "#059669",
                    transition: { duration: 0.3 }
                  }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p 
                  className="text-slate-600"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  {feature.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-lg text-slate-300">
              業務の内容
            </p>
          </motion.div>

          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 150,
                  damping: 12
                }
              }}
              transition={{ duration: 1.2 }}
              whileHover={{ 
                scale: 1.08, 
                y: -10,
                transition: { duration: 0.5 }
              }}
              className="relative bg-gradient-to-br from-slate-800/80 via-slate-700/60 to-slate-800/80 backdrop-blur-xl p-10 rounded-3xl border border-slate-600/40 hover:border-emerald-400/60 transition-all duration-500 cursor-pointer max-w-2xl shadow-2xl hover:shadow-emerald-500/20 overflow-hidden group"
            >
              {/* 背景装飾 */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-emerald-400/10 rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
              
              <motion.h3 
                className="relative z-10 text-3xl font-bold bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent mb-6"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                施工管理業務
              </motion.h3>
              <motion.p 
                className="relative z-10 text-slate-200 leading-relaxed mb-8 text-lg"
                whileHover={{ 
                  scale: 1.01,
                  transition: { duration: 0.3 }
                }}
              >
                現場での電気等の施工管理を担当していただきます。具体的には、工程の管理から材料の発注、協力業者との連携による工事計画の立案まで、案件の成功に不可欠な業務を一手に引き受けていただきます。先輩社員がしっかりサポートするので、安心してスキルを身につけていただけます。私たちと一緒に、質の高いサービスを提供しましょう。
              </motion.p>
              <motion.div
                className="relative z-10"
                whileHover={{ 
                  x: 10,
                  transition: { type: "spring", stiffness: 400 }
                }}
              >
                <Link
                  href="/services"
                  className="group/link bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300 text-white font-semibold inline-flex items-center px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-emerald-500/30"
                >
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    詳しく見る
                  </motion.span>
                  <motion.div
                    whileHover={{ 
                      x: 3,
                      transition: { duration: 0.2 }
                    }}
                    className="ml-2"
                  >
                    <ArrowRight size={18} />
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 先輩社員からのメッセージセクション */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              先輩社員からのメッセージ
            </h2>
            <p className="text-lg text-slate-600">
              実際に働く先輩の声をお聞きください
            </p>
          </motion.div>

          <div className="space-y-12">
            {/* YouTube動画と先輩社員メッセージ */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* YouTube動画 */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-100 aspect-video">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/5SNPX6PpIvw"
                    title="先輩社員インタビュー"
                    style={{ border: 'none' }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </motion.div>

              {/* 先輩社員メッセージ */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      S
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900 mb-2 text-xl">
                        2017年入社　S　男性30代
                      </h4>
                      <p className="text-slate-600 leading-relaxed text-lg">
                        &ldquo;成果に応じた報酬が得られるので、がんばった分だけやりがいを感じられます。私は資格取得を目指して勉強中ですが、社長や仲間のサポートがあるので成長しやすいですよ。実務と学びが直結しており、結果が出ればさらに評価されるからモチベーションも高まります。&rdquo;
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
            
            {/* LINEカード - セクション中央 */}
            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-r from-green-500 to-green-400 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer max-w-md w-full"
              >
                <Link
                  href="https://lin.ee/7p7uVgs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-white"
                >
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <span className="text-green-500 font-bold text-xl">L</span>
                    </div>
                    <span className="text-2xl font-bold">LINEできいてみる</span>
                  </div>
                  <p className="text-green-100 mt-3 text-base">
                    気軽に質問や相談ができます
                  </p>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}