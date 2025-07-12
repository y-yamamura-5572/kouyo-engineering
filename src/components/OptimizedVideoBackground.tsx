'use client'

import { useEffect, useRef, useState } from 'react'
import AnimatedBackground from './AnimatedBackground'

export default function OptimizedVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [mounted, setMounted] = useState(false)
  const [videoState, setVideoState] = useState({
    loaded: false,
    error: false,
    playing: false,
    showFallback: false
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    
    const video = videoRef.current
    if (!video) return

    let fallbackTimer: NodeJS.Timeout
    let playTimer: NodeJS.Timeout

    const handleLoadedMetadata = () => {
      console.log('Video metadata loaded:', {
        duration: video.duration,
        width: video.videoWidth,
        height: video.videoHeight
      })
    }

    const handleCanPlay = () => {
      console.log('Video can play')
      setVideoState(prev => ({ ...prev, loaded: true }))
      clearTimeout(fallbackTimer)
      
      // 少し遅延してから再生を試行
      playTimer = setTimeout(() => {
        if (video && !videoState.error) {
          video.play()
            .then(() => {
              console.log('Video playing successfully')
              setVideoState(prev => ({ ...prev, playing: true }))
            })
            .catch(err => {
              console.error('Video play failed:', err)
              setVideoState(prev => ({ ...prev, showFallback: true }))
            })
        }
      }, 500)
    }

    const handleError = (e: Event) => {
      console.error('Video error:', e)
      const videoElement = e.target as HTMLVideoElement
      if (videoElement.error) {
        console.error('Error details:', {
          code: videoElement.error.code,
          message: videoElement.error.message
        })
      }
      setVideoState(prev => ({ ...prev, error: true, showFallback: true }))
    }

    const handlePlay = () => {
      console.log('Video play event')
      setVideoState(prev => ({ ...prev, playing: true }))
    }

    const handlePause = () => {
      console.log('Video pause event')
      setVideoState(prev => ({ ...prev, playing: false }))
    }

    // イベントリスナーを追加
    video.addEventListener('loadedmetadata', handleLoadedMetadata)
    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('error', handleError)
    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)

    // 3秒後にフォールバックを表示（テスト用に短縮）
    fallbackTimer = setTimeout(() => {
      if (!videoState.loaded || !videoState.playing) {
        console.log('Video loading/playing timeout, showing fallback')
        setVideoState(prev => ({ ...prev, showFallback: true }))
      }
    }, 3000)

    return () => {
      clearTimeout(fallbackTimer)
      clearTimeout(playTimer)
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('error', handleError)
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
    }
  }, [mounted, videoState.error, videoState.loaded])

  if (!mounted || videoState.showFallback || videoState.error) {
    return <AnimatedBackground />
  }

  return (
    <div className="absolute inset-0 z-0">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          videoState.loaded && !videoState.error ? 'opacity-100' : 'opacity-0'
        }`}
        preload="metadata"
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
      
      {/* デバッグ情報 */}
      {process.env.NODE_ENV === 'development' && (
        <div className="absolute top-4 left-4 bg-black/50 text-white text-xs p-2 rounded z-50">
          <div>Mounted: {mounted ? 'Yes' : 'No'}</div>
          <div>Loaded: {videoState.loaded ? 'Yes' : 'No'}</div>
          <div>Playing: {videoState.playing ? 'Yes' : 'No'}</div>
          <div>Error: {videoState.error ? 'Yes' : 'No'}</div>
          <div>Fallback: {videoState.showFallback ? 'Yes' : 'No'}</div>
        </div>
      )}
    </div>
  )
}