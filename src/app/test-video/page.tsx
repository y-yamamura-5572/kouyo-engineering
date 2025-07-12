'use client'

import { useEffect, useRef, useState } from 'react'

export default function TestVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoInfo, setVideoInfo] = useState({
    canPlay: false,
    error: null as string | null,
    duration: 0,
    currentTime: 0,
    paused: true,
    ended: false,
    readyState: 0
  })

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const updateInfo = () => {
      setVideoInfo({
        canPlay: video.readyState >= 3,
        error: video.error?.message || null,
        duration: video.duration || 0,
        currentTime: video.currentTime || 0,
        paused: video.paused,
        ended: video.ended,
        readyState: video.readyState
      })
    }

    const events = [
      'loadstart', 'durationchange', 'loadedmetadata', 'loadeddata',
      'progress', 'canplay', 'canplaythrough', 'play', 'pause',
      'seeking', 'seeked', 'ended', 'error', 'timeupdate'
    ]

    events.forEach(event => {
      video.addEventListener(event, updateInfo)
    })

    // 初期状態を更新
    updateInfo()

    return () => {
      events.forEach(event => {
        video.removeEventListener(event, updateInfo)
      })
    }
  }, [])

  const handlePlay = () => {
    const video = videoRef.current
    if (video) {
      video.play().catch(err => {
        console.error('Play failed:', err)
      })
    }
  }

  const handlePause = () => {
    const video = videoRef.current
    if (video) {
      video.pause()
    }
  }

  const readyStateText = [
    'HAVE_NOTHING',
    'HAVE_METADATA', 
    'HAVE_CURRENT_DATA',
    'HAVE_FUTURE_DATA',
    'HAVE_ENOUGH_DATA'
  ][videoInfo.readyState] || 'UNKNOWN'

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Video Test Page</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Video Player</h2>
          <div className="relative bg-black rounded-lg overflow-hidden">
            <video
              ref={videoRef}
              className="w-full h-64 object-cover"
              controls
              preload="metadata"
            >
              <source src="/hero-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          <div className="mt-4 flex gap-4">
            <button 
              onClick={handlePlay}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Play
            </button>
            <button 
              onClick={handlePause}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Pause
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Video Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <strong>Can Play:</strong> {videoInfo.canPlay ? 'Yes' : 'No'}
            </div>
            <div>
              <strong>Ready State:</strong> {readyStateText} ({videoInfo.readyState})
            </div>
            <div>
              <strong>Duration:</strong> {videoInfo.duration.toFixed(2)}s
            </div>
            <div>
              <strong>Current Time:</strong> {videoInfo.currentTime.toFixed(2)}s
            </div>
            <div>
              <strong>Paused:</strong> {videoInfo.paused ? 'Yes' : 'No'}
            </div>
            <div>
              <strong>Ended:</strong> {videoInfo.ended ? 'Yes' : 'No'}
            </div>
          </div>
          
          {videoInfo.error && (
            <div className="mt-4 p-4 bg-red-100 border border-red-400 rounded">
              <strong>Error:</strong> {videoInfo.error}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}