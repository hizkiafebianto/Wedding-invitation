import { greatVibes } from "@/app/font"

export const WeddingVideo = () => {
  return (
    <section className="px-4 text-center">
      <h2 className={`text-5xl ${greatVibes.className} font-semibold text-lime-900 mb-8`}>
        Our Footage
      </h2>

      {/* Container utama */}
      <div className="aspect-video rounded-3xl shadow-lg overflow-hidden relative z-10">
        {/* Video Iframe */}
        <div className="aspect-video rounded-full shadow-lg relative z-10">
          <iframe
            src="https://www.youtube.com/embed/nHRnL7rSe2U?si=nOwAwiIBN9mOIHK-"
            title="Wedding Video"
            className="w-full h-full"
            allowFullScreen
          />
        </div>

        {/* Gambar background di bawah video */}
        

      </div>

      {/* Subtitle */}
      <h3 className="mt-6 text-lime-900 relative italic mb-36 z-20">The Pre-Wedding</h3>
    </section>
  )
}
