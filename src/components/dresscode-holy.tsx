"use client"

import Image from 'next/image';
import { motion } from 'framer-motion';
import { greatVibes } from '@/app/font';
import { createDelayVariants } from '@/utils/animations';

const dresscodeData = [
    {
        title: 'Holy Matrimony',
        theme: 'Pastel Colors (No White)',
        note: 'Semi Formal / Soft Garden',
        icon: '/dresscode/dresscode.png',
        colors: ['#FBBDD0', '#C7D8FE', '#FFDE57', '#D0A7E3'],
    },
    {
        title: 'Wedding Reception',
        theme: 'Spring Colors (No White)',
        note: 'Garden Party Look',
        icon: '/dresscode/dresscode.png',
        colors: ['#FBBDD0', '#C7D8FE', '#FFDE57', '#D0A7E3'],
    },
];

export const EventDresscode = () => {
    return (
        <section id="dresscode" className="relative mb-24 w-full overflow-hidden px-4 py-20 text-center text-lime-900">
            {/* Background Image */}
            <motion.div
                variants={createDelayVariants('bottom')}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }} 
                className="pointer-events-none absolute inset-0 z-0"
            >
                <Image
                    src="/dresscode/bgdress.png"
                    alt="Background"
                    fill
                    className="h-full w-full object-cover object-center"
                    quality={100}
                />
            </motion.div>

            {/* Foreground Content */}
            <div className="relative z-10 mx-auto max-w-5xl">
                <motion.h2
                    variants={createDelayVariants('left')}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }}
                    className={`${greatVibes.className} mb-2 text-5xl font-bold`}
                >
                    Dress Code
                </motion.h2>
                <motion.p
                    variants={createDelayVariants('left')}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }} 
                    className="mb-10 text-base italic sm:text-lg"
                >
                    Wedding Day Attire
                </motion.p>

                <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
                    {dresscodeData.map((item, i) => (
                        <motion.div
                            key={i}
                            variants={createDelayVariants('bottom')}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, amount: 0.3 }}
                            className="w-full max-w-[340px] rounded-2xl bg-white/80 p-6 shadow-lg backdrop-blur-md sm:max-w-sm sm:p-8 md:flex-1"
                        >
                            <motion.h3
                                variants={createDelayVariants('left')}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: false, amount: 0.3 }} 
                                className="mb-2 text-lg font-bold sm:text-xl"
                            >
                                {item.title}
                            </motion.h3>
                            <motion.p
                                variants={createDelayVariants('left')}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: false, amount: 0.3 }} 
                                className="mb-4 text-sm italic sm:text-base"
                            >
                                {item.theme}
                            </motion.p>

                            <motion.div
                                variants={createDelayVariants('left')}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: false, amount: 0.3 }}
                            >
                                <Image
                                    src={item.icon}
                                    alt={`${item.title} Icon`}
                                    width={120}
                                    height={120}
                                    className="mx-auto mb-4"
                                />
                            </motion.div>

                            <div className="mt-4 flex justify-center gap-2">
                                {item.colors.map((color, idx) => (
                                    <motion.div
                                        key={idx}
                                        variants={createDelayVariants('left')}
                                        initial="hidden"
                                        // whileInView="show"
                                        // viewport={{ once: false, amount: 0.3}}
                                        animate="show"
                                        className="h-6 w-6 rounded-full border border-white lg:h-7 lg:w-7"
                                        style={{ backgroundColor: color }}
                                        title={color}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    variants={createDelayVariants('bottom')}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }} 
                    className="mx-auto mt-10 max-w-md text-xs text-lime-900"
                >
                    We kindly ask that guests please attend wearing our wedding colors.
                </motion.p>
            </div>
        </section>
    );
};
