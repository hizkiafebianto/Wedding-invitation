"use client"

import Image from "next/image"
import { greatVibes } from "@/app/font"
import { FaInstagram } from "react-icons/fa";

export const GroomSection = () => {
  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-xl relative flex flex-col items-center">
        {/* Foto Groom dalam frame lingkaran */}
        <div className="relative w-96 h-96 rounded-full overflow-hidden">
          <Image
            src="/fiersa.jpg"
            alt="Groom"
            fill
            className="object-cover"
          />
        </div>

        {/* Bunga di atas foto, bisa pakai animasi sway atau pulse */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-80 pointer-events-none z-10">
          {/* <Image
            src="/bunga/bunga_depan_groom.png"
            alt="Bunga Groom"
            width={320}
            height={150}
            className="w-full h-auto animate-sway"
          /> */}
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
