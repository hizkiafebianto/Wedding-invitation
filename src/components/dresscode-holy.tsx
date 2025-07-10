"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { greatVibes } from "@/app/font"

const dresscodeData = [
  {
    title: "Holy Matrimony",
    theme: "Pastel Colors (No White)",
    note: "Semi Formal / Soft Garden",
    icon: "/dresscode/dresscode.png",
    colors: ["#FBBDD0", "#C7D8FE", "#FFDE57", "#D0A7E3"]
  },
  {
    title: "Wedding Reception",
    theme: "Spring Colors (No White)",
    note: "Garden Party Look",
    icon: "/dresscode/dresscode.png",
    colors: ["#FBBDD0", "#C7D8FE", "#FFDE57", "#D0A7E3"]
  }
]

export const EventDresscode = () => {
  return (
    <section className="relative w-full px-4 py-20 text-lime-900 text-center">
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`${greatVibes.className} text-5xl font-bold mb-2`}
        >
          Dress Code
        </motion.h2>
        <p className="text-base sm:text-lg mb-10 italic">
          Wedding Day Attire
        </p>

        {/* Dresscode Cards */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {dresscodeData.map((item, i) => (
            <div
              key={i}
              className="w-full max-w-[340px] sm:max-w-sm md:flex-1 bg-white/80 rounded-2xl p-6 sm:p-8 shadow-lg"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-2">{item.title}</h3>
              <p className="mb-4 italic text-sm sm:text-base">{item.theme}</p>
              <Image
                src={item.icon}
                alt={`${item.title} Icon`}
                width={120}
                height={120}
                className="mx-auto mb-4"
              />

              <div className="flex justify-center gap-3 mt-4">
                {item.colors.map((color, idx) => (
                  <div
                    key={idx}
                    className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-white"
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="text-xs mt-10 max-w-md mx-auto text-lime-900">
          We kindly ask that guests please attend wearing our wedding colors.
        </p>
      </div>
    </section>
  )
}
