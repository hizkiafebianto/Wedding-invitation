import { greatVibes } from "@/app/font"
import Image from "next/image"

export const WeddingVideo = () => {
  return (
    <section className="text-center px-4 relative">
      <h2
        className={`text-5xl ${greatVibes.className} font-semibold text-lime-900 mb-8`}
      >
        Our Footage
      </h2>

      {/* Flower background absolute positioned */}
      <div className="absolute inset-0 flex justify-center -bottom-56 items-center pointer-events-none -z-10">
        <Image
          src="/bunga/flower_footage.png"
          alt="Background Flower"
          width={1000}
          height={1000}
          className="object-contain opacity-60"
          priority
        />
        {/* <div className="absolute inset-0 bg-white/70 rounded-t-xl pointer-events-none" /> */}
      </div>

      {/* Video section */}
      <div className="relative max-w-4xl mx-auto flex items-center justify-center">
        <div className="shadow-lg overflow-hidden w-full max-w-3xl relative z-10">
          <iframe
            src="https://www.youtube.com/embed/nHRnL7rSe2U?si=nOwAwiIBN9mOIHK-"
            title="Wedding Video"
            className="w-full aspect-video rounded-xl"
            allowFullScreen
          />
          
        </div>
      </div>

      <h3 className="mt-6 text-lime-900 italic mb-10">The Pre-Wedding</h3>
    </section>
  )
}
