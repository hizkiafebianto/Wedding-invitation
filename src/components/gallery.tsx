"use client"

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image"
import { useState } from "react"
import { greatVibes } from "@/app/font"

const images = [
  "/gallery/galeri1.jpg",
  "/gallery/galeri2.jpg",
  "/gallery/galeri3.jpg",
  "/gallery/galeri6.jpg",
]

export const Gallery = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: { perView: 1.2, spacing: 15 },
  })    

  const [selected, setSelected] = useState<string | null>(null)

  return (
    <section className="py-16 px-4 ">
      <h2 className={`text-5xl ${greatVibes.className} text-center font-semibold text-lime-900 mb-8`}>Our Gallery</h2>

      <div ref={sliderRef} className="keen-slider">
        {images.map((src, i) => (
          <div key={i} className="keen-slider__slide">
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl shadow-md cursor-pointer">
                <Image
                src={src}
                alt={`Gallery ${i + 1}`}
                width={400}
                height={300}
                className="rounded-xl shadow-md cursor-pointer object-cover w-full h-60"
                onClick={() => setSelected(src)}
                />
            </div>
          </div>
        ))}
      </div>

      {/* Preview Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50" onClick={() => setSelected(null)}>
          <div className="max-w-4xl w-full px-4">
            <Image
              src={selected}
              alt="Preview"
              width={1200}
              height={800}
              className="rounded-xl max-h-[90vh] mx-auto"
            />
          </div>
        </div>
      )}
    </section>
  )
}
