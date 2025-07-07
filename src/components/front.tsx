"use client"

import { Button } from "./ui/button"
import { FaEnvelopeOpenText } from "react-icons/fa"
import Image from "next/image"
import { greatVibes } from "@/app/font"
import { useRef } from "react"
import { useRouter } from "next/navigation"
import { motion, Variants } from "framer-motion"

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
}

const staggerContainer = {
    hidden: {},
    show: {
        transition: {
        staggerChildren: 0.15,
        },
    },
}

const Front = () => {
    const audioRef = useRef<HTMLAudioElement>(null)
    const router = useRouter()

    const handleOpen = () => {
        if (typeof window !== "undefined") {
            window.localStorage.setItem("shouldPlayAudio", "true")
        }
        router.push("/invitation")
    }

    return (
        <>
            <audio ref={audioRef} src="/audio/audio.mp3" loop preload="auto" />

            <div className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
                <Image
                    src="/wisteria1.jpg"
                    alt="bg_front"
                    fill
                    priority
                    className="object-top object-cover z-0 pointer-events-none select-none"
                />

                <motion.div
                    className="relative z-10 bg-white/10 backdrop-blur-md rounded-xl px-4 sm:px-6 md:px-10 py-6 sm:py-8 shadow-lg max-w-md sm:max-w-lg md:max-w-xl w-full mx-4 sm:mx-auto"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                >
                <motion.p 
                    variants={fadeUp} 
                    className="text-base font-semibold mb-4 sm:text-lg lg:text-2xl text-black">
                        Hello, We Are Getting Married
                </motion.p>

                <motion.h1
                    variants={fadeUp}
                    className={`${greatVibes.className} text-5xl sm:text-6xl lg:text-7xl font-bold text-[#FFDE57]`}
                >
                    Nama Pengantin
                </motion.h1>

                <motion.h3
                    variants={fadeUp}
                    className={`${greatVibes.className} text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FFDE57]`}
                >
                    and
                </motion.h3>

                <motion.h2
                    variants={fadeUp}
                    className={`${greatVibes.className} text-5xl sm:text-6xl lg:text-7xl font-bold text-[#FFDE57]`}
                >
                    Nama Pengantin
                </motion.h2>

                <motion.p
                    variants={fadeUp}
                    className="text-base sm:text-lg lg:text-xl font-medium mt-4 text-black"
                >
                    Saturday, Jan 1, 2025
                </motion.p>

                <motion.div 
                    variants={fadeUp} 
                    className="mt-10 flex flex-col items-center gap-1 text-black">
                        <span className="text-sm sm:text-base">Dear</span>
                        <p className="text-lg sm:text-xl font-semibold">Nama Tamu</p>
                        <span className="text-sm sm:text-base">Alamat tamu</span>
                </motion.div>

                <motion.div variants={fadeUp} className="mt-8">
                    <Button onClick={handleOpen} variant="pink" className="text-sm sm:text-base">
                        <FaEnvelopeOpenText className="size-4 text-black" />
                        <p>Open Invitation</p>
                    </Button>
                </motion.div>
            </motion.div>
        </div>
    </>
  )
}

export default Front
