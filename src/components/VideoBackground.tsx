'use client'

import { useEffect, useRef, useState } from 'react'
import AnimatedBackground from './AnimatedBackground'

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isClient, setIsClient] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const [showFallback, setShowFallback] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    const video = videoRef.current
    if (!video) return

    // 10秒後に動画が読み込めない場合はフォールバックを表示
    const fallbackTimer = setTimeout(() => {
      if (!videoLoaded) {
        console.log('Video loading timeout, showing animated fallback')
        setShowFallback(true)
      }
    }, 10000)

    const handleVideoError = (e: Event) => {
      console.error('Video failed to load:', e)
      const videoElement = e.target as HTMLVideoElement
      if (videoElement.error) {
        console.error('Video error code:', videoElement.error.code)
        console.error('Video error message:', videoElement.error.message)
        // エラーコードによる詳細な情報
        switch (videoElement.error.code) {
          case 1:
            console.error('MEDIA_ERR_ABORTED: The user aborted the video playback.')
            break
          case 2:
            console.error('MEDIA_ERR_NETWORK: A network error occurred.')
            break
          case 3:
            console.error('MEDIA_ERR_DECODE: An error occurred while decoding the video.')
            break
          case 4:
            console.error('MEDIA_ERR_SRC_NOT_SUPPORTED: The video format is not supported.')
            break
          default:
            console.error('Unknown video error.')
        }
      }
      setVideoError(true)
      setShowFallback(true)
    }

    const handleVideoLoad = () => {
      console.log('Video loadeddata event fired')
      setVideoLoaded(true)
      clearTimeout(fallbackTimer)
      // 動画が読み込まれた後、再生を試行
      video.play().catch(err => {
        console.error('Video auto-play failed after load:', err)
      })
    }

    const handleCanPlay = () => {
      console.log('Video canplay event fired')
      setVideoLoaded(true)
      clearTimeout(fallbackTimer)
    }

    const handleLoadStart = () => {
      console.log('Video loadstart event fired')
    }

    const handleCanPlayThrough = () => {
      console.log('Video canplaythrough event fired')
      setVideoLoaded(true)
      clearTimeout(fallbackTimer)
    }

    const handlePlay = () => {
      console.log('Video play event fired')
    }

    const handlePause = () => {
      console.log('Video pause event fired')
    }

    const handleLoadedMetadata = () => {
      console.log('Video loadedmetadata event fired')
      console.log('Video duration:', video.duration)
      console.log('Video dimensions:', video.videoWidth, 'x', video.videoHeight)
    }

    video.addEventListener('error', handleVideoError)
    video.addEventListener('loadeddata', handleVideoLoad)
    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('canplaythrough', handleCanPlayThrough)
    video.addEventListener('loadstart', handleLoadStart)
    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)
    video.addEventListener('loadedmetadata', handleLoadedMetadata)

    // 動画の読み込みを強制的に開始
    video.load()

    // 2秒後に再生を試行
    const playTimer = setTimeout(() => {
      if (video && !videoError) {
        video.play().catch(err => {
          console.error('Video play failed:', err)
          // 再生に失敗した場合、さらに2秒後に再試行
          setTimeout(() => {
            if (video && !videoError) {
              video.play().catch(err2 => {
                console.error('Video play retry failed:', err2)
                setShowFallback(true)
              })
            }
          }, 2000)
        })
      }
    }, 2000)

    return () => {
      clearTimeout(fallbackTimer)
      clearTimeout(playTimer)
      video.removeEventListener('error', handleVideoError)
      video.removeEventListener('loadeddata', handleVideoLoad)
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('canplaythrough', handleCanPlayThrough)
      video.removeEventListener('loadstart', handleLoadStart)
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
    }
  }, [])

  // フォールバック表示またはエラー時
  if (showFallback || videoError) {
    return <AnimatedBackground />
  }

  return (
    <div className="absolute inset-0 z-0">
      {isClient && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded && !videoError ? 'opacity-100' : 'opacity-0'
          }`}
          preload="metadata"
          style={{ 
            backgroundColor: 'transparent',
            pointerEvents: 'none'
          }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {/* フォールバック背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      {/* 動画オーバーレイ */}
      <div className="absolute inset-0 bg-slate-900/60" />
      
      {/* デバッグ情報 */}
      {process.env.NODE_ENV === 'development' && (
        <div className="absolute top-4 left-4 bg-black/50 text-white text-xs p-2 rounded z-50">
          <div>Client: {isClient ? 'Yes' : 'No'}</div>
          <div>Video Loaded: {videoLoaded ? 'Yes' : 'No'}</div>
          <div>Video Error: {videoError ? 'Yes' : 'No'}</div>
          <div>Show Fallback: {showFallback ? 'Yes' : 'No'}</div>
          <div>Video File: /hero-video.mp4 (33MB)</div>
        </div>
      )}
    </div>
  )
}