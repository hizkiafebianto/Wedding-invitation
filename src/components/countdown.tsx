"use client"

import { greatVibes } from "@/app/font";
import { useState, useEffect } from "react";


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
        <section data-aos="fade-up">
            <div className="bg-[#FFEBF1] py-12 px-4 text-center text-gray-800">
                <h1 className={`${greatVibes.className} text-5xl lg:text-6xl font-fleur mb-8 mt-8`}>
                    Menuju Hari Bahagia
                </h1>
                <p className="text-gray-700 text-lg mb-12">
                    Kami akan melangsungkan pernikahan dalam :
                </p>

                <div className="flex justify-center gap-6 flex-wrap text-pink-800 text-2xl font-semibold">
                    <TimerBox label="Hari" value={timeLeft.days} />
                    <TimerBox label="Jam" value={timeLeft.hours} />
                    <TimerBox label="Menit" value={timeLeft.minutes} />
                    <TimerBox label="Detik" value={timeLeft.seconds} />
                </div>
            </div>
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