'use client';

import Image from 'next/image';
import { greatVibes } from '@/app/font';
import { FaInstagram } from 'react-icons/fa';
import { motion} from 'framer-motion';
import { container, createDelayVariants, getRandomDelay, item } from '@/utils/animations';

export const GroomSection = () => {
    

    return (
        <section
            id="groom"
            className="relative w-full overflow-x-hidden pt-16"
            style={{ overflowY: 'visible' }}
        >
            <h2 className={`text-5xl ${greatVibes.className} mb-8 text-center font-semibold text-lime-900`}>
                The Wedding Of
            </h2>
            <div className="flex items-center text-center px-8">
                <p className="text-lime-900 text-[14px] mb-2">
                    Our Journey of love has led us to this beautiful moment, and we would love for you to be a part of it. Please join us as we say I do and celebrate this new chapter together!
                </p>
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

                <div className="pointer-events-none absolute right-32 top-[240px] z-20 lg:left-28">
                    <Image
                        src="/png/5.png"
                        alt="Groom FLower"
                        width={100}
                        height={100}
                    />
                </div>

                <div className="pointer-events-none absolute right-16 top-[300px] z-30 lg:left-28">
                    <Image
                        src="/png/12.png"
                        alt="Groom FLower"
                        width={230}
                        height={230}
                        className="rotate-15"
                    />
                </div>

                <div className="pointer-events-none absolute right-24 top-[250px] z-20 lg:left-28">
                    <Image
                        src="/png/6.png"
                        alt="Groom FLower"
                        width={50}
                        height={50}
                    />
                </div>
                
                <div className="pointer-events-none absolute right-56 top-[260px] z-20 lg:left-28">
                    <Image
                        src="/png/6.png"
                        alt="Groom FLower"
                        width={50}
                        height={50}
                    />
                </div>

                <div className="pointer-events-none absolute -right-8 top-0 z-0 lg:left-28">
                    <Image
                        src="/png/10.png"
                        alt="Groom FLower"
                        width={140}
                        height={140}
                        className="-rotate-45"
                    />
                </div>

                <div className="pointer-events-none absolute right-[70px] -top-5 -z-10 lg:left-28">
                    <Image
                        src="/png/10.png"
                        alt="Groom FLower"
                        width={140}
                        height={140}
                        className="-rotate-45"
                    />
                </div>

                <div className="pointer-events-none absolute -right-4 -top-14 -z-10 lg:left-28">
                    <Image
                        src="/png/11.png"
                        alt="Groom FLower"
                        width={80}
                        height={80}
                        className="rotate-12"
                    />
                </div>

                <div className="pointer-events-none absolute right-4 -top-14 -z-20 lg:left-28">
                    <Image
                        src="/png/11.png"
                        alt="Groom FLower"
                        width={80}
                        height={80}
                    />
                </div>

                <div className="pointer-events-none absolute -left-6 top-24 z-20 lg:-top-32 lg:-left-40">
                    <Image 
                        src="/png/7.png" 
                        alt="Groom Flower" 
                        width={200} 
                        height={200} 
                    />
                </div>

                <div className="pointer-events-none absolute -left-6 top-52 z-10 lg:-top-32 lg:-left-40">
                    <Image 
                        src="/png/8.png" 
                        alt="Groom Flower" 
                        width={130} 
                        height={130} 
                    />
                </div>

                <div className="pointer-events-none absolute -left-10 top-4 z-10 lg:-top-32 lg:-left-40">
                    <Image 
                        src="/png/9.png" 
                        alt="Groom Flower" 
                        width={110} 
                        height={110}
                        className="rotate-35" 
                    />
                </div>

                <div className="pointer-events-none absolute -left-6 -top-24 z-0 lg:-top-32 lg:-left-40">
                    <Image 
                        src="/png/9.png" 
                        alt="Groom Flower" 
                        width={120} 
                        height={120}
                    />
                </div>

                <div className="pointer-events-none w-full absolute z-40 translate-x-64 top-[75px] -right-[58px] lg:left-36">
                    <Image
                        src="/png/4.png"
                        alt="Bunga Groom"
                        width={220}
                        height={220}
                        className="inline-block"
                    />
                </div>

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
