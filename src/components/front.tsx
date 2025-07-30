'use client';

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
                        src="/background/wisteria1.jpg"
                        alt="Main Background"
                        fill
                        className="object-cover object-center"
                    />
                </div>

                {/* Kartu utama */}
                <motion.div
                    className="relative z-10 mt-40 w-full max-w-md rounded-2xl bg-white/90 px-6 py-10 pt-32 shadow-xl sm:max-w-lg sm:px-10"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                >
                    {/* Foto pasangan (keluar dari atas card) */}
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
                        {/* <p className="text-sm text-black">{guestNumber}</p> */}
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
