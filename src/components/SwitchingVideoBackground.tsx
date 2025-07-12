'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedBackground from './AnimatedBackground'

interface VideoData {
  src: string
  title: string
}

const videos: VideoData[] = [
  { src: '/hero-video.mp4', title: '道路電気工事' },
  { src: '/hero-video.mp4', title: 'プラント防災電気工事' } // 後で別の動画に変更可能
]

export default function SwitchingVideoBackground() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const [mounted, setMounted] = useState(false)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [, setVideoReady] = useState(false)
  const [useFallback, setUseFallback] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // 動画切り替え管理（シンプル版）
  useEffect(() => {
    if (!mounted) return
    
    console.log(`Switching to video ${currentVideoIndex}`)
    
    // 全ての動画を停止
    videoRefs.current.forEach((video) => {
      if (video) {
        video.pause()
        video.currentTime = 0
      }
    })

    // 現在の動画を設定
    const currentVideo = videoRefs.current[currentVideoIndex]
    if (!currentVideo) return

    const playCurrentVideo = async () => {
      try {
        setVideoReady(false)
        currentVideo.currentTime = 0
        await currentVideo.play()
        setVideoReady(true)
        console.log(`Video ${currentVideoIndex} is now playing`)
      } catch (err) {
        console.error(`Video ${currentVideoIndex} play failed:`, err)
        setUseFallback(true)
      }
    }

    const handleEnded = () => {
      console.log(`Video ${currentVideoIndex} ended`)
      if (!isTransitioning) {
        setIsTransitioning(true)
        setCurrentVideoIndex(prev => (prev + 1) % videos.length)
        setTimeout(() => setIsTransitioning(false), 500)
      }
    }

    currentVideo.addEventListener('ended', handleEnded)
    
    // 動画が準備できていれば即座に再生、そうでなければ準備を待つ
    if (currentVideo.readyState >= 3) {
      playCurrentVideo()
    } else {
      const handleCanPlay = () => {
        currentVideo.removeEventListener('canplay', handleCanPlay)
        playCurrentVideo()
      }
      currentVideo.addEventListener('canplay', handleCanPlay)
    }

    return () => {
      currentVideo.removeEventListener('ended', handleEnded)
    }
  }, [mounted, currentVideoIndex, isTransitioning])

  if (!mounted) {
    return (
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 bg-slate-900/60" />
      </div>
    )
  }

  if (useFallback) {
    return <AnimatedBackground />
  }

  return (
    <div className="absolute inset-0 z-0">
      {/* フォールバック背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-0" />
      
      {/* 動画要素 */}
      {videos.map((video, index) => (
        <motion.video
          key={index}
          ref={el => { videoRefs.current[index] = el }}
          autoPlay={index === currentVideoIndex}
          loop
          muted
          playsInline
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: index === currentVideoIndex ? 1 : 0 
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover z-10"
          preload="metadata"
          style={{ 
            backgroundColor: 'transparent',
            pointerEvents: 'none'
          }}
        >
          <source src={video.src} type="video/mp4" />
        </motion.video>
      ))}
      
      {/* 動画オーバーレイ */}
      <div className="absolute inset-0 bg-slate-900/40 z-20" />
      

      {/* インジケーター */}
      <div className="absolute bottom-8 right-8 z-30 flex space-x-2">
        {videos.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              if (!isTransitioning && index !== currentVideoIndex) {
                setIsTransitioning(true)
                setVideoReady(false)
                setCurrentVideoIndex(index)
                setTimeout(() => setIsTransitioning(false), 1000)
              }
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentVideoIndex 
                ? 'bg-emerald-500' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  )
}