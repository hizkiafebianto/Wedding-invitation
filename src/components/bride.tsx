'use client';

import Image from 'next/image';
import { greatVibes } from '@/app/font';
import { FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { container, item } from '@/utils/animations';

export const BrideSection = () => {
    return (
        <section id="bride" className="relative w-full overflow-x-hidden pt-56 pb-24">
            <div className="relative z-0 flex flex-col">
                {/* Foto bride dalam frame lingkaran */}
                <div className="flex justify-start">
                    <div className="relative z-10 ml-4 h-[22rem] w-[22rem] overflow-hidden rounded-full lg:-top-16 lg:h-[28rem] lg:w-[28rem]">
                        <motion.div
                            initial={{ scale: 1.2, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.7, ease: 'easeInOut' }}
                            viewport={{ once: false, amount: 0.5 }}
                            className="h-full w-full"
                        >
                            <Image
                                src="/aqia.png"
                                alt="Groom"
                                fill
                                className="object-covershadow-xl shadow-lime-100"
                            />
                        </motion.div>
                    </div>
                </div>

                <div className="pointer-events-none absolute top-14 -left-8 z-30">
                    <Image
                        src="/png2/4.png"
                        alt="Bunga Kiri"
                        width={220}
                        height={220}
                    />
                </div>

                <div className="pointer-events-none absolute top-[280px] left-24 z-20">
                    <Image
                        src="/png2/12.png"
                        alt="Bunga Kiri"
                        width={230}
                        height={230}
                        className="-rotate-15"
                    />
                </div>

                <div className="pointer-events-none absolute -left-2 -top-6 z-0">
                    <Image
                        src="/png2/10.png"
                        alt="Bunga Kiri"
                        width={140}
                        height={140}
                        className="rotate-45"
                    />
                </div>

                <div className="pointer-events-none absolute left-24 -top-8 -z-10">
                    <Image
                        src="/png2/10.png"
                        alt="Bunga Kiri"
                        width={140}
                        height={140}
                        className="rotate-45"
                    />
                </div>

                <div className="pointer-events-none absolute left-0 -top-20 -z-10">
                    <Image
                        src="/png2/11.png"
                        alt="Bunga Kiri"
                        width={80}
                        height={80}
                        className="-rotate-12"
                    />
                </div>

                <div className="pointer-events-none absolute left-12 -top-20 -z-20">
                    <Image
                        src="/png2/11.png"
                        alt="Bunga Kiri"
                        width={80}
                        height={80}
                        className="-rotate-12"
                    />
                </div>

                <div className="pointer-events-none absolute left-24 top-56 z-10">
                    <Image
                        src="/png2/6.png"
                        alt="Bunga Kiri"
                        width={50}
                        height={50}
                    />
                </div>

                <div className="pointer-events-none absolute right-52 top-64 z-10">
                    <Image
                        src="/png2/6.png"
                        alt="Bunga Kiri"
                        width={50}
                        height={50}
                    />
                </div>

                <div className="pointer-events-none absolute left-32 top-56 z-10">
                    <Image
                        src="/png2/5.png"
                        alt="Bunga Kiri"
                        width={100}
                        height={100}
                    />
                </div>

                <div className="pointer-events-none absolute -right-6 top-40 z-20">
                    <Image
                        src="/png2/8.png"
                        alt="Bunga Kiri"
                        width={130}
                        height={130}
                    />
                </div>

                <div className="pointer-events-none absolute -right-8 top-20 z-20">
                    <Image
                        src="/png2/7.png"
                        alt="Bunga Kiri"
                        width={200}
                        height={200}
                        
                    />
                </div>

                <div className="pointer-events-none absolute -right-12 -top-2 z-20">
                    <Image
                        src="/png2/9.png"
                        alt="Bunga Kiri"
                        width={110}
                        height={110}
                        className="-rotate-35"
                    />
                </div>

                <div className="pointer-events-none absolute -right-8 -top-28 z-10">
                    <Image
                        src="/png2/9.png"
                        alt="Bunga Kiri"
                        width={120}
                        height={120}
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
                        className={`${greatVibes.className} mt-16 text-center text-6xl text-lime-900 lg:mt-10`}
                    >
                        Yushellia Tania
                    </motion.h2>

                    {/* Nama orang tua */}
                    <motion.p variants={item} className="mt-2 text-center text-base text-gray-600">
                        The Daughter of Mr. Yu Lim Kang <br /> & Mrs. Tan Hui Suan
                    </motion.p>

                    {/* Link Instagram */}
                    <motion.div variants={item} className="mt-4 flex justify-center">
                        <a
                            href="https://www.instagram.com/yushelliatania/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-full bg-lime-900 px-4 py-2 text-base text-white lg:text-base"
                        >
                            <FaInstagram />
                            @yushelliatania
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
