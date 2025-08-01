"use client";

import { useState } from 'react';
import Image from 'next/image';
import { greatVibes } from '@/app/font';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { createDelayVariants, item } from '@/utils/animations';

const stories = [
    {
        title: 'First Meet',
        description: `Jennifer & Edward's love story is nothing but adorable! It is the simple things in life that keeps the sparkles flying. Our first date was watching his senior video and eating Taco Bell lol.`,
        image: '/ourstory/story1.jpg',
    },
    {
        title: 'The Journey',
        description:
            "We stayed strong throughout the years, holding on to each other's dreams. The long walks, video calls, and shared laughter kept us going.",
        image: '/ourstory/story2.jpg',
    },
    {
        title: 'The Proposal',
        description:
            'Under the stars, with close friends hiding nearby, he asked—and she said yes. It was the beginning of forever.',
        image: '/ourstory/story3.jpg',
    },
];

export const OurStory = () => {
    const [current, setCurrent] = useState(0);

    const nextStory = () => setCurrent((prev) => (prev + 1) % stories.length);
    const prevStory = () => setCurrent((prev) => (prev - 1 + stories.length) % stories.length);

    const story = stories[current];

    return (
        <section id="our-story" className="relative z-10 w-full overflow-hidden px-12 py-20 text-center">
            <motion.h2 
                variants={createDelayVariants('bottom')}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className={`text-5xl ${greatVibes.className} text-5xl md:text-6xl mb-12 text-white`}
            >
                Our Story
            </motion.h2>

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
            <div className="absolute inset-0 -z-10 bg-black/40 backdrop-blur-sm" />

            <motion.div 
                variants={createDelayVariants('bottom')}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="relative mx-auto flex min-h-[500px] max-w-xl flex-col justify-start rounded-lg bg-white p-6 shadow-lg md:min-h-[600px]"
            >
                {/* Gambar */}
                <motion.div
                    variants={item}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }} 
                    className="relative mb-4 h-56 w-full overflow-hidden rounded-lg md:h-72 lg:h-96"
                >
                    <Image src={story.image} alt={story.title} fill className="object-cover" />
                </motion.div>

                {/* Judul */}
                <h3 className="mb-2 text-xl font-semibold text-lime-700">{story.title}</h3>

                {/* Deskripsi */}
                <div className="flex-1 overflow-y-auto px-1 text-sm text-gray-600">
                    {story.description}
                </div>

                {/* Navigasi */}
                <button
                    onClick={prevStory}
                    className="absolute top-5/12 left-8 -translate-y-16 transform rounded-full bg-white p-2 shadow hover:bg-lime-300"
                >
                    <ChevronLeft size={20} className="text-lime-900" />
                </button>

                <button
                    onClick={nextStory}
                    className="absolute top-5/12 right-8 -translate-y-16 transform rounded-full bg-white p-2 shadow hover:bg-lime-300"
                >
                    <ChevronRight size={20} className="text-lime-900" />
                </button>

                {/* Indikator */}
                <div className="mt-4 flex justify-center gap-2">
                    {stories.map((_, i) => (
                        <div
                            key={i}
                            className={`h-2 w-2 rounded-full ${i === current ? 'bg-lime-900' : 'bg-gray-300'}`}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    );
};
