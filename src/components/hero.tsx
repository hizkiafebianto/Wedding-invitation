"use client";

import Image from 'next/image';
import { greatVibes } from '@/app/font';
import { Button } from './ui/button';
import { useCallback } from 'react';
import { motion } from 'framer-motion';
import { container, createDelayVariants, fadeIn, getRandomDelay, item } from '@/utils/animations';

export const Hero = () => {
    const handleScrollToRSVP = useCallback(() => {
        if (typeof window !== 'undefined') {
            const target = document.getElementById('rsvp');
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, []);

    return (
        <section id="hero" className="flex flex-col items-center text-center">
            {/* Logo & bunga atas */}
            <div
                className="relative z-10 flex w-full flex-col items-center overflow-hidden pt-40 pb-20"
                
            >
                <motion.div 
                    variants={createDelayVariants('bottom')}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }}
                    className="top-0 absolute left-0"
                >
                    <Image 
                        src="/png/1.png"
                        alt="Bunga Atas"
                        width={500}
                        height={500}
                        className="w-full"
                    />
                </motion.div>
                
                    <motion.div
                        variants={createDelayVariants('left')}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.3 }}
                        className="absolute top-36 -right-24"
                    >
                        <Image
                            src="/png/2.png"
                            alt="Bunga kiri"
                            width={170}
                            height={170}
                            className="h-auto -rotate-20 lg:w-48 animate-sway"
                            style={{ animationDelay: getRandomDelay() }}
                        />
                    </motion.div>

                    <motion.div
                        variants={createDelayVariants('right')}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.3 }}
                        className="absolute top-36 -left-24"
                    >
                        <Image
                            src="/png/3.png"
                            alt="Bunga kiri"
                            width={170}
                            height={170}
                            className="h-auto rotate-20 lg:w-48 animate-sway"
                            style={{ animationDelay: getRandomDelay() }}
                        />
                    </motion.div>
                
                
                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }}
                    className="flex justify-center"
                >
                    <Image
                        src="/png/logo1.png"
                        alt="Logo"
                        width={600}
                        height={600}
                        className="z-20 -mt-14 w-9/12"
                    />
                </motion.div>
            </div>

            {/* Foto Couple & Nama */}
            <div className="relative z-30 mx-auto -mt-16 mb-8 flex aspect-[3/4] w-full max-w-[480px] flex-col items-center justify-end overflow-hidden">
                <motion.div
                    variants={createDelayVariants('bottom')}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }}
                    className="relative z-30 mx-auto -mt-32 mb-8 flex aspect-[3/4] w-full max-w-[480px] flex-col items-center justify-end overflow-hidden"
                >
                    <Image
                        src="/image/couple-foto.png"
                        alt="Foto Couple"
                        fill
                        className="object-contain"
                        priority
                    />

                    <div className="pointer-events-none absolute bottom-0 z-40 flex w-full justify-center">
                        <Image
                            src="/background/cahaya.png"
                            alt="Cahaya"
                            width={1200}
                            height={200}
                            className="h-auto w-[170%] max-w-none translate-y-12"
                            priority
                        />
                    </div>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }}
                    className="absolute bottom-0 z-50 w-full -translate-y-6 px-4 text-center"
                >
                    <motion.p variants={item} className="mb-4 text-sm font-semibold text-lime-900">
                        Wedding Invitation
                    </motion.p>
                    <motion.h2
                        variants={item}
                        className={`${greatVibes.className} text-6xl font-semibold text-lime-900 drop-shadow-md`}
                    >
                        Hizkia &
                    </motion.h2>
                    <motion.h2
                        variants={item}
                        className={`${greatVibes.className} text-6xl font-semibold text-lime-900 drop-shadow-2xl`}
                    >
                        Yushellia
                    </motion.h2>
                    <motion.p
                        variants={item}
                        className="mt-4 text-sm font-medium text-lime-900 sm:text-base"
                    >
                        #YUSHELbeHIZ
                    </motion.p>

                    <motion.div variants={item} className="mt-4 flex items-center justify-center">
                        <Button
                            onClick={handleScrollToRSVP}
                            className="w-1/3 rounded-full bg-lime-900 text-white"
                            variant="pink"
                        >
                            RSVP
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
