'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { greatVibes } from '@/app/font';
import Link from 'next/link';

export const EventWedding = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/event-details/wedding.jpg"
                    alt="Holy Matrimony Background"
                    layout="fill"
                    objectFit="cover"
                    priority
                />
            </div>

            {/* Blur Overlay */}
            <div className="absolute inset-0 -z-10 bg-black/40 backdrop-blur-sm" />

            {/* Foreground Content */}
            <div className="relative z-10 flex h-full items-center justify-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-xl space-y-3 text-center text-white"
                >
                    <div className="flex justify-center">
                        <Image
                            src="/event-details/dara.png"
                            alt="Cincin"
                            width={150}
                            height={150}
                            className="mb-4"
                        />
                    </div>

                    <h2
                        className={`${greatVibes.className} text-6xl font-bold tracking-widest drop-shadow-md`}
                    >
                        Wedding Reception
                    </h2>

                    <p className="text-lg">Saturday, 27 September 2025</p>
                    <p className="text-lg">18:00 - 20.00</p>
                    <p className="text-lg">Cirebon Convention Hall</p>
                    <p className="mx-auto max-w-sm text-base">
                        Jl. Bahagia No.153, Panjunan, Kec. Lemahwungkuk, Kota Cirebon, Jawa Barat
                        45112
                    </p>

                    <Link
                        href="https://maps.app.goo.gl/P9y7khFcFkHdFKZWA"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button
                            variant="secondary"
                            className="mt-2 bg-white/20 text-white hover:bg-white/30"
                        >
                            Lihat Lokasi
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};
