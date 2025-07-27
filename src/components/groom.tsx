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
            className="relative w-full overflow-x-hidden pt-56"
            style={{ overflowY: 'visible' }}
        >
            <div className="relative z-0 flex flex-col">
                {/* Foto Groom dalam frame lingkaran */}
                <div className="flex justify-end">
                    <div className="relative z-10 h-96 w-96 overflow-hidden rounded-full lg:-top-16 lg:h-[28rem] lg:w-[28rem]">
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

                <div className="pointer-events-none absolute top-[230px] z-20 lg:left-28">
                    <Image
                        src="/bunga/groom_flower0.png"
                        alt="Bunga Kiri"
                        width={350}
                        height={350}
                    />
                </div>

                <div className="pointer-events-none absolute -top-28 -left-48 z-0 lg:-top-32 lg:-left-40">
                    <Image src="/bunga/groom_side.png" alt="Bunga Kiri" width={300} height={300} />
                </div>

                <motion.div
                    variants={createDelayVariants('right')}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }} 
                    className="pointer-events-none absolute rotate-12 -top-48 -left-36 -z-10 lg:-top-44 lg:-left-32">
                    <Image
                        src="/bunga/wisteria_groom000.png"
                        alt="Bunga Kiri"
                        width={300}
                        height={300}
                        className="animate-sway"
                    />
                </motion.div>

                <motion.div
                    variants={createDelayVariants('right')}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }}
                    className="pointer-events-none absolute top-32 z-10 lg:left-24"
                >
                    <Image
                        src="/bunga/flower_groom123.png"
                        alt="Bunga Kiri"
                        width={200}
                        height={200}
                        className="animate-sway "
                        style={{ animationDelay: getRandomDelay() }}
                    />
                </motion.div>

                <div className="pointer-events-none absolute top-[230px] z-20 translate-x-64 overflow-hidden lg:left-36">
                    <Image
                        src="/bunga/groom_flower00.png"
                        alt="Bunga kanan"
                        width={350}
                        height={350}
                    />
                </div>
                <div className="pointer-events-none absolute -top-28 z-0 translate-x-64 overflow-hidden opacity-50 lg:-top-44 lg:left-28">
                    <Image src="/bunga/tree-groom.png" alt="Tree Groom" width={400} height={400} />
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
                        className={`${greatVibes.className} mt-16 text-center text-6xl text-lime-900 lg:mt-2`}
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
                    <motion.div variants={item} className="mt-4 flex justify-center">
                        <a
                            href="https://www.instagram.com/hizkia.febianto/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-full bg-lime-900 px-4 py-1 text-xs text-white lg:text-base"
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
