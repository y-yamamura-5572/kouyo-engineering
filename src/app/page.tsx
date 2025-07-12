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
                未経験者歓迎・年間休日120日・充実した福利厚生
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
                未経験者歓迎・年間休日120日・充実した福利厚生
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              向洋エンジニアリングの特徴
            </h2>
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
                title: '年間休日120日',
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              業務内容
            </h2>
            <p className="text-lg text-slate-300">
              私たちの専門分野
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -60, scale: 0.9, rotate: -5 }}
              whileInView={{ 
                opacity: 1, 
                x: 0, 
                scale: 1, 
                rotate: 0,
                transition: {
                  type: "spring",
                  stiffness: 150,
                  damping: 12
                }
              }}
              transition={{ duration: 1.2 }}
              whileHover={{ 
                scale: 1.08, 
                rotate: [0, -2, 2, 0],
                y: -10,
                transition: { duration: 0.5 }
              }}
              className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer"
            >
              <motion.h3 
                className="text-2xl font-bold text-white mb-4"
                whileHover={{ 
                  scale: 1.1,
                  color: "#34d399",
                  transition: { duration: 0.3 }
                }}
              >
                道路電気工事
              </motion.h3>
              <motion.p 
                className="text-slate-300 mb-6"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                道路照明、信号機、道路標識などの電気設備の設置・保守を行います。
                安全で快適な道路環境の実現に貢献しています。
              </motion.p>
              <motion.div
                whileHover={{ 
                  x: 15,
                  transition: { type: "spring", stiffness: 400 }
                }}
              >
                <Link
                  href="/services"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold inline-flex items-center"
                >
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    詳しく見る
                  </motion.span>
                  <motion.div
                    whileHover={{ 
                      x: 5,
                      rotate: 360,
                      transition: { duration: 0.4 }
                    }}
                  >
                    <ArrowRight className="ml-1" size={16} />
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60, scale: 0.9, rotate: 5 }}
              whileInView={{ 
                opacity: 1, 
                x: 0, 
                scale: 1, 
                rotate: 0,
                transition: {
                  type: "spring",
                  stiffness: 150,
                  damping: 12
                }
              }}
              transition={{ duration: 1.2 }}
              whileHover={{ 
                scale: 1.08, 
                rotate: [0, 2, -2, 0],
                y: -10,
                transition: { duration: 0.5 }
              }}
              className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer"
            >
              <motion.h3 
                className="text-2xl font-bold text-white mb-4"
                whileHover={{ 
                  scale: 1.1,
                  color: "#34d399",
                  transition: { duration: 0.3 }
                }}
              >
                プラント防災電気工事
              </motion.h3>
              <motion.p 
                className="text-slate-300 mb-6"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                工場やプラントにおける防災設備の電気工事を専門に行います。
                火災報知設備、避難誘導灯など、安全を守る重要な設備を扱います。
              </motion.p>
              <motion.div
                whileHover={{ 
                  x: 15,
                  transition: { type: "spring", stiffness: 400 }
                }}
              >
                <Link
                  href="/services"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold inline-flex items-center"
                >
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    詳しく見る
                  </motion.span>
                  <motion.div
                    whileHover={{ 
                      x: 5,
                      rotate: 360,
                      transition: { duration: 0.4 }
                    }}
                  >
                    <ArrowRight className="ml-1" size={16} />
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}