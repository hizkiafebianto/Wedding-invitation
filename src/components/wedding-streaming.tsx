import { greatVibes } from "@/app/font"
import { Button } from "./ui/button"

export const WeddingStreaming = () => {
  return (
    <section className="py-16 px-4 bg-tembok text-center">
        <h2 className={`text-5xl ${greatVibes.className} font-semibold text-lime-900 mb-8`}>Live Streaming</h2>

        <div className="relative w-full max-w-4xl aspect-video mx-auto rounded-lg overflow-hidden shadow-lg">
            <iframe
            src="https://www.youtube.com/embed/nHRnL7rSe2U?si=nOwAwiIBN9mOIHK-"
            title="Wedding Video"
            className="w-full h-full"
            allowFullScreen
            />
        </div>

        <Button
            variant="default"
            className="mt-6 w-full"
        >
            Open Link
        </Button>
    </section>
  )
}