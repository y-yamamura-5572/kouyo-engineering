'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
  const [videosReady, setVideosReady] = useState<boolean[]>([false, false])
  const [useFallback, setUseFallback] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // 自動切り替え（8秒間隔）
  useEffect(() => {
    if (!mounted || useFallback) return

    const interval = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true)
        setCurrentVideoIndex(prev => (prev + 1) % videos.length)
        
        // トランジション完了後にフラグをリセット
        setTimeout(() => setIsTransitioning(false), 1000)
      }
    }, 8000)

    return () => clearInterval(interval)
  }, [mounted, useFallback, isTransitioning])

  useEffect(() => {
    if (!mounted) return

    videos.forEach((video, index) => {
      const videoElement = videoRefs.current[index]
      if (!videoElement) return

      const handleCanPlay = () => {
        console.log(`Video ${index} can play`)
        setVideosReady(prev => {
          const newReady = [...prev]
          newReady[index] = true
          return newReady
        })
        
        if (index === currentVideoIndex) {
          videoElement.play().catch(err => {
            console.error(`Video ${index} play failed:`, err)
            setUseFallback(true)
          })
        }
      }

      const handleError = () => {
        console.error(`Video ${index} error`)
        setUseFallback(true)
      }

      videoElement.addEventListener('canplay', handleCanPlay)
      videoElement.addEventListener('error', handleError)

      return () => {
        videoElement.removeEventListener('canplay', handleCanPlay)
        videoElement.removeEventListener('error', handleError)
      }
    })
  }, [mounted, currentVideoIndex])

  // 現在の動画を再生、他の動画を一時停止
  useEffect(() => {
    if (!mounted) return

    videoRefs.current.forEach((video, index) => {
      if (!video || !videosReady[index]) return

      if (index === currentVideoIndex) {
        video.play().catch(err => {
          console.error(`Video ${index} play failed:`, err)
        })
      } else {
        video.pause()
      }
    })
  }, [currentVideoIndex, videosReady, mounted])

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
          ref={el => videoRefs.current[index] = el}
          autoPlay={index === currentVideoIndex}
          loop
          muted
          playsInline
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: index === currentVideoIndex && videosReady[index] ? 1 : 0 
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
      
      {/* 動画タイトル表示（オプション） */}
      <div className="absolute bottom-8 left-8 z-30">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentVideoIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg"
          >
            <p className="text-white/80 text-sm font-medium">
              {videos[currentVideoIndex].title}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* インジケーター */}
      <div className="absolute bottom-8 right-8 z-30 flex space-x-2">
        {videos.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true)
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