'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ArrowRight, Instagram, ExternalLink } from 'lucide-react'
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-emerald-400">向洋エンジニアリング</h3>
              <p className="text-slate-300 mb-4">
                社会と共に、未来を創造する
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-20 h-20 bg-pink-500/10 rounded-full flex items-center justify-center border border-pink-500/30 hover:bg-pink-500/20 hover:border-pink-400 transition-colors duration-300"
                >
                  <Instagram size={32} className="text-pink-400" />
                </Link>
              </div>
            </div>
            
            
            <div>
              <h4 className="font-semibold mb-6 text-white">お問い合わせ</h4>
              <div className="space-y-4">
                <Link
                  href="https://kouyo-eng.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-emerald-500/50 hover:bg-slate-700/50 transition-all duration-300 cursor-pointer"
                >
                  <ExternalLink size={18} className="mr-3 text-emerald-400" />
                  <span className="text-slate-300 hover:text-emerald-400 transition-colors duration-300">メイン企業ホームページ</span>
                </Link>
                <Link
                  href="https://www.google.com/maps/search/?api=1&query=兵庫県神戸市灘区琵琶町3丁目3-8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-emerald-500/50 hover:bg-slate-700/50 transition-all duration-300 cursor-pointer"
                >
                  <MapPin size={18} className="mr-3 text-emerald-400" />
                  <span className="text-slate-300 hover:text-emerald-400 transition-colors duration-300">兵庫県神戸市灘区琵琶町3丁目3-8</span>
                </Link>
                <div className="flex items-center p-3 bg-slate-800/50 rounded-lg border border-slate-700">
                  <Phone size={18} className="mr-3 text-emerald-400" />
                  <span className="text-slate-300">078-881-5572</span>
                </div>
                <div className="flex items-center p-3 bg-slate-800/50 rounded-lg border border-slate-700">
                  <Mail size={18} className="mr-3 text-emerald-400" />
                  <span className="text-slate-300">y_yamamura@kouyoueng.com</span>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              >
                <Link
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-20 h-20 bg-pink-500/10 rounded-full flex items-center justify-center border border-pink-500/30 hover:bg-pink-500/20 hover:border-pink-400 transition-colors duration-300 cursor-pointer"
                >
                  <Instagram size={32} className="text-pink-400" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
          
          
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-6 text-white">お問い合わせ</h4>
            <div className="space-y-4">
              <motion.div 
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="https://kouyo-eng.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-emerald-500/50 hover:bg-slate-700/50 transition-all duration-300 cursor-pointer"
                >
                  <ExternalLink size={18} className="mr-3 text-emerald-400" />
                  <span className="text-slate-300 hover:text-emerald-400 transition-colors duration-300">メイン企業ホームページ</span>
                </Link>
              </motion.div>
              <motion.div 
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="https://www.google.com/maps/search/?api=1&query=兵庫県神戸市灘区琵琶町3丁目3-8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-emerald-500/50 hover:bg-slate-700/50 transition-all duration-300 cursor-pointer"
                >
                  <MapPin size={18} className="mr-3 text-emerald-400" />
                  <span className="text-slate-300 hover:text-emerald-400 transition-colors duration-300">兵庫県神戸市灘区琵琶町3丁目3-8</span>
                </Link>
              </motion.div>
              <motion.div 
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center p-3 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer"
              >
                <Phone size={18} className="mr-3 text-emerald-400" />
                <span className="text-slate-300">078-881-5572</span>
              </motion.div>
              <motion.div 
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center p-3 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer"
              >
                <Mail size={18} className="mr-3 text-emerald-400" />
                <span className="text-slate-300">y_yamamura@kouyoueng.com</span>
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