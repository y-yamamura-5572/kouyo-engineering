'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Footer() {
  const [isClient, setIsClient] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-emerald-400">向洋エンジニアリング</h3>
              <p className="text-slate-300 mb-4">
                社会と共に、未来を創造する
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-emerald-500/10 rounded-full flex items-center justify-center border border-emerald-500/30">
                  <Mail size={16} className="text-emerald-400" />
                </div>
                <div className="w-10 h-10 bg-emerald-500/10 rounded-full flex items-center justify-center border border-emerald-500/30">
                  <Phone size={16} className="text-emerald-400" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-white">会社情報</h4>
              <ul className="space-y-3">
                {[
                  { name: '会社概要', href: '/about' },
                  { name: '業務内容', href: '/services' },
                  { name: '施工実績', href: '/projects' }
                ].map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-slate-400 hover:text-emerald-400 transition-colors duration-300">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-white">採用情報</h4>
              <ul className="space-y-3">
                {[
                  { name: '求人情報', href: '/careers' },
                  { name: 'よくある質問', href: '/careers/faq' },
                  { name: '福利厚生', href: '/careers/benefits' }
                ].map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-slate-400 hover:text-emerald-400 transition-colors duration-300">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-white">お問い合わせ</h4>
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-slate-800/50 rounded-lg border border-slate-700">
                  <MapPin size={18} className="mr-3 text-emerald-400" />
                  <span className="text-slate-300">兵庫県神戸市</span>
                </div>
                <div className="flex items-center p-3 bg-slate-800/50 rounded-lg border border-slate-700">
                  <Phone size={18} className="mr-3 text-emerald-400" />
                  <span className="text-slate-300">078-XXX-XXXX</span>
                </div>
                <div className="flex items-center p-3 bg-slate-800/50 rounded-lg border border-slate-700">
                  <Mail size={18} className="mr-3 text-emerald-400" />
                  <span className="text-slate-300">info@kouyo-eng.com</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-12 pt-8 text-center">
            <p className="text-slate-400">&copy; 2024 向洋エンジニアリング. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }

  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="bg-gradient-to-br from-slate-900 to-slate-800 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4 text-emerald-400">向洋エンジニアリング</h3>
            <p className="text-slate-300 mb-4">
              社会と共に、未来を創造する
            </p>
            <div className="flex space-x-4">
              <motion.div
                whileHover={{ 
                  scale: 1.5, 
                  rotate: 720,
                  y: -5,
                  transition: { duration: 0.6 }
                }}
                whileTap={{ scale: 0.8 }}
                className="w-10 h-10 bg-emerald-500/10 rounded-full flex items-center justify-center border border-emerald-500/30 cursor-pointer"
              >
                <Mail size={16} className="text-emerald-400" />
              </motion.div>
              <motion.div
                whileHover={{ 
                  scale: 1.5, 
                  rotate: -720,
                  y: -5,
                  transition: { duration: 0.6 }
                }}
                whileTap={{ scale: 0.8 }}
                className="w-10 h-10 bg-emerald-500/10 rounded-full flex items-center justify-center border border-emerald-500/30 cursor-pointer"
              >
                <Phone size={16} className="text-emerald-400" />
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-6 text-white">会社情報</h4>
            <ul className="space-y-3">
              {[
                { name: '会社概要', href: '/about' },
                { name: '業務内容', href: '/services' },
                { name: '施工実績', href: '/projects' }
              ].map((item) => (
                <li key={item.name}>
                  <motion.div
                    whileHover={{ 
                      x: 15,
                      scale: 1.1,
                      transition: { type: "spring", stiffness: 400 }
                    }}
                  >
                    <Link 
                      href={item.href} 
                      className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 inline-flex items-center group"
                    >
                      <motion.div
                        whileHover={{ 
                          rotate: 360,
                          scale: 1.3,
                          transition: { duration: 0.4 }
                        }}
                      >
                        <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.div>
                      <motion.span
                        whileHover={{ 
                          scale: 1.05,
                          transition: { duration: 0.2 }
                        }}
                      >
                        {item.name}
                      </motion.span>
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-6 text-white">採用情報</h4>
            <ul className="space-y-3">
              {[
                { name: '求人情報', href: '/careers' },
                { name: 'よくある質問', href: '/careers/faq' },
                { name: '福利厚生', href: '/careers/benefits' }
              ].map((item) => (
                <li key={item.name}>
                  <motion.div
                    whileHover={{ 
                      x: 15,
                      scale: 1.1,
                      transition: { type: "spring", stiffness: 400 }
                    }}
                  >
                    <Link 
                      href={item.href} 
                      className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 inline-flex items-center group"
                    >
                      <motion.div
                        whileHover={{ 
                          rotate: 360,
                          scale: 1.3,
                          transition: { duration: 0.4 }
                        }}
                      >
                        <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.div>
                      <motion.span
                        whileHover={{ 
                          scale: 1.05,
                          transition: { duration: 0.2 }
                        }}
                      >
                        {item.name}
                      </motion.span>
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-6 text-white">お問い合わせ</h4>
            <div className="space-y-4">
              <motion.div 
                whileHover={{ 
                  scale: 1.1,
                  y: -5,
                  rotate: [0, -1, 1, 0],
                  transition: { duration: 0.4 }
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center p-3 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer"
              >
                <motion.div
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.3,
                    transition: { duration: 0.5 }
                  }}
                >
                  <MapPin size={18} className="mr-3 text-emerald-400" />
                </motion.div>
                <motion.span 
                  className="text-slate-300"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  兵庫県神戸市
                </motion.span>
              </motion.div>
              <motion.div 
                whileHover={{ 
                  scale: 1.1,
                  y: -5,
                  rotate: [0, -1, 1, 0],
                  transition: { duration: 0.4 }
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center p-3 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer"
              >
                <motion.div
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.3,
                    transition: { duration: 0.5 }
                  }}
                >
                  <Phone size={18} className="mr-3 text-emerald-400" />
                </motion.div>
                <motion.span 
                  className="text-slate-300"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  078-XXX-XXXX
                </motion.span>
              </motion.div>
              <motion.div 
                whileHover={{ 
                  scale: 1.1,
                  y: -5,
                  rotate: [0, -1, 1, 0],
                  transition: { duration: 0.4 }
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center p-3 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer"
              >
                <motion.div
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.3,
                    transition: { duration: 0.5 }
                  }}
                >
                  <Mail size={18} className="mr-3 text-emerald-400" />
                </motion.div>
                <motion.span 
                  className="text-slate-300"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  info@kouyo-eng.com
                </motion.span>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          variants={itemVariants}
          className="border-t border-slate-700 mt-12 pt-8 text-center"
        >
          <p className="text-slate-400">&copy; 2024 向洋エンジニアリング. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  )
}