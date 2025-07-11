"use client"

import Image from "next/image"
import { greatVibes } from "@/app/font"
import { FaInstagram } from "react-icons/fa";

export const BrideSection = () => {
  return (
    <section className="w-full py-16 px-6 mt-16">
      <div className="max-w-xl relative flex flex-col items-center">

        {/* Foto bride dalam frame lingkaran */}
        <div className="relative w-96 h-96 rounded-full overflow-hidden">
          <Image
            src="/aqia.png"
            alt="Groom"
            fill
            className="object-cover"
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

        <div className="absolute bottom-56 lg:bottom-60 lg:w-[70%] w-full pointer-events-none z-10">
            <Image
              src="/couple/flower_photo.png"
              alt="Bunga Groom"
              width={320}
              height={150}
              className="w-full h-auto"
            />
        </div>
        
        {/* Nama mempelai */}
        <h2 className={`${greatVibes.className} text-center text-6xl text-lime-900 mt-20`}>
          Edward Gio
        </h2>

        {/* Nama orang tua */}
        <p className="mt-2 text-lg text-center text-gray-600">
          The Son of Mr. Leo <br /> & Mrs. Jenny
        </p>

        {/* Link Instagram */}
        <div className="mt-4 flex justify-center">
          <a
            href="https://instagram.com/katsudoto"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-lime-900 text-white text-lg px-4 py-1 rounded-full flex items-center gap-2"
          >
            <FaInstagram />
            @katsudoto
          </a>
        </div>
      </div>
    </section>
  )
}
