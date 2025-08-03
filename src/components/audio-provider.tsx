"use client"

import { useEffect, useRef, useState } from 'react';
import { AudioPlayer } from '@/components/audio-player';

export const AudioProvider = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [shouldPlay, setShouldPlay] = useState<boolean>(() => {
        if (typeof window !== "undefined") {
            return window.localStorage.getItem("shouldPlayAudio") === "true";
        }

        return false;
    });

    useEffect(() => {
        const should = window.localStorage.getItem('shouldPlayAudio');
        if (should === 'true') {
            setShouldPlay(true);
            // window.localStorage.removeItem('shouldPlayAudio');
        }
    }, []);

    useEffect(() => {
        if (shouldPlay && audioRef.current) {
            audioRef.current.muted = false;
            audioRef.current.play().catch((err) => console.warn('Autoplay error:', err));
        }
    }, [shouldPlay]);

    useEffect(() => {
        const handleVisibilityChange = () => {
            if(document.hidden && audioRef.current) {
                audioRef.current.pause();
            } else if (!document.hidden && shouldPlay && audioRef.current) {
                audioRef.current.play().catch((err) => console.warn("Autoplay error:", err))
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange)

        return () => {
            document.removeEventListener("visibilitychange", handleVisibilityChange)
        }
    }, [shouldPlay])

    useEffect(() => {
        window.localStorage.setItem('shouldPlayAudio', shouldPlay.toString());
    }, [shouldPlay]);

    return (
        <>
            <audio ref={audioRef} src="/audio/wedding_audio.mp3" loop preload="auto" muted />
            <AudioPlayer
                audioRef={audioRef}
                playing={shouldPlay}
                setShouldPlay={setShouldPlay}
            />
        </>
    );
};
