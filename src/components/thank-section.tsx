"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { greatVibes } from "@/app/font"

export const ThankSection = () => {
  return (
    <section className="relative w-full min-h-screen px-4 py-20 text-center text-lime-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <div className="w-64 h-64 mx-auto rounded-full overflow-hidden shadow-lg mb-8">
          <Image
            src="/fiersa.jpg"
            alt="Thank You Couple"
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>

        <h2 className={`${greatVibes.className} text-5xl font-bold mb-4`}>Thank You</h2>
        <p className="text-base max-w-xl mx-auto leading-relaxed">
          Kami mengucapkan terimakasih kepada Bapak/Ibu/Saudara yang telah menghadiri seluruh rangkaian acara pernikahan kami. Semoga waktu yang diberikan oleh Bapak/Ibu/Saudara sekalian menjadi berkah dan manfaat yang kelak dibalas oleh Tuhan Yang Maha Esa. Terima kasih atas seluruh ucapan yang diberikan. Semoga kami menjadi pasangan yang berbahagia dunia dan akhirat
        </p>
      </motion.div>
    </section>
  )
}
