"use client"

import { Button } from "./ui/button"
import { FaEnvelopeOpenText } from "react-icons/fa"
import Image from "next/image"
import { greatVibes } from "@/app/font"
import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { motion, Variants } from "framer-motion"

const backgroundImages = [
    "/background/wisteria1.jpg",
    "/background/wisteria4.jpg",
    "/background/wisteria3.jpg"
]

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

    const [currentBg, setCurrentBg] = useState(0);

        useEffect(() => {
            const interval = setInterval(() => {
                setCurrentBg((prev) => (prev + 1) % backgroundImages.length)
            }, 5000)

            return () => clearInterval(interval)
        })

    return (
        <>
            <audio ref={audioRef} src="/audio/audio.mp3" loop preload="auto" />

            <div className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    {backgroundImages.map((src, index) => (
                        <motion.div
                            key={src}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: index === currentBg ? 1 : 0 }}
                            transition={{ duration: 1 }}
                            className="absolute inset-0"
                            >
                            <Image
                                src={src}
                                alt={`bg-${index}`}
                                fill
                                className="object-cover object-top w-full h-full transition-opacity duration-1000"
                            />
                            </motion.div>
                    ))}
                </div>
                {/* <Image
                    src="/background/wisteria1.jpg"
                    alt="bg_front"
                    fill
                    priority
                    className="object-top object-cover z-0 pointer-events-none select-none"
                /> */}

                {/* main card */}
                <motion.div
                    className="relative z-10 bg-white/10 backdrop-blur-md rounded-xl px-4 sm:px-6 md:px-10 py-6 sm:py-8 shadow-lg max-w-md sm:max-w-lg md:max-w-xl w-full mx-4 sm:mx-auto"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                >

                    <motion.p 
                        variants={fadeUp} 
                        className="text-sm mb-8 sm:text-lg lg:text-xl text-black">
                            We cordially invite you to the Wedding Celebration of
                    </motion.p>

                    <motion.h1
                        variants={fadeUp}
                        className={`${greatVibes.className} text-6xl lg:text-7xl font-bold text-[#FFDE57]`}
                    >
                        Hizkia
                    </motion.h1>

                    <motion.h3
                        variants={fadeUp}
                        className={`${greatVibes.className} text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FFDE57]`}
                    >
                        and
                    </motion.h3>

                    <motion.h2
                        variants={fadeUp}
                        className={`${greatVibes.className} text-6xl lg:text-7xl font-bold text-[#FFDE57]`}
                    >
                        Yushellia
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        className="text-base sm:text-lg lg:text-xl mt-4 text-black"
                    >
                        Saturday, Jan 1, 2025
                    </motion.p>

                    <motion.div 
                        variants={fadeUp} 
                        className="mt-10 flex flex-col items-center gap-1 text-black">
                            <span className="text-sm sm:text-base">Dear</span>
                            <p className="text-lg sm:text-xl font-semibold">Special invitation for: Mr. David and Ms. Natali</p>
                            <span className="text-sm sm:text-base">Alamat tamu</span>
                    </motion.div>

                    <motion.div variants={fadeUp} className="mt-8">
                        <Button onClick={handleOpen} variant="pink" className="text-sm sm:text-base">
                            <FaEnvelopeOpenText className="size-4 text-black" />
                            <p>Open the Invitation</p>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </>
    )

}

export default Front
