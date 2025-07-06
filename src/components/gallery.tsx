"use client"

import { greatVibes } from "@/app/font";
import Image from "next/image";

export const Gallery = () => {
    const images = [
        { src: "/gallery/galeri1.jpg", row: "row-span-2" },
        { src: "/gallery/galeri2.jpg", row: "row-span-1" },
        { src: "/gallery/galeri3.jpg", row: "row-span-1" },
        { src: "/gallery/galeri4.jpg", row: "row-span-2" },
        { src: "/gallery/galeri5.jpg", row: "row-span-1" },
        { src: "/gallery/galeri6.jpg", row: "row-span-1" },
    ]
    
    return (
        <section className="bg-[#FFEBF1] py-12 px-4 text-center text-gray-800">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className={`${greatVibes.className} text-5xl lg:text-6xl font-fleur mb-12 mt-8`}>
                    Gallery
                </h1>

                <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-dense mb-24 gap-4 auto-rows-[150px]">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className={`relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transform transition duration-300 ease-in-out hover:scale-[1.03] hover:rotate-1 ${img.row}`}
                        >
                            <Image 
                                src={img.src}
                                alt={`Foto ${index + 1}`}
                                fill
                                className="w-full h-48 object-cover transform group-hover:scale-105 transition duration-300 ease-in-out"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}