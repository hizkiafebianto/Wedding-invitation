'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import { useState } from 'react';
import { greatVibes } from '@/app/font';

const images = [
    '/gallery/galeri1.jpg',
    '/gallery/galeri2.jpg',
    '/gallery/galeri3.jpg',
    '/gallery/galeri4.jpg',
    '/gallery/galeri5.jpg',
    '/gallery/galeri6.jpg',
];

export const Gallery = () => {
    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        mode: 'free-snap',
        slides: { perView: 1.2, spacing: 15 },
    });

    const [selected, setSelected] = useState<string | null>(null);

    return (
        <section className="mt-16 overflow-hidden px-4 py-16">
            <h2
                className={`text-5xl ${greatVibes.className} mb-8 text-center font-semibold text-lime-900`}
            >
                Our Gallery
            </h2>

            <div ref={sliderRef} className="keen-slider">
                {images.map((src, i) => (
                    <div key={i} className="keen-slider__slide">
                        <div className="relative aspect-[4/3] w-full cursor-pointer overflow-hidden rounded-xl shadow-md">
                            <Image
                                src={src}
                                alt={`Gallery ${i + 1}`}
                                width={400}
                                height={300}
                                className="h-60 w-full cursor-pointer rounded-xl object-cover shadow-md"
                                onClick={() => setSelected(src)}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Preview Modal */}
            {selected && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
                    onClick={() => setSelected(null)}
                >
                    <div className="w-full max-w-4xl px-4">
                        <Image
                            src={selected}
                            alt="Preview"
                            width={1200}
                            height={800}
                            className="mx-auto max-h-[90vh] rounded-xl"
                        />
                    </div>
                </div>
            )}
        </section>
    );
};
