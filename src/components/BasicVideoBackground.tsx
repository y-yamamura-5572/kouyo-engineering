'use client'

import { useState, useEffect } from 'react'
import AnimatedBackground from './AnimatedBackground'

export default function BasicVideoBackground() {
  const [showVideo, setShowVideo] = useState(false)

  useEffect(() => {
    // 1秒後に動画を表示
    const timer = setTimeout(() => {
      setShowVideo(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (!showVideo) {
    return <AnimatedBackground />
  }

  return (
    <div className="absolute inset-0 z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ 
          backgroundColor: 'transparent',
          pointerEvents: 'none'
        }}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      
      {/* フォールバック背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      {/* 動画オーバーレイ */}
      <div className="absolute inset-0 bg-slate-900/60" />
    </div>
  )
}