"use client"

import { Button } from "./ui/button"
import { FaEnvelopeOpenText } from "react-icons/fa"
import Image from "next/image"
import { greatVibes } from "@/app/font"
import { useRef, useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
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
  const searchParams = useSearchParams();

  const [guestId, setGuestId] = useState<string | null>(null);
  const [guestName, setGuestName] = useState("Tamu Undangan");
  const [guestAddress, setGuestAddress] = useState("");

  useEffect(() => {
      const id = searchParams.get("to");
      if (id) {
          setGuestId(id)
      }
  }, [searchParams])

  useEffect(() => {
     if(!guestId) return;

     const fetchGuest = async () => {
        try {
            const res = await fetch(`https://undangundang.id/api/rsvp/${guestId}`)
            if(!res.ok) {
                throw new Error("Gagal")
            }

            const data = await res.json();
            setGuestName(data.name || "Tamu Undangan");
            setGuestAddress(data.address || "");
        } catch (err) {
            console.log("Gagal ambil data tamu", err)
        }
     }
     fetchGuest()
  }, [guestId])

  const handleOpen = () => {
      if(typeof window !== "undefined") {
          window.localStorage.setItem("shouldPlayAudio", "true")
      }

      const url = guestId ? `/invitation?to=${guestId}` : "/invitation"
      router.push(url)
  }

  return (
    <>
      <audio ref={audioRef} src="/audio/audio.mp3" loop preload="auto" />

      <div className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
        
        {/* Background utama */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/background/wisteria1.jpg"
            alt="Main Background"
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Kartu utama */}
        <motion.div
          className="relative z-10 bg-white/90 rounded-2xl mt-40 px-6 sm:px-10 py-10 shadow-xl max-w-md sm:max-w-lg w-full pt-32"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          {/* Foto pasangan (keluar dari atas card) */}
          <motion.div
            variants={fadeUp}
            className="absolute -top-56 left-1/2 -translate-x-1/2 w-[50%]"
          >
            <Image
              src="/frame_oval.png"
              alt="Couple"
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </motion.div>

          <motion.p 
            variants={fadeUp} 
            className="text-sm text-gray-700 mb-4 lg:mb-10"
          >
            We invite you to the wedding of
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className={`${greatVibes.className} text-6xl lg:text-7xl text-lime-900 mb-2`}
          >
            Hizkia
          </motion.h1>

          <motion.h3
            variants={fadeUp}
            className={`${greatVibes.className} text-4xl text-lime-900 mb-2`}
          >
            &
          </motion.h3>

          <motion.h2
            variants={fadeUp}
            className={`${greatVibes.className} text-6xl lg:text-7xl text-lime-900 mb-4`}
          >
            Yushellia
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-gray-600 text-sm sm:text-base mb-6"
          >
            Saturday, January 1, 2025
          </motion.p>

          <motion.div 
            variants={fadeUp} 
            className="mb-6"
          >
            <p className="text-sm text-black">Dear</p>
            <p className="font-semibold text-lg text-black">
              {guestName}
            </p>
            <p className="text-sm text-black">{guestAddress}</p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Button
              onClick={handleOpen}
              className="bg-lime-900 text-white hover:bg-lime-700"
            >
              <FaEnvelopeOpenText className="mr-2" />
              Open the Invitation
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}

export default Front
