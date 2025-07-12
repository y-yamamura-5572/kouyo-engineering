'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)

  const navigation = [
    { name: '採用情報', href: '/careers' }
  ]

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="向洋エンジニアリング株式会社 - 神戸市の電気工事会社"
                width={180}
                height={40}
                className="h-8 md:h-10 w-auto"
                priority
              />
            </Link>
            
            <nav className="hidden md:flex space-x-8 ml-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-slate-700 hover:text-emerald-600 transition-all duration-300 font-medium relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            <button
              className="md:hidden text-slate-700 hover:text-emerald-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-slate-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>
    )
  }

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Link href="/" className="flex items-center">
              <motion.div
                whileHover={{
                  filter: "brightness(1.1)",
                  transition: { duration: 0.3 }
                }}
              >
                <Image
                  src="/logo.png"
                  alt="向洋エンジニアリング株式会社 - 神戸市の電気工事会社"
                  width={180}
                  height={40}
                  className="h-8 md:h-10 w-auto transition-all duration-300"
                  priority
                />
              </motion.div>
            </Link>
          </motion.div>
          
          <nav className="hidden md:flex space-x-8 ml-8">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ 
                  y: -2,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href={item.href}
                  className="text-slate-700 hover:text-emerald-600 transition-colors duration-300 font-medium relative group py-2"
                >
                  <motion.span
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {item.name}
                  </motion.span>
                  <motion.span 
                    className="absolute -bottom-0 left-0 h-0.5 bg-emerald-600"
                    initial={{ width: 0, opacity: 0 }}
                    whileHover={{ 
                      width: "100%", 
                      opacity: 1,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          <motion.button
            whileHover={{ 
              scale: 1.2, 
              rotate: 180,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.8 }}
            className="md:hidden text-slate-700 hover:text-emerald-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </motion.button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-sm border-t border-slate-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}