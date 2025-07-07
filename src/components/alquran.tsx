"use client"

import { greatVibes } from "@/app/font";
import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
}

export const Alquran = () => {
    
    const [ayat, setAyat] = useState<{ teksArab: string, teksIndonesia: string } | null>(null);

    useEffect(() => {
        fetch("https://equran.id/api/v2/surat/30")
            .then(res => res.json())
            .then(data => {
                const ayat21 = data.data.ayat[20];
                setAyat(ayat21);
            })
    }, [])

    if (!ayat) return <p className="text-center bg-[#FFEBF1]"></p>;

    return (
        <section className="bg-[#FFEBF1] py-16 px-4 sm:px-6 lg:px-8 text-gray-800 text-center">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.h2 
                        className={`${greatVibes.className} text-5xl mt-8 lg:text-6xl font-fleur mb-12`}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                            Dalil Pernikahan dalam Al-Quran
                    </motion.h2>
                    {ayat && (
                        <>
                            <motion.p 
                                className="text-2xl lg:text-4xl leading-loose text-gray-800 font-semibold arabic-font"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                    {ayat.teksArab}
                            </motion.p>

                            <motion.p 
                                className="mt-4 text-sm md:text-base lg:text-base italic text-gray-600"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                {ayat.teksIndonesia}
                            </motion.p>
                        </>
                    )}

                    <motion.p 
                        className="mt-2 text-sm text-gray-500"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        (QS. Ar-Rum: 21)
                    </motion.p>
                </motion.div>
            </div>
        </section>
    )
}