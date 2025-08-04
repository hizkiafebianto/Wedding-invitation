"use client";

import { Button } from './ui/button';
import { FaEnvelopeOpenText } from 'react-icons/fa';
import Image from 'next/image';
import { greatVibes } from '@/app/font';
import { useRef, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion, Variants } from 'framer-motion';
// import slugify from 'slugify';

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

const toSlug = (name: string) =>
  name.toLowerCase().replace(/ /g, '-');

const Front = () => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const router = useRouter();
    const searchParams = useSearchParams();

    // const [guestId, setGuestId] = useState<string | null>(null);
    const [guestName, setGuestName] = useState('Tamu Undangan');
    // const [guestNameParam, setGuestNameParams] = useState<string | null>(null);
    const [guestSlug, setGuestSlug] = useState<string | null>(null);

    // const [guestNumber, setGuestNumber] = useState("");
    // const [guestAddress, setGuestAddress] = useState("");

    useEffect(() => {
        const slugParam = searchParams.get("to");
        if (slugParam) {
            setGuestSlug(slugParam);
        }
    }, [searchParams]);

    useEffect(() => {
        if (!guestSlug) return;

        const fetchGuest = async () => {
            try {
                const nameFromSlug = guestSlug.toLowerCase();

                const res = await fetch(`https://uu.seketik.com/api/rsvp`);
                if (!res.ok) throw new Error("Gagal ambil data tamu");

                const data: { name: string }[] = await res.json();

                const guest = data.find(
                    (item) => toSlug(item.name) === nameFromSlug
                );

                if (guest) {
                    setGuestName(guest.name);
                } else {
                    setGuestName(nameFromSlug); // fallback
                }
            } catch (err) {
                console.log("Gagal ambil data tamu", err);
            }
        };

        fetchGuest();
    }, [guestSlug]);



    const handleOpen = () => {
        if (typeof window !== 'undefined') {
            window.localStorage.setItem('shouldPlayAudio', 'true');
        }

         const safeSlug = guestSlug?.toLowerCase() ?? 'tamu-undangan';
    router.push(`/invitation?to=${safeSlug}`);
    };


    return (
        <>
            <audio ref={audioRef} src="/audio/wedding_audio.mp3" loop preload="auto" />

            <div className="relative h-screen flex items-center justify-center overflow-hidden text-center px-2 sm:px-6">
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
                    className="relative z-10 w-full h-full rounded-2xl px-4 py-6 lg:py-4 xl:py-10"
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
                            className="lg:scale-75 xl:scale-[0.85] 2xl:scale-100"
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
                            className="lg:scale-90 xl:scale-100 2xl:scale-110"
                        />
                    </motion.div>
                    ))}
                </motion.div>

                {/* Kartu utama */}
                <motion.div
                    className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] sm:w-[80%] max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl rounded-2xl bg-white/90 px-4 py-6 pt-20 sm:px-8 sm:py-10 sm:pt-28 lg:px-8 lg:py-8 lg:pt-24 xl:px-10 xl:py-10 xl:pt-28 shadow-xl"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                >
                    
                    <motion.div
                        variants={fadeUp}
                        className="absolute top-6 left-1/2 w-28 sm:w-32 md:w-36 lg:w-44 -translate-x-1/2 -translate-y-[60%]"
                    >
                        <Image
                            src="/frame_oval.png"
                            alt="Couple"
                            width={500}
                            height={500}
                            className="h-full w-full object-cover"
                        />
                    </motion.div>

                    <motion.p variants={fadeUp} className="mb-4 text-xs sm:text-sm text-gray-700">
                        We invite you to the wedding of
                    </motion.p>

                    <motion.h1
                        variants={fadeUp}
                        className={`${greatVibes.className} mb-1 text-6xl lg:text-7xl xl:text-8xl text-lime-900`}
                    >
                        Hizkia
                    </motion.h1>

                    <motion.h3
                        variants={fadeUp}
                        className={`${greatVibes.className} mb-1 text-3xl lg:text-4xl text-lime-900`}
                    >
                        &
                    </motion.h3>

                    <motion.h2
                        variants={fadeUp}
                        className={`${greatVibes.className} mb-3 text-6xl lg:text-7xl xl:text-8xl text-lime-900`}
                    >
                        Yushellia
                    </motion.h2>

                    <motion.p variants={fadeUp} className="mb-4 text-xs sm:text-sm text-gray-600">
                        Saturday, January 1, 2025
                    </motion.p>

                    <motion.div variants={fadeUp} className="mb-4">
                        <p className="text-xs lg:text-sm text-black">Dear</p>
                        <p className="text-lg lg:text-xl font-semibold text-black">{guestName}</p>
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

