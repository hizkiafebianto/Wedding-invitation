"use client";

import Image from 'next/image';
import { greatVibes } from '@/app/font';
import { FaInstagram } from 'react-icons/fa';
import { motion} from 'framer-motion';
import { container, createDelayVariants, item } from '@/utils/animations';

export const GroomSection = () => {

    const flowers = [
        {
            src: "/png/5.png",
            alt: "Flower 5",
            width: 100,
            height: 100,
            delay: "0s",
            className: "pointer-events-none absolute animate-sway right-32 top-[240px] z-20 lg:right-36",
        },
        {
            src: "/png/12.png",
            alt: "Flower 12",
            width: 230,
            height: 230,
            delay: "0.4s",
            className: "pointer-events-none absolute right-16 top-[300px] z-30 lg:right-24 lg:rotate-0 rotate-15",
        },
        {
            src: "/png/6.png",
            alt: "Flower 6",
            width: 50,
            height: 50,
            delay: "0.8s",
            className: "pointer-events-none absolute animate-sway right-24 top-[250px] z-20 lg:right-28 lg:top-[290px]",
        },
        {
            src: "/png/6.png",
            alt: "Flower 6",
            width: 50,
            height: 50,
            delay: "1.2s",
            className: "pointer-events-none absolute animate-sway right-56 top-[260px] z-20 lg:right-[240px] lg:top-[280px]",
        },
        {
            src: "/png/10.png",
            alt: "Flower 10",
            width: 140,
            height: 140,
            delay: "0s",
            className: "pointer-events-none absolute -right-8 top-0 z-0 lg:-z-10 lg:-right-8 lg:-top-12 -rotate-45",
        },
        {
            src: "/png/10.png",
            alt: "Flower 10",
            width: 140,
            height: 140,
            delay: "0.4s",
            className: "pointer-events-none absolute right-[70px] -top-5 -z-10 lg:z-0 lg:right-8 lg:-top-16 -rotate-45",
        },
        {
            src: "/png/11.png",
            alt: "Flower 11",
            width: 80,
            height: 80,
            delay: "0.8s",
            className: "pointer-events-none absolute -right-4 -top-14 -z-10 lg:right-6 lg:-top-28 rotate-12",
        },
        {
            src: "/png/11.png",
            alt: "Flower 11",
            width: 80,
            height: 80,
            delay: "1.2s",
            className: "pointer-events-none absolute right-4 -top-14 -z-20 lg:-right-4 lg:-top-28",
        },
        {
            src: "/png/7.png",
            alt: "Flower 7",
            width: 200,
            height: 200,
            delay: "0s",
            className: "pointer-events-none absolute -left-6 top-28 z-20 lg:top-28 animate-sway lg:-left-4",
        },
        {
            src: "/png/8.png",
            alt: "Flower 8",
            width: 130,
            height: 130,
            delay: "0.4s",
            className: "pointer-events-none absolute -left-6 top-52 z-10 lg:top-56 animate-sway lg:-left-4",
        },
        {
            src: "/png/9.png",
            alt: "Flower 9",
            width: 110,
            height: 110,
            delay: "0.8s",
            className: "pointer-events-none absolute -left-32 top-0 z-10 lg:top-0 animate-sway lg:-left-28 rotate-35",
        },
        {
            src: "/png/9.png",
            alt: "Flower 9",
            width: 120,
            height: 120,
            delay: "1.2s",
            className: "pointer-events-none absolute -left-6 -top-24 animate-sway z-0 lg:-top-28 lg:-left-3",
        },
        {
            src: "/png/4.png",
            alt: "Flower 4",
            width: 220,
            height: 220,
            delay: "0s",
            className: "absolute top-[75px] -right-10  z-40",
        },
    ];

    
    return (
        <section
            id="groom"
            className="relative w-full overflow-x-hidden pt-16"
            style={{ overflowY: 'visible' }}
        >
            <motion.h2
                variants={createDelayVariants('bottom')}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }} 
                className={`text-5xl ${greatVibes.className} mb-8 text-5xl md:text-6xl text-center font-semibold text-lime-900`}
            >
                The Wedding Of
            </motion.h2>
            <div className="flex items-center text-center px-8">
                <motion.p 
                    className="text-lime-900 text-[14px] mb-2"
                    variants={createDelayVariants('bottom')}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }}
                >
                    Our Journey of love has led us to this beautiful moment, and we would love for you to be a part of it. Please join us as we say I do and celebrate this new chapter together!
                </motion.p>
            </div>
            <div className="relative z-0 flex flex-col mt-24">
                {/* Foto Groom dalam frame lingkaran */}
                <div className="flex justify-end">
                    <div className="relative z-10 mr-4 h-[22rem] w-[22rem] overflow-hidden rounded-full lg:-top-16 lg:h-[28rem] lg:w-[28rem]">
                        <motion.div
                            initial={{ scale: 1.2, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.7, ease: 'easeInOut' }}
                            viewport={{ once: false, amount: 0.5 }}
                            className="h-full w-full"
                        >
                            <Image
                                src="/fiersa.jpg"
                                alt="Groom"
                                fill
                                className="object-covershadow-xl shadow-lime-100"
                            />
                        </motion.div>
                    </div>
                </div>

                {flowers.map((flower, idx) => (
                    <motion.div 
                        key={idx} 
                        variants={createDelayVariants('left')}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.3 }}
                        className={flower.className}
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

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }}
                    className="pb-6"
                >
                    {/* Nama mempelai */}
                    <motion.h2
                        variants={item}
                        className={`${greatVibes.className} mt-32 text-center text-6xl text-lime-900 lg:mt-2`}
                    >
                        Hizkia Febianto
                    </motion.h2>

                    {/* Nama orang tua */}
                    <motion.p
                        variants={item}
                        className="mt-2 gap-1 text-center text-base text-gray-600"
                    >
                        The Son of Mr. Tjhie Kwat Liang <br /> & Mrs. Ang Joe Nio
                    </motion.p>

                    {/* Link Instagram */}
                    <motion.div variants={item} className="mt-4 flex justify-center pb-8">
                        <a
                            href="https://www.instagram.com/hizkia.febianto/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-full bg-lime-900 px-4 py-2 text-base text-white lg:text-base"
                        >
                            <FaInstagram />
                            @hizkia.febianto
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
