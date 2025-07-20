'use client';

import { greatVibes } from '@/app/font';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const flowers = [1, 2, 3, 4, 5];

export const Countdown = () => {
    const targetDate = new Date('2025-09-27T08:00:00');
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            const diff = targetDate.getTime() - now.getTime();

            if (diff <= 0) {
                clearInterval(timer);
                return;
            }

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / 1000 / 60) % 60);
            const seconds = Math.floor((diff / 1000) % 60);

            setTimeLeft({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section id="countdown" className="relative mt-16 mb-8 w-full overflow-hidden px-4 py-28 text-center lg:mt-48">
            <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
                <Image
                    src="/countdown/countdown.png"
                    alt="Countdown Background"
                    width={800}
                    height={800}
                    className="h-full max-w-full"
                />
            </div>

            <div className="pointer-events-none absolute inset-0 -z-10">
                {/* Pohon kiri */}
                <Image
                    src="/countdown/count_pohon.png"
                    alt="Tree Left"
                    width={300}
                    height={1000}
                    className="absolute bottom-0 -left-28 w-52 object-contain md:w-52 lg:w-64"
                />

                {/* Pohon kanan */}
                <Image
                    src="/countdown/count_pohon.png"
                    alt="Tree Right"
                    width={300}
                    height={1000}
                    className="absolute -right-24 bottom-0 w-52 object-contain md:w-52 lg:w-64"
                />
            </div>

            <div className="pointer-events-none absolute bottom-0 left-0 z-0 flex w-full items-end justify-center">
                {flowers.map((_, idx) => (
                    <div
                        key={idx}
                        className={` ${idx !== 0 ? '-ml-10' : ''} ${idx % 2 === 0 ? 'z-20' : 'z-10'} `}
                    >
                        {/* untuk motion */}
                        <Image
                            src="/countdown/countdown1.png"
                            alt={`Bunga ${idx + 1}`}
                            width={300}
                            height={200}
                            className="h-auto w-full"
                        />
                    </div>
                ))}
            </div>

            <div className="relative z-10">
                <h2
                    className={`text-5xl text-lime-900 ${greatVibes.className} mt-10 mb-6 lg:mt-12`}
                >
                    Save The Date
                </h2>
            </div>

            <div className="mx-auto grid max-w-[280px] grid-cols-2 justify-center gap-x-2 gap-y-6 text-lime-900">
                {[
                    { label: 'days', value: timeLeft.days },
                    { label: 'hours', value: timeLeft.hours },
                    { label: 'minutes', value: timeLeft.minutes },
                    { label: 'seconds', value: timeLeft.seconds },
                ].map(({ label, value }) => (
                    <div key={label} className="flex items-center not-only:flex-col">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full shadow">
                            <span className={`${greatVibes.className} text-5xl font-bold`}>
                                {value.toString().padStart(2, '0')}
                            </span>
                        </div>
                        <span className="-mt-4 mb-8 text-xs font-medium md:text-sm">{label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};
