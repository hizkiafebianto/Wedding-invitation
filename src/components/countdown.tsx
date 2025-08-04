"use client"

import { greatVibes } from '@/app/font';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { container, createDelayVariants, item } from '@/utils/animations';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const eventDate = new Date('2025-09-27T08:00:00');

const allFlowers = [
    // kiri
    { src: "/png/7.png", width: 220, height: 220, className: "-bottom-28 -left-24 z-10 w-full", delay: "0s", sway: false },
    { src: "/png/8.png", width: 250, height: 250, className: "-bottom-16 -left-32 z-0", delay: "0.5s", sway: false },
    { src: "/png/6.png", width: 130, height: 130, className: "-bottom-4 -left-6 z-0", delay: "1s", sway: false },
    { src: "/png/14.png", width: 130, height: 130, className: "-bottom-6 -left-12 z-0", delay: "0s", sway: true },
    { src: "/png/14.png", width: 130, height: 130, className: "-bottom-20 left-0 z-0", delay: "0.5s", sway: true },
    { src: "/png/14.png", width: 130, height: 130, className: "-bottom-28 left-10 z-0", delay: "1s", sway: true },

    // kanan
    { src: "/png2/9.png", width: 220, height: 220, className: "-bottom-28 -right-24 z-0", delay: "0s", sway: false },
    { src: "/png2/8.png", width: 250, height: 250, className: "-bottom-16 -right-32 z-0", delay: "0.5s", sway: false },
    { src: "/png2/6.png", width: 130, height: 130, className: "-bottom-4 -right-6 z-0", delay: "1s", sway: false },
    { src: "/png/15.png", width: 130, height: 130, className: "-bottom-6 -right-12 z-0", delay: "0.2s", sway: true },
    { src: "/png/15.png", width: 130, height: 130, className: "-bottom-20 right-0 z-0", delay: "0.8s", sway: true },
    { src: "/png/15.png", width: 130, height: 130, className: "-bottom-28 right-10 z-0", delay: "1.2s", sway: true },
];

export const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            const diff = eventDate.getTime() - now.getTime();

            if (diff <= 0) {
                clearInterval(timer);
                return;
            }

            setTimeLeft({
                days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((diff / 1000 / 60) % 60),
                seconds: Math.floor((diff / 1000) % 60),
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    

    const formatDateForGoogle = (date: Date) => {
        const pad = (n: number) => n.toString().padStart(2, '0');
        const yyyy = date.getUTCFullYear();
        const mm = pad(date.getUTCMonth() + 1);
        const dd = pad(date.getUTCDate());
        const hh = pad(date.getUTCHours());
        const mi = pad(date.getUTCMinutes());
        return `${yyyy}${mm}${dd}T${hh}${mi}00Z`;
    };

    const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=Wedding+Faizz+%26+Pasangan&dates=${formatDateForGoogle(eventDate)}/${formatDateForGoogle(new Date(eventDate.getTime() + 3 * 60 * 60 * 1000))}&details=Join+us+on+our+special+day!&location=Your+Wedding+Location&sf=true&output=xml`;

    return (
        <section id="countdown" className="relative w-full pt-16 overflow-hidden">
            <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="pt-10 text-center"
            >
                <motion.h2
                    variants={createDelayVariants('bottom')}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }} 
                    className={`${greatVibes.className} text-5xl md:text-6xl text-lime-900 mb-12`}
                >
                    Save The Date
                </motion.h2>
                
            </motion.div>

        <motion.div 
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="relative w-full aspect-[3/4] max-w-3xl mx-auto"
        >
            <Image
                src="/png2/13.png"
                alt="Arch Background"
                fill
                className="object-cover"
            />
        </motion.div>

        {allFlowers.map((flower, idx) => (
            <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.5, delay: parseFloat(flower.delay) }}
                className={`absolute ${flower.className} ${flower.sway ? 'animate-sway' : ''}`}
                style={{ animationDelay: flower.delay }}
            >
                <Image
                    src={flower.src}
                    alt={`Flower ${idx}`}
                    width={flower.width}
                    height={flower.height}
                    
                />
            </motion.div>
        ))}

        <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/12">
            <div className="grid grid-cols-2 gap-x-10 gap-y-8 text-lime-900">
            {[
                { label: 'Days', value: timeLeft.days, x: -100, y: -100 },
                { label: 'Hours', value: timeLeft.hours, x: 100, y: -100 },
                { label: 'Minutes', value: timeLeft.minutes, x: -100, y: 100 },
                { label: 'Seconds', value: timeLeft.seconds, x: 100, y: 100 },
            ].map(({ label, value, x, y }) => (
                <motion.div
                    key={label}
                    initial={{ opacity: 0, x, y }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 2 }}
                    className="flex flex-col items-center"
                >
                    <div className="h-16 w-16 md:h-24 md:w-24 rounded-full bg-white/80 shadow-md flex items-center justify-center">
                        <span className={`${greatVibes.className} text-3xl md:text-5xl`}>
                            {value.toString().padStart(2, '0')}
                        </span>
                    </div>

                    <span className="mt-2 text-xs tracking-widest uppercase">{label}</span>
                </motion.div>
            ))}
            </div>

            <motion.div
                variants={createDelayVariants('bottom')}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
            >
                <Button asChild className="mt-8 bg-white md:p-6 md:text-lg hover:bg-lime-800 hover:text-white text-lime-900">
                    <a href={calendarUrl} target="_blank" rel="noopener noreferrer">
                        Add to Google Calendar
                    </a>
                </Button>
            </motion.div>
        </div>

        
        </section>
    );
};
