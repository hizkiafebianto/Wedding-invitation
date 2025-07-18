"use client"

import Image from "next/image"
import { greatVibes } from "@/app/font"
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

export const BrideSection = () => {
  return (
    <section className="w-full pt-56 pb-24 bg-red-300 overflow-x-hidden relative">
      <div className="relative z-0 flex flex-col">

        {/* Foto bride dalam frame lingkaran */}
        <div className="flex justify-start">
          <div className="relative w-96 h-96 z-10 rounded-full overflow-hidden lg:w-[28rem] lg:h-[28rem] lg:-top-16">
            <motion.div
              initial={{ scale: 1.2, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }} 
              viewport={{ once: true, amount: 0.5 }}
              className="w-full h-full"
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

        <div className="absolute top-[230px] -left-28 z-20 pointer-events-none">
          <Image
            src="/bunga/groom_flower0.png"
            alt="Bunga Kiri"
            width={350}
            height={350}
          />
        </div>
        <div className="absolute top-[230px] right-0 overflow-hidden z-20 lg:left-44 pointer-events-none">
          <Image
            src="/bunga/groom_flower00.png"
            alt="Bunga kanan"
            width={350}
            height={350}
          />
        </div>
        <div className="absolute -left-40 -top-28 overflow-hidden opacity-50 z-0 lg:-left-44 pointer-events-none">
          <Image
            src="/bunga/tree-groom.png"
            alt="Tree Groom"
            width={400}
            height={400}
          />
        </div>
        
        {/* Nama mempelai */}
        <h2 className={`${greatVibes.className} text-center text-6xl lg:mt-10 text-lime-900 mt-16`}>
          Yushellia Tania
        </h2>

        {/* Nama orang tua */}
        <p className="mt-2 text-base text-center text-gray-600">
          The Daughter of Mr. Yu Lim Kang <br /> &  Mrs. Tan Hui Suan
        </p>

        {/* Link Instagram */}
        <div className="mt-4 flex justify-center">
          <a
            href="https://www.instagram.com/yushelliatania/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-lime-900 text-white text-xs px-4 py-1 rounded-full flex items-center gap-2"
          >
            <FaInstagram />
            @yushelliatania
          </a>
        </div>
      </div>
    </section>
  )  
}
