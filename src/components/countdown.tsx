"use client"

import { greatVibes } from "@/app/font"
import { useEffect, useState } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export const Countdown = () => {
  const targetDate = new Date("2025-12-20T08:00:00") // ganti tanggal sesuai kebutuhan
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
    <section className="w-full py-16 px-4 text-center">
      <h2 className={`text-5xl text-lime-900 ${greatVibes.className} mb-6`}>
        Save The Date
      </h2>

      <p className="text-lime-900 mb-8 text-sm max-w-xl mx-auto font-medium">
        We joyfully invite you to celebrate the beginning of our forever.
      </p>

      <div className="flex justify-center flex-wrap gap-6 md:gap-10 text-lime-900">
        {[
          { label: "Days", value: timeLeft.days },
          { label: "Hours", value: timeLeft.hours },
          { label: "Minutes", value: timeLeft.minutes },
          { label: "Seconds", value: timeLeft.seconds },
        ].map(({ label, value }) => (
          <div key={label} className="flex flex-col items-center">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center">
              <span className={`${greatVibes.className} text-5xl font-bold`}>
                {value.toString().padStart(2, "0")}
              </span>
            </div>
            <span className="text-xs md:text-sm font-medium">{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
