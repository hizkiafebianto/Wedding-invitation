'use client';

import { useEffect, useRef, useState } from 'react';
import { AudioPlayer } from '@/components/audio-player';

export const AudioProvider = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [shouldPlay, setShouldPlay] = useState(false);

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
            <audio ref={audioRef} src="/audio/audio_wedding.mp3" loop preload="auto" muted />
            {shouldPlay && <AudioPlayer audioRef={audioRef} />}
        </>
    );
};
