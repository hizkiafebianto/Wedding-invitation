import { greatVibes } from '@/app/font';
import Image from 'next/image';

export const WeddingVideo = () => {
    return (
        <section className="relative px-4 text-center">
            <h2 className={`text-5xl ${greatVibes.className} mb-8 font-semibold text-lime-900`}>
                Our Footage
            </h2>

            {/* Flower background absolute positioned */}
            <div className="pointer-events-none absolute inset-0 -bottom-56 -z-10 flex items-center justify-center">
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
            <div className="relative mx-auto flex max-w-4xl items-center justify-center">
                <div className="relative z-10 w-full max-w-3xl overflow-hidden shadow-lg">
                    <iframe
                        src="https://www.youtube.com/embed/nHRnL7rSe2U?si=nOwAwiIBN9mOIHK-"
                        title="Wedding Video"
                        className="aspect-video w-full rounded-xl"
                        allowFullScreen
                    />
                </div>
            </div>

            <h3 className="mt-6 mb-10 text-lime-900 italic">The Pre-Wedding</h3>
        </section>
    );
};
