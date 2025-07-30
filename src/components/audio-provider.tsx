'use client';

import { useEffect, useRef, useState } from 'react';
import { AudioPlayer } from '@/components/audio-player';

export const AudioProvider = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [shouldPlay, setShouldPlay] = useState(false);
    // const [stoppedByScroll, setStoppedByScroll] = useState(false);

    useEffect(() => {
        const should = window.localStorage.getItem('shouldPlayAudio');
        if (should === 'true') {
            setShouldPlay(true);
            window.localStorage.removeItem('shouldPlayAudio');
        }
    }, []);

    useEffect(() => {
        if (shouldPlay && audioRef.current) {
            audioRef.current.muted = false;
            audioRef.current.play().catch((err) => console.warn('Autoplay error:', err));
        }
    }, [shouldPlay]);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (audioRef.current && !stoppedByScroll) {
    //             audioRef.current.pause();
    //             audioRef.current.currentTime = 0;
    //             setShouldPlay(false);
    //             setStoppedByScroll(true);
    //         }
    //     };

    //     const scrollTarget = document.getElementById('scrollable-right');
    //     if (scrollTarget) {
    //         scrollTarget.addEventListener('scroll', handleScroll, { passive: true });
    //     }

    //     return () => {
    //         if (scrollTarget) {
    //             scrollTarget.removeEventListener('scroll', handleScroll);
    //         }
    //     };
    // }, [stoppedByScroll]);

    return (
        <>
            <audio ref={audioRef} src="/audio/audio_wedding.mp3" loop preload="auto" muted />
            {shouldPlay && <AudioPlayer audioRef={audioRef} />}
        </>
    );
};
