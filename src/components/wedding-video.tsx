"use client"

import { greatVibes } from '@/app/font';
import { Pause, Play } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { createDelayVariants } from '@/utils/animations';
// import Image from 'next/image';

export const WeddingVideo = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showButton, setShowButton] = useState(true);

    let hideTimeout: NodeJS.Timeout;


    const togglePlay = () => {
        if (!videoRef.current) return;

        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }

    };

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handlePlay = () => {
            setIsPlaying(true);
            setShowButton(true);

            setTimeout(() => setShowButton(false), 2000);
        };

        const handlePause = () => {
            setIsPlaying(false);
            setShowButton(true);
        }

        video.addEventListener("play", handlePlay);
        video.addEventListener("pause", handlePause);

        return () => {
            video.removeEventListener("play", handlePlay);
            video.removeEventListener("pause", handlePause);
        }
    }, [])

    const hideAfterDelay = () => {
        clearTimeout(hideTimeout);
        hideTimeout = setTimeout(() => {
            setShowButton(false);
        }, 2);
    }

    const handleMouseEnter = () =>{
        setShowButton(true);
        clearTimeout(hideTimeout);
    }

    const handleMouseLeave = () => {
        if (isPlaying) hideAfterDelay()
    }

    const handleVideoClick = () => {
        setShowButton(true);
    }

    return (
        <section id="wedding-video" className="relative px-4 text-center">
            <motion.h2
                variants={createDelayVariants('bottom')}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }} 
                className={`text-5xl ${greatVibes.className} mb-8 text-5xl md:text-6xl font-semibold text-lime-900`}
            >
                Our Footage
            </motion.h2>

            {/* Flower background absolute positioned */}
            {/* <div className="pointer-events-none absolute inset-0 -bottom-56 -z-10 flex items-center justify-center">
                <Image
                    src="/bunga/flower_footage.png"
                    alt="Background Flower"
                    width={1000}
                    height={1000}
                    className="object-contain opacity-60"
                    priority
                />
            </div> */}

            {/* Video youtube */}
            {/* <div className="relative mx-auto flex max-w-4xl items-center justify-center">
                <div className="relative z-10 w-full max-w-3xl overflow-hidden shadow-lg">
                    <iframe
                        src="https://www.youtube.com/embed/nHRnL7rSe2U?si=nOwAwiIBN9mOIHK-"
                        title="Wedding Video"
                        className="aspect-video w-full rounded-xl"
                        allowFullScreen
                    />
                </div>
            </div> */}

            {/* video local storage */}
            <motion.div
                variants={createDelayVariants('bottom')}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }} 
                className="relative mx-auto flex max-w-4xl items-center justify-center"
            >
                <div 
                    className="relative w-full max-w-3xl overflow-hidden shadow-lg rounded-xl"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <video
                        ref={videoRef}
                        className="w-full rounded-xl"
                        preload="metadata"
                        poster="/video/udinus.jpg"
                        onClick={handleVideoClick}
                    >
                        <source src="/video/video.MOV" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* button play/pause */}
                    {showButton && (
                        <button
                            onClick={togglePlay}
                            className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-opacity duration-300"
                        >
                        {isPlaying ? (
                            <Pause className="h-16 w-16 text-white" />
                        ) : (
                            <Play className="h-16 w-16 text-white" />
                        )}
                        </button>
                    )}
                </div>
            </motion.div>

            <motion.h3
                variants={createDelayVariants('bottom')}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }} 
                className="mt-6 mb-10 text-lime-900 italic"
            >
                The Pre-Wedding
            </motion.h3>
        </section>
    );
};
