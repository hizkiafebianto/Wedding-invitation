"use client"

import { greatVibes } from "@/app/font";
import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
}

export const Countdown = () => {
    const targetDate = new Date("2026-01-01T09:00:00") // tanggal akad nikah
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate.getTime() - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24))
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((distance % (1000 * 60)) / 1000)

            if(distance < 0) {
                clearInterval(timer)
                setTimeLeft({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                })
            } else {
                setTimeLeft({ days, hours, minutes, seconds })
            }
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    return (
        <section className="bg-[#FFEBF1] py-12 px-4 text-center text-gray-800">
            <motion.div 
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.h1 
                    className={`${greatVibes.className} text-5xl lg:text-6xl font-fleur mb-8 mt-8`}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                >
                        Menuju Hari Bahagia
                </motion.h1>
                <motion.p 
                    className="text-gray-700 text-lg mb-12"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    Kami akan melangsungkan pernikahan dalam :
                </motion.p>

                <motion.div 
                    className="flex justify-center gap-6 flex-wrap text-pink-800 text-2xl font-semibold"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                >
                        <TimerBox label="Hari" value={timeLeft.days} />
                        <TimerBox label="Jam" value={timeLeft.hours} />
                        <TimerBox label="Menit" value={timeLeft.minutes} />
                        <TimerBox label="Detik" value={timeLeft.seconds} />
                </motion.div>
            </motion.div>
        </section>
    )
}

const TimerBox = ({ label, value }: { label: string; value: number; }) => (
    <div className="bg-[#FBBDD0] backdrop-blur-md px-6 py-6 rounded-2xl shadow-xl w-20 md:w-28 lg:w-36 flex flex-col items-center justify-center">
        <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-pink-800">
            {value.toString().padStart(2, "0")}
        </p>

        <p className="text-sm md:text-base text-gray-700 mt-2 tracking-wide">
            {label}
        </p>
    </div>
)