import { greatVibes } from "@/app/font"

export const WeddingVideo = () => {
  return (
    <section className="py-16 px-4 bg-tembok text-center">
      <h2 className={`text-5xl ${greatVibes.className} font-semibold text-lime-900 mb-8`}>Our Wedding Video</h2>

      <div className="relative w-full max-w-4xl aspect-video mx-auto rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="https://www.youtube.com/embed/nHRnL7rSe2U?si=nOwAwiIBN9mOIHK-"
          title="Wedding Video"
          className="w-full h-full"
          allowFullScreen
        />
      </div>

      <h3 className="mt-4 text-gray-800">The Pre Wedding</h3>
    </section>
  )
}


// import { useRef } from "react"

// export const WeddingVideo = () => {
//   const videoRef = useRef<HTMLVideoElement>(null)

//   return (
//     <section className="py-16 px-4 bg-tembok text-center">
//       <h2 className="text-4xl font-semibold text-lime-900 mb-8">Our Wedding Footage</h2>

//       <div className="w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
//         <video
//           ref={videoRef}
//           controls
//           className="w-full h-auto rounded-md"
//         >
//           <source src="/video/wedding-footage.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>
//     </section>
//   )
// }
