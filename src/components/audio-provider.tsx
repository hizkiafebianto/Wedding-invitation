"use client"

import { useEffect, useRef, useState } from "react"
import { AudioPlayer } from "@/components/audio-player"

export const AudioProvider = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [shouldPlay, setShouldPlay] = useState(false)

  useEffect(() => {
    const should = window.localStorage.getItem("shouldPlayAudio")
    if (should === "true") {
      setShouldPlay(true)
      window.localStorage.removeItem("shouldPlayAudio")
    }
  }, [])

  useEffect(() => {
    if (shouldPlay && audioRef.current) {
      audioRef.current.muted = false
      audioRef.current
        .play()
        .catch((err) => console.warn("Autoplay error:", err))
    }
  }, [shouldPlay])

  return (
    <>
      <audio ref={audioRef} src="/audio/audio.mp3" loop preload="auto" muted />
      {shouldPlay && <AudioPlayer audioRef={audioRef} />}
    </>
  )
}
