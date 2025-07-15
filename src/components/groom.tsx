"use client"

import Image from "next/image"
import { greatVibes } from "@/app/font"
import { FaInstagram } from "react-icons/fa";

export const GroomSection = () => {
  return (
    <section className="w-full py-24 px-6">
      <div className="max-w-xl relative flex flex-col items-center">
        {/* <div className="absolute -top-10 -left-16 mx-auto flex justify-center pointer-events-none z-0">
          <Image
            src="/couple/pohon1.png" // pastikan file ini ada
            alt="Pohon Gantung"
            width={250}
            height={150}
            className="w-[180px] lg:w-[250px] h-auto"
          />
        </div> */}
        {/* Foto Groom dalam frame lingkaran */}
        <div className="relative w-96 h-96 rounded-full overflow-hidden">
          <Image
            src="/fiersa.jpg"
            alt="Groom"
            fill
            className="object-cover shadow-xl shadow-lime-100"
          />
        </div>
        
        
        {/* <div className="absolute -top-16 -right-6 overflow-x-hidden z-0 w-40 lg:w-56 animate-sway pointer-events-none">
          <Image
            src="/couple/flower_couple.png"
            alt="Bunga Kiri"
            width={260}
            height={260}
            className="w-full h-auto"
          />
        </div> */}

        {/* <div className="absolute -top-6 -left-6 overflow-x-hidden -z-10 w-66 lg:w-80 pointer-events-none">
          <Image
            src="/couple/groom_kiri.png"
            alt="Bunga Kiri"
            width={460}
            height={260}
            className="w-full h-auto"
          />
        </div> */}

        {/* Bunga di atas foto, bisa pakai animasi sway atau pulse */}
        <div className="absolute bottom-48 lg:w-[70%] w-full pointer-events-none z-10">
          <Image
            src="/couple/flower_photo.png"
            alt="Bunga Groom"
            width={320}
            height={150}
            className="w-full h-auto"
          />
        </div>

        {/* <div className="absolute bottom-72 -left-28 w-[60%] lg:w-[70%] pointer-events-none z-0">
          <Image
            src="/couple/flower2.png"
            alt="Bunga Groom"
            width={320}
            height={150}
            className="w-full h-auto rotate-90"
          />
        </div> */}

        {/* Nama mempelai */}
        <h2 className={`${greatVibes.className} text-center text-6xl text-lime-900 mt-20`}>
          Hizkia Febianto
        </h2>

        {/* Nama orang tua */}
        <p className="mt-2 text-lg text-center text-gray-600 gap-1">
          The Son of Mr. Tjhie Kwat Liang <br /> & Mrs. Ang Joe Nio
        </p>

        {/* Link Instagram */}
        <div className="mt-4 flex justify-center">
          <a
            href="https://www.instagram.com/hizkia.febianto/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-lime-900 text-white text-lg px-4 py-1 rounded-full flex items-center gap-2"
          >
            <FaInstagram />
            @hizkia.febianto
          </a>
        </div>
      </div>
    </section>
  )
}
