'use client';

import { useState } from 'react';
import Image from 'next/image';
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
    const [selected, setSelected] = useState<string>(images[0]); // default image

    return (
        <section id="gallery" className="mt-16 px-4 py-16">
            <h2
                className={`text-5xl ${greatVibes.className} mb-8 text-center font-semibold text-lime-900`}
            >
                Our Gallery
            </h2>

            {/* Gambar utama */}
            <div className="mb-6 flex justify-center">
                <div className="relative w-full max-w-4xl aspect-[3/4] overflow-hidden rounded-2xl shadow-lg">
                    <Image
                        src={selected}
                        alt="Main Preview"
                        fill
                        className="object-cover object-center"
                    />
                </div>
            </div>

            {/* Thumbnail */}
            <div className="flex gap-4 w-full overflow-x-auto px-2 scrollbar-hide">
                {images.map((src, i) => (
                    <div
                        key={i}
                        className={`relative h-24 w-24 flex-shrink-0 cursor-pointer overflow-hidden rounded-xl border-2 ${
                            selected === src
                                ? 'border-lime-700'
                                : 'border-transparent'
                        }`}
                        onClick={() => setSelected(src)}
                    >
                        <Image
                            src={src}
                            alt={`Thumbnail ${i + 1}`}
                            fill
                            className="object-cover hover:opacity-80 transition"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};
