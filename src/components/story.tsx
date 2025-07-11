"use client"

import { useState } from "react"
import Image from "next/image"
import { greatVibes } from "@/app/font"
import { ChevronLeft, ChevronRight } from "lucide-react"

const stories = [
  {
    title: "First Meet",
    description:
      `Jennifer & Edward's love story is nothing but adorable! It is the simple things in life that keeps the sparkles flying. Our first date was watching his senior video and eating Taco Bell lol.`,
    image: "/ourstory/story1.jpg",
  },
  {
    title: "The Journey",
    description:
      "We stayed strong throughout the years, holding on to each other's dreams. The long walks, video calls, and shared laughter kept us going.",
    image: "/ourstory/story2.jpg",
  },
  {
    title: "The Proposal",
    description:
      "Under the stars, with close friends hiding nearby, he asked—and she said yes. It was the beginning of forever.",
    image: "/ourstory/story3.jpg",
  },
]

export const OurStory = () => {
  const [current, setCurrent] = useState(0)

  const nextStory = () => setCurrent((prev) => (prev + 1) % stories.length)
  const prevStory = () => setCurrent((prev) => (prev - 1 + stories.length) % stories.length)

  const story = stories[current]

  return (
    <section className="w-full px-4 py-20 text-center relative overflow-hidden z-10">
      <h2 className={`text-5xl ${greatVibes.className} text-white mb-12`}>Our Story</h2>

<div className="absolute inset-0 -z-10">
        <Image
          src="/ourstory/bg.jpg"
          alt="Holy Matrimony Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Blur Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm -z-10" />
      
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-6 relative min-h-[500px] md:min-h-[600px] flex flex-col justify-start">
  {/* Gambar */}
  <div className="relative w-full h-56 md:h-72 lg:h-96 rounded-lg overflow-hidden mb-4">
    <Image
      src={story.image}
      alt={story.title}
      fill
      className="object-cover"
    />
  </div>

  {/* Judul */}
  <h3 className="text-xl font-semibold text-lime-700 mb-2">{story.title}</h3>

  {/* Deskripsi */}
  <div className="text-gray-600 text-sm flex-1 overflow-y-auto px-1">
    {story.description}
  </div>

  {/* Navigasi */}
  <button
    onClick={prevStory}
    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-lime-100"
  >
    <ChevronLeft size={24} />
  </button>

  <button
    onClick={nextStory}
    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-lime-100"
  >
    <ChevronRight size={24} />
  </button>

  {/* Indikator */}
  <div className="flex justify-center gap-2 mt-4">
    {stories.map((_, i) => (
      <div
        key={i}
        className={`w-2 h-2 rounded-full ${i === current ? "bg-lime-600" : "bg-gray-300"}`}
      />
    ))}
  </div>
</div>

    </section>
  )
}
