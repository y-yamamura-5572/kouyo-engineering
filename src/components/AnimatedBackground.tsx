'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function AnimatedBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // サーバーサイドでは基本背景のみ
  if (!mounted) {
    return (
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 bg-slate-900/60" />
      </div>
    )
  }

  // クライアントサイドでパーティクルを生成
  const particles = Array.from({ length: 20 }, (_, i) => ({
    left: (i * 5.26) % 100, // 固定値ベースの分散
    top: (i * 7.89) % 100,
    duration: 3 + (i % 3),
    delay: (i % 4) * 0.5
  }))

  return (
    <div className="absolute inset-0 z-0">
      {/* グラデーション背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      
      {/* アニメーション背景パターン */}
      <div className="absolute inset-0 opacity-20">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.4, 0.2],
              x: [0, 100, 0],
              y: [0, -50, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-3/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 0.8, 1.2],
              opacity: [0.3, 0.6, 0.3],
              x: [0, -80, 0],
              y: [0, 60, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
            animate={{
              scale: [0.8, 1.3, 0.8],
              opacity: [0.1, 0.3, 0.1],
              x: [0, -60, 0],
              y: [0, -80, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      
      {/* パーティクルのような効果 */}
      <div className="absolute inset-0 opacity-10">
        {particles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "easeInOut"
              }}
            />
        ))}
      </div>
      
      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-slate-900/60" />
    </div>
  )
}