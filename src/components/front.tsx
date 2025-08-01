"use client";

import { Button } from './ui/button';
import { FaEnvelopeOpenText } from 'react-icons/fa';
import Image from 'next/image';
import { greatVibes } from '@/app/font';
import { useRef, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion, Variants } from 'framer-motion';

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
};

const staggerContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const allFlowers = [
    // kiri
    { src: "/png/9.png", width: 100, height: 100, className: "bottom-56 -left-8 z-10 flex lg:hidden", delay: "0s", sway: true },
    { src: "/png/17.png", width: 150, height: 150, className: "-bottom-10 -left-12 z-20 flex lg:hidden", delay: "0s", sway: false },
    { src: "/png/8.png", width: 150, height: 150, className: "bottom-48 left-8 z-0 flex lg:hidden", delay: "0.5s", sway: false },
    { src: "/png/18.png", width: 150, height: 150, className: "bottom-4 -left-1 z-0 flex lg:hidden", delay: "1s", sway: false },
    { src: "/png/18.png", width: 150, height: 150, className: "-bottom-4 left-10 rotate-36 z-0 flex lg:hidden", delay: "1s", sway: false },
    { src: "/png/15.png", width: 100, height: 100, className: "-bottom-16 left-16 z-0 flex lg:hidden", delay: "0s", sway: true },
    { src: "/png/15.png", width: 100, height: 100, className: "-bottom-20 left-24 z-0 flex lg:hidden", delay: "0.5s", sway: true },
    { src: "/png/15.png", width: 100, height: 100, className: "-bottom-24 left-28 z-0 flex lg:hidden", delay: "1s", sway: true },
    { src: "/png/15.png", width: 100, height: 100, className: "-bottom-28 left-32 z-0 flex lg:hidden", delay: "1s", sway: true },

    { src: "/png/9.png", width: 170, height: 170, className: "bottom-56 -left-8 z-0 hidden lg:flex", delay: "0s", sway: true },
    { src: "/png/17.png", width: 280, height: 280, className: "-bottom-20 -left-24 z-20 hidden lg:flex", delay: "0s", sway: false },
    { src: "/png/8.png", width: 270, height: 270, className: "bottom-48 left-28 z-0 hidden lg:flex", delay: "0.5s", sway: true },
    { src: "/png/18.png", width: 280, height: 280, className: "bottom-4 -left-4  z-0 hidden lg:flex", delay: "1s", sway: false },
    { src: "/png/18.png", width: 280, height: 280, className: "-bottom-8 left-20 rotate-36 z-0 hidden lg:flex", delay: "1s", sway: false },
    { src: "/png/15.png", width: 150, height: 150, className: "-bottom-16 left-[500px] z-0 hidden lg:flex", delay: "0.2s", sway: true },
    { src: "/png/15.png", width: 150, height: 150, className: "-bottom-20 left-[120px] z-0 hidden lg:flex", delay: "0.2s", sway: true },
    { src: "/png/15.png", width: 150, height: 150, className: "-bottom-24 left-[270px] z-0 hidden lg:flex", delay: "0.2s", sway: true },
    { src: "/png/15.png", width: 150, height: 150, className: "-bottom-28 left-[400px] z-0 hidden lg:flex", delay: "0.2s", sway: true },
    { src: "/png/15.png", width: 150, height: 150, className: "-bottom-20 left-[350px] z-0 hidden lg:flex", delay: "0.2s", sway: true },
    { src: "/png/15.png", width: 150, height: 150, className: "-bottom-24 left-[180px] z-0 hidden lg:flex", delay: "0.2s", sway: true },
    { src: "/png/15.png", width: 150, height: 150, className: "-bottom-28 left-[450px] z-0 hidden lg:flex", delay: "0.2s", sway: true },
    { src: "/png/15.png", width: 150, height: 150, className: "-bottom-16 left-[550px] z-0 hidden lg:flex", delay: "0.2s", sway: true },
    { src: "/png/15.png", width: 150, height: 150, className: "-bottom-6 left-[450px] z-0 hidden lg:flex", delay: "0.2s", sway: true },
    { src: "/png/15.png", width: 150, height: 150, className: "-bottom-6 left-[320px] z-0 hidden lg:flex", delay: "0.2s", sway: true },
    { src: "/png/15.png", width: 150, height: 150, className: "-bottom-16 left-[220px] z-0 hidden lg:flex", delay: "0.2s", sway: true },

    // kanan
    { src: "/png2/9.png", width: 100, height: 100, className: "bottom-56 -right-8 z-0 flex lg:hidden", delay: "0s", sway: true },
    { src: "/png2/17.png", width: 150, height: 150, className: "-bottom-10 -right-12 z-20 flex lg:hidden", delay: "0s", sway: false },
    { src: "/png2/8.png", width: 150, height: 150, className: "bottom-48 right-8 z-0 flex lg:hidden", delay: "0.5s", sway: true },
    { src: "/png2/18.png", width: 150, height: 150, className: "bottom-4 -right-1  z-0 flex lg:hidden", delay: "1s", sway: false },
    { src: "/png2/18.png", width: 150, height: 150, className: "-bottom-4 right-10 -rotate-36 z-0 flex lg:hidden", delay: "1s", sway: false },
    { src: "/png/15.png", width: 100, height: 100, className: "-bottom-16 right-16 z-0 flex lg:hidden", delay: "0.2s", sway: true },
    { src: "/png/15.png", width: 100, height: 100, className: "-bottom-20 right-24 z-0 flex lg:hidden", delay: "0.2s", sway: true },
    { src: "/png/15.png", width: 100, height: 100, className: "-bottom-24 right-28 z-0 flex lg:hidden", delay: "0.2s", sway: true },
    { src: "/png/15.png", width: 100, height: 100, className: "-bottom-28 right-32 z-0 flex lg:hidden", delay: "0.2s", sway: true },

    { src: "/png2/9.png", width: 170, height: 170, className: "bottom-56 -right-8 z-0 hidden lg:flex", delay: "0s", sway: true },
    { src: "/png2/17.png", width: 280, height: 280, className: "-bottom-20 -right-24 z-20 hidden lg:flex", delay: "0s", sway: false },
    { src: "/png2/8.png", width: 270, height: 270, className: "bottom-48 right-28 z-0 hidden lg:flex", delay: "0.5s", sway: true },
    { src: "/png2/18.png", width: 280, height: 280, className: "bottom-4 -right-4  z-0 hidden lg:flex", delay: "1s", sway: false },
    { src: "/png2/18.png", width: 280, height: 280, className: "-bottom-8 right-20 -rotate-36 z-0 hidden lg:flex", delay: "1s", sway: false },
    { src: "/png/15.png", width: 150, height: 150, className: "-bottom-16 right-[500px] z-0 hidden lg:flex", delay: "0.2s", sway: true },
    { src: "/png/15.png", width: 150, height: 150, className: "-bottom-20 right-[120px] z-10 hidden lg:flex", delay: "0.2s", sway: true },
    { src: "/png/15.png", width: 150, height: 150, className: "-bottom-24 right-[270px] z-10 hidden lg:flex", delay: "0.2s", sway: true },
    { src: "/png/15.png", width: 150, height: 150, className: "-bottom-28 right-[400px] z-10 hidden lg:flex", delay: "0.2s", sway: true },
    { src: "/png/15.png", width: 150, height: 150, className: "-bottom-20 right-[350px] z-10 hidden lg:flex", delay: "0.2s", sway: true },
    { src: "/png/15.png", width: 150, height: 150, className: "-bottom-24 right-[180px] z-10 hidden lg:flex", delay: "0.2s", sway: true },
    { src: "/png/15.png", width: 150, height: 150, className: "-bottom-28 right-[450px] z-0 hidden lg:flex", delay: "0.2s", sway: true },
    { src: "/png/15.png", width: 150, height: 150, className: "-bottom-16 right-[550px] z-0 hidden lg:flex", delay: "0.2s", sway: true },
    { src: "/png/15.png", width: 150, height: 150, className: "-bottom-6 right-[450px] z-0 hidden lg:flex", delay: "0.2s", sway: true },
    { src: "/png/15.png", width: 150, height: 150, className: "-bottom-6 right-[320px] z-10 hidden lg:flex", delay: "0.2s", sway: true },
    { src: "/png/15.png", width: 150, height: 150, className: "-bottom-16 right-[220px] z-10 hidden lg:flex", delay: "0.2s", sway: true },
    
];

const Front = () => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const router = useRouter();
    const searchParams = useSearchParams();

    const [guestId, setGuestId] = useState<string | null>(null);
    const [guestName, setGuestName] = useState('Tamu Undangan');
    // const [guestNumber, setGuestNumber] = useState("");
    // const [guestAddress, setGuestAddress] = useState("");

    useEffect(() => {
        const id = searchParams.get('to');
        if (id) {
            setGuestId(id);
        }
    }, [searchParams]);

    useEffect(() => {
        if (!guestId) return;

        const fetchGuest = async () => {
            try {
                const res = await fetch(`https://uu.seketik.com/api/rsvp/${guestId}`);
                if (!res.ok) {
                    throw new Error('Gagal');
                }

                const data = await res.json();
                setGuestName(data.name || 'Tamu Undangan');
                // setGuestNumber(data.phone || "");
            } catch (err) {
                console.log('Gagal ambil data tamu', err);
            }
        };
        fetchGuest();
    }, [guestId]);

    const handleOpen = () => {
        if (typeof window !== 'undefined') {
            window.localStorage.setItem('shouldPlayAudio', 'true');
        }

        const url = guestId ? `/invitation?to=${guestId}` : '/invitation';
        router.push(url);
    };


    return (
        <>
            <audio ref={audioRef} src="/audio/audio.mp3" loop preload="auto" />

            <div className="relative flex min-h-screen items-center justify-center overflow-hidden text-center">
                {/* Background utama */}
                <div className="absolute inset-0 -z-10">
                    <Image
                        src="/png2/123.jpg"
                        alt="Main Background"
                        fill
                        className="object-cover object-center"
                    />
                </div>

                <div className="absolute inset-0 z-0 bg-white/30 backdrop-blur-sm" />

                <motion.div
                    className="relative z-10 mx-auto w-full h-screen rounded-2xl px-6 py-10 shadow-xl"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                >
                    {/* Bunga kiri */}
                {allFlowers
                    .filter((_, i) => i <= 5)
                    .map((flower, idx) => (
                    <motion.div
                        key={`left-${idx}`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1.5, delay: parseFloat(flower.delay) }}
                        className={`absolute ${flower.className} ${flower.sway ? 'animate-sway' : ''}`}
                        style={{ animationDelay: flower.delay }}
                    >
                        <Image
                            src={flower.src}
                            alt={`Flower Left ${idx}`}
                            width={flower.width}
                            height={flower.height}
                            className="" 
                        />
                    </motion.div>
                    ))}

                {/* Bunga kanan */}
                {allFlowers
                    .filter((_, i) => i >= 6)
                    .map((flower, idx) => (
                    <motion.div
                        key={`right-${idx}`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1.5, delay: parseFloat(flower.delay) }}
                        className={`absolute ${flower.className} ${flower.sway ? 'animate-sway' : ''}`}
                        style={{ animationDelay: flower.delay }}
                    >
                        <Image
                            src={flower.src}
                            alt={`Flower Right ${idx}`}
                            width={flower.width}
                            height={flower.height}
                        />
                    </motion.div>
                    ))}
                </motion.div>

                {/* Kartu utama */}
                <motion.div
                    className="absolute z-10 mt-40 w-full max-w-md rounded-2xl bg-white/90 px-6 py-10 pt-32 shadow-xl sm:max-w-lg sm:px-10"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                >
                    
                    <motion.div
                        variants={fadeUp}
                        className="absolute -top-56 left-1/2 w-[50%] -translate-x-1/2"
                    >
                        <Image
                            src="/frame_oval.png"
                            alt="Couple"
                            width={500}
                            height={500}
                            className="h-full w-full object-cover"
                        />
                    </motion.div>

                    <motion.p variants={fadeUp} className="mb-4 text-sm text-gray-700 lg:mb-10">
                        We invite you to the wedding of
                    </motion.p>

                    <motion.h1
                        variants={fadeUp}
                        className={`${greatVibes.className} mb-2 text-6xl text-lime-900 lg:text-7xl`}
                    >
                        Hizkia
                    </motion.h1>

                    <motion.h3
                        variants={fadeUp}
                        className={`${greatVibes.className} mb-2 text-4xl text-lime-900`}
                    >
                        &
                    </motion.h3>

                    <motion.h2
                        variants={fadeUp}
                        className={`${greatVibes.className} mb-4 text-6xl text-lime-900 lg:text-7xl`}
                    >
                        Yushellia
                    </motion.h2>

                    <motion.p variants={fadeUp} className="mb-6 text-sm text-gray-600 sm:text-base">
                        Saturday, January 1, 2025
                    </motion.p>

                    <motion.div variants={fadeUp} className="mb-6">
                        <p className="text-sm text-black">Dear</p>
                        <p className="text-lg font-semibold text-black">{guestName}</p>
                    </motion.div>

                    <motion.div variants={fadeUp}>
                        <Button
                            onClick={handleOpen}
                            className="bg-lime-900 text-white hover:bg-lime-700"
                        >
                            <FaEnvelopeOpenText className="mr-2" />
                            Open the Invitation
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
};

export default Front;
