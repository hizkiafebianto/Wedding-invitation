'use client';

import Image from 'next/image';
import { greatVibes } from '@/app/font';
import { FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { container, item } from '@/utils/animations';

export const BrideSection = () => {
    return (
        <section className="relative w-full overflow-x-hidden pt-56 pb-24">
            <div className="relative z-0 flex flex-col">
                {/* Foto bride dalam frame lingkaran */}
                <div className="flex justify-start">
                    <div className="relative z-10 h-96 w-96 overflow-hidden rounded-full lg:-top-16 lg:h-[28rem] lg:w-[28rem]">
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

                <div className="pointer-events-none absolute top-[230px] -left-28 z-20">
                    <Image
                        src="/bunga/groom_flower0.png"
                        alt="Bunga Kiri"
                        width={350}
                        height={350}
                    />
                </div>
                <div className="pointer-events-none absolute top-[230px] right-0 z-20 overflow-hidden lg:left-44">
                    <Image
                        src="/bunga/groom_flower00.png"
                        alt="Bunga kanan"
                        width={350}
                        height={350}
                    />
                </div>
                <div className="pointer-events-none absolute -top-28 -left-40 z-0 overflow-hidden opacity-50 lg:-left-44">
                    <Image src="/bunga/tree-groom.png" alt="Tree Groom" width={400} height={400} />
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }}
                    className="bg-green-600 pb-6"
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
                            className="flex items-center gap-2 rounded-full bg-lime-900 px-4 py-1 text-xs text-white lg:text-base"
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
