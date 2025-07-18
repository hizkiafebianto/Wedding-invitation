"use client"

import { greatVibes } from "@/app/font"
import { useEffect, useState } from "react"
import Image from "next/image"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const flowers = [1, 2, 3, 4, 5]

export const Countdown = () => {
  const targetDate = new Date("2025-09-27T08:00:00")
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const diff = targetDate.getTime() - now.getTime()

      if (diff <= 0) {
        clearInterval(timer)
        return
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((diff / 1000 / 60) % 60)
      const seconds = Math.floor((diff / 1000) % 60)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative w-full py-28 px-4 text-center overflow-hidden mb-8 mt-16 lg:mt-48">
      <div className="absolute inset-0 flex justify-center items-center z-0 pointer-events-none">
        <Image 
          src="/countdown/countdown.png"
          alt="Countdown Background"
          width={800}
          height={800}
          className="max-w-full h-full"
        />
      </div>

      <div className="absolute inset-0 pointer-events-none -z-10">
          {/* Pohon kiri */}
          <Image 
            src="/countdown/count_pohon.png"
            alt="Tree Left"
            width={300}
            height={1000}
            className="absolute -left-28 bottom-0 w-52 md:w-52 lg:w-64 object-contain"
          />

        {/* Pohon kanan */}
          <Image 
            src="/countdown/count_pohon.png"
            alt="Tree Right"
            width={300}
            height={1000}
            className="absolute -right-24 bottom-0 w-52 md:w-52 lg:w-64 object-contain"
          />
      </div>

      <div className="absolute bottom-0 left-0 w-full flex justify-center items-end z-0 pointer-events-none">
        {flowers.map((_, idx) => (
          <div
            key={idx}
            className={`
            ${idx !== 0 ? "-ml-10" : ""}
            ${idx % 2 === 0 ? "z-20" : "z-10"} 
          `}
          >
            {/* untuk motion */}
            <Image 
              src="/countdown/countdown1.png"
              alt={`Bunga ${idx + 1}`}
              width={300}
              height={200}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>

      <div className="relative z-10">
        <h2 className={`text-5xl text-lime-900 ${greatVibes.className} mb-6 mt-10 lg:mt-12`}>
          Save The Date
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-x-2 gap-y-6 justify-center max-w-[280px] mx-auto text-lime-900">
        {[
          { label: "days", value: timeLeft.days },
          { label: "hours", value: timeLeft.hours },
          { label: "minutes", value: timeLeft.minutes },
          { label: "seconds", value: timeLeft.seconds },
        ].map(({ label, value }) => (
          <div key={label} className="flex not-only:flex-col items-center">
            <div className="w-20 h-20 rounded-full flex items-center justify-center shadow">
              <span className={`${greatVibes.className} text-5xl font-bold`}>
                {value.toString().padStart(2, "0")}
              </span>
            </div>
            <span className="text-xs -mt-4 md:text-sm font-medium mb-8">{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
