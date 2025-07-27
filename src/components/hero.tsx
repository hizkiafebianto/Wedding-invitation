'use client';

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
            <motion.div
                className="relative z-10 flex w-full flex-col items-center overflow-hidden pt-40 pb-20"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
            >
                <div className="top-0 absolute left-0 w-full">
                    <Image 
                        src="/svg/1.svg"
                        alt="Bunga Atas"
                        width={500}
                        height={500}
                    />
                </div>
                {/* <motion.div
                    variants={createDelayVariants('right')}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }}
                    className="absolute -top-3 -left-20"
                >
                    <Image
                        src="/bunga/wisteria_flower _kiri.png"
                        alt="Bunga Kiri"
                        width={200}
                        height={200}
                        className="animate-sway h-auto w-48 lg:w-60"
                        style={{ animationDelay: getRandomDelay() }}
                    />
                </motion.div> */}

                {/* <motion.div
                    variants={createDelayVariants('left')}
                    // variants={fadeIn}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }}
                    className="absolute -top-3 -right-20"
                >
                    <Image
                        src="/bunga/wisteria_flower.png"
                        alt="Bunga Kanan"
                        width={200}
                        height={200}
                        className="animate-sway z-10 h-auto w-48 lg:w-60"
                        style={{ animationDelay: getRandomDelay() }}
                    />
                </motion.div> */}

                {/* <motion.div
                    variants={createDelayVariants('left')}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }}
                    className="absolute top-10 -right-14"
                >
                    <Image
                        src="/bunga/wisteria_hero_kanan.png"
                        alt="Bunga Kanan"
                        width={300}
                        height={300}
                        className="animate-sway w-48 lg:w-60"
                        style={{ animationDelay: getRandomDelay() }}
                    />
                </motion.div> */}

                {/* <motion.div
                    variants={createDelayVariants('right')}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }}
                    className="absolute top-10 -left-16"
                >
                    <Image
                        src="/bunga/wisteria_hero_kiri.png"
                        alt="Bunga Kiri"
                        width={200}
                        height={200}
                        className="animate-sway h-auto w-48 lg:w-60"
                        style={{ animationDelay: getRandomDelay() }}
                    />
                </motion.div> */}

                <motion.div
                    variants={createDelayVariants('right')}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }}
                    className="absolute -right-16"
                >
                    <Image
                        src="/svg/2.svg"
                        alt="Bunga Kanan"
                        width={200}
                        height={200}
                        className="animate-sway h-auto w-48 lg:w-60"
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
                        src="/image/logo.png"
                        alt="Logo"
                        width={500}
                        height={500}
                        className="z-20 -mt-14 w-9/12"
                    />
                </motion.div>
            </motion.div>

            {/* Foto Couple & Nama */}
            <motion.div className="relative z-30 mx-auto -mt-24 mb-8 flex aspect-[3/4] w-[90%] max-w-[480px] flex-col items-center justify-end overflow-hidden">
                <motion.div
                    variants={createDelayVariants('bottom')}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }}
                    className="relative z-30 mx-auto -mt-24 mb-8 flex aspect-[3/4] w-[90%] max-w-[480px] flex-col items-center justify-end overflow-hidden"
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
            </motion.div>
        </section>
    );
};
