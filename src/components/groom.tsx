"use client"

import Image from "next/image"
import { greatVibes } from "@/app/font"
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

export const GroomSection = () => {
  return (
    <section className="w-full pt-56  overflow-x-hidden relative"
      style={{ overflowY: "visible" }}
    >
      <div className="relative z-0 flex flex-col">
        {/* Foto Groom dalam frame lingkaran */}
        <div className="flex justify-end">
          <div className="relative w-96 h-96 z-10 rounded-full overflow-hidden lg:w-[28rem] lg:h-[28rem] lg:-top-16">
            <motion.div
              initial={{ scale: 1.2, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }} 
              viewport={{ once: true, amount: 0.5 }}
              className="w-full h-full"
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
        
        <div className="absolute top-[230px] lg:left-28 z-20 pointer-events-none">
          <Image
            src="/bunga/groom_flower0.png"
            alt="Bunga Kiri"
            width={350}
            height={350}
          />
        </div>

        <div className="absolute -top-28 -left-48 lg:-top-32 lg:-left-40 z-0  pointer-events-none">
          <Image
            src="/bunga/groom_side.png"
            alt="Bunga Kiri"
            width={300}
            height={300}
          />
        </div>

        <div className="absolute -top-48 rotate-45 -left-20 lg:-top-40 lg:-left-16 -z-10 pointer-events-none">
          <Image
            src="/bunga/dafodil_side.png"
            alt="Bunga Kiri"
            width={300}
            height={300}
          />
        </div>

        <div className="absolute top-32 lg:left-24 z-10 pointer-events-none">
          <Image
            src="/bunga/flower_groom123.png"
            alt="Bunga Kiri"
            width={200}
            height={200}
          />
        </div>

        <div className="absolute top-[230px] translate-x-64 overflow-hidden z-20 lg:left-36 pointer-events-none">
          <Image
            src="/bunga/groom_flower00.png"
            alt="Bunga kanan"
            width={350}
            height={350}
          />
        </div>
        <div className="absolute -top-28 lg:-top-44 overflow-hidden translate-x-64 opacity-50 z-0 lg:left-28 pointer-events-none">
          <Image
            src="/bunga/tree-groom.png"
            alt="Tree Groom"
            width={400}
            height={400}
          />
        </div>

        

        {/* Nama mempelai */}
        <h2 className={`${greatVibes.className} text-center text-6xl lg:mt-2 text-lime-900 mt-16`}>
          Hizkia Febianto
        </h2>

        {/* Nama orang tua */}
        <p className="mt-2 text-base text-center text-gray-600 gap-1">
          The Son of Mr. Tjhie Kwat Liang <br /> & Mrs. Ang Joe Nio
        </p>

        {/* Link Instagram */}
        <div className="mt-4 flex justify-center">
          <a
            href="https://www.instagram.com/hizkia.febianto/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-lime-900 text-white text-xs px-4 py-1 rounded-full flex items-center gap-2"
          >
            <FaInstagram />
            @hizkia.febianto
          </a>
        </div>
      </div>
    </section>
  )
}
