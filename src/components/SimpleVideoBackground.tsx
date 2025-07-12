'use client'

import { useEffect, useRef, useState } from 'react'
import AnimatedBackground from './AnimatedBackground'

export default function SimpleVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [mounted, setMounted] = useState(false)
  const [videoReady, setVideoReady] = useState(false)
  const [useFallback, setUseFallback] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    
    const video = videoRef.current
    if (!video) return

    console.log('Video element mounted, trying to load video...')

    const handleCanPlay = () => {
      console.log('Video can play event fired')
      setVideoReady(true)
      video.play().then(() => {
        console.log('Video started playing')
        setIsPlaying(true)
      }).catch(err => {
        console.error('Video play failed:', err)
        setUseFallback(true)
      })
    }

    const handleError = (e: any) => {
      console.error('Video error:', e)
      setUseFallback(true)
    }

    const handleLoadedData = () => {
      console.log('Video loaded data')
      setVideoReady(true)
    }

    const handlePlay = () => {
      console.log('Video play event fired')
      setIsPlaying(true)
    }

    const handlePause = () => {
      console.log('Video pause event fired')
      setIsPlaying(false)
    }

    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('error', handleError)
    video.addEventListener('loadeddata', handleLoadedData)
    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)
    
    // 2秒後にフォールバックを表示（テスト用に短縮）
    const fallbackTimer = setTimeout(() => {
      if (!videoReady) {
        console.log('Video loading timeout, showing fallback')
        setUseFallback(true)
      }
    }, 2000)

    return () => {
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('error', handleError)
      video.removeEventListener('loadeddata', handleLoadedData)
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
      clearTimeout(fallbackTimer)
    }
  }, [mounted, videoReady])

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
      
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className={`absolute inset-0 w-full h-full object-cover z-10 ${
          videoReady ? 'opacity-100' : 'opacity-0'
        }`}
        preload="metadata"
        style={{ 
          backgroundColor: 'transparent',
          pointerEvents: 'none'
        }}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      
      {/* 動画オーバーレイ */}
      <div className="absolute inset-0 bg-slate-900/40 z-20" />
      
    </div>
  )
}