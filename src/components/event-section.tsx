'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { greatVibes } from '@/app/font';
import Link from 'next/link';
import { createDelayVariants } from '@/utils/animations';

const events = [
    {
        id: 'event-holy',
        backgroundSrc: '/png2/16.png',
        iconSrc: '/event-details/cincin.png',
        iconSize: { width: 80, height: 80 },
        title: 'Holy Matrimony',
        date: 'Sunday, 7 September 2025',
        time: '08.00 - 10.00',
        venue: 'Holiday Inn Resort Nusa Dua',
        address: 'Jl. Pratama No.86, Tanjung, Benoa, Bali',
        mapUrl: 'https://maps.app.goo.gl/cuMGUSo19yQH9q3T9',
    },
    {
        id: 'event-wedding',
        backgroundSrc: '/png2/16.png',
        iconSrc: '/event-details/dara.png',
        iconSize: { width: 150, height: 150 },
        title: 'Wedding Reception',
        date: 'Saturday, 27 September 2025',
        time: '18:00 - 20:00',
        venue: 'Cirebon Convention Hall',
        address:
        'Jl. Bahagia No.153, Panjunan, Kec. Lemahwungkuk, Kota Cirebon, Jawa Barat 45112',
        mapUrl: 'https://maps.app.goo.gl/P9y7khFcFkHdFKZWA',
    },
];

const flowerDecorations = [
  {
    src: '/png2/8.png',
    width: 220,
    height: 220,
    className: 'absolute -bottom-32 animate-sway -right-16 z-0',
    direction: 'left',
    delay: '0s'
  },
  {
    src: '/png2/7.png',
    width: 200,
    height: 200,
    className: 'absolute -bottom-20 animate-sway -right-24 z-0',
    direction: 'left',
    delay: '0.4s'
  },
  {
    src: '/png/7.png',
    width: 200,
    height: 200,
    className: 'absolute -bottom-40 animate-sway -left-24 z-0',
    direction: 'right',
    delay: '0.8s'
  },
  {
    src: '/png/8.png',
    width: 220,
    height: 220,
    className: 'absolute -bottom-44 animate-sway -left-20 z-0',
    direction: 'right',
    delay: '1.2s'
  },
] as const;

export const EventSection = () => {
    return (
        <>
            <div className="pt-24 text-center">
                <motion.h2
                    variants={createDelayVariants('left')}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }} 
                    className={`${greatVibes.className} text-5xl md:text-6xl text-[#718447]  mb-8`}
                >
                    The Wedding Day
                </motion.h2>
                
                <motion.div
                    variants={createDelayVariants('left')}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }}
                    className="w-0.5 h-16 mx-auto bg-lime-900 mb-4" 
                />

                <motion.p
                    variants={createDelayVariants('left')}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }} 
                    className="text-sm md:text-lg text-lime-900 tracking-widest"
                >
                    SATURDAY,
                </motion.p>
                <motion.p
                    variants={createDelayVariants('left')}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }} 
                    className="text-sm md:text-lg text-lime-900 tracking-widest"
                >
                    27 SEPTEMBER 2025
                </motion.p>
            </div>

            {events.map((event) => (
                <section
                    key={event.id}
                    id={event.id}
                    className="relative h-screen w-full overflow-hidden"
                >
                {/* Background */}
                    <motion.div
                        variants={createDelayVariants('bottom')}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.3 }} 
                        className="absolute inset-0 -z-10"
                    >
                        <Image
                            src={event.backgroundSrc}
                            alt={`${event.title} Background`}
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </motion.div>

                    {flowerDecorations.map((flower, index) => (
                        <motion.div 
                            key={index}
                            variants={createDelayVariants(flower.direction)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, amount: 0.3 }} 
                            className={flower.className}
                            style={{ animationDelay: flower.delay }}
                        >
                            <Image
                                src={flower.src}
                                alt="Flower Event"
                                width={flower.width}
                                height={flower.height}
                            />
                        </motion.div>
                    ))}


                {/* Foreground Content */}
                <div className="relative z-10 flex h-full items-center justify-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-xl space-y-3 text-center text-lime-900"
                    >
                    <motion.div
                        variants={createDelayVariants('bottom')}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.3 }} 
                        className="flex justify-center"
                    >
                        <Image
                            src={event.iconSrc}
                            alt={event.title}
                            width={event.iconSize.width}
                            height={event.iconSize.height}
                            className="mb-4"
                        />
                    </motion.div>

                    <motion.h2
                        variants={createDelayVariants('bottom')}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.3 }} 
                        className={`${greatVibes.className} text-6xl font-bold tracking-widest drop-shadow-md`}
                    >
                        {event.title}
                    </motion.h2>

                    <motion.p
                        variants={createDelayVariants('bottom')}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.3 }} 
                        className="text-lg"
                    >
                        {event.date}
                    </motion.p>
                    <motion.p
                        variants={createDelayVariants('bottom')}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.3 }} 
                        className="text-lg"
                    >
                        {event.time}
                    </motion.p>
                    <motion.p
                        variants={createDelayVariants('bottom')}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.3 }} 
                        className="text-lg"
                    >
                        {event.venue}
                    </motion.p>
                    <motion.p
                        variants={createDelayVariants('bottom')}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.3 }}  
                        className="mx-auto max-w-sm text-base"
                    >
                        {event.address}
                    </motion.p>

                    <Link href={event.mapUrl} target="_blank" rel="noopener noreferrer">
                        <motion.div
                            variants={createDelayVariants('bottom')}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <Button
                                variant="secondary"
                                className="mt-2 w-1/2 bg-lime-900 text-white hover:bg-lime-900/90"
                            >
                                Lihat Lokasi
                            </Button>
                        </motion.div>
                    </Link>
                    </motion.div>
                </div>
                </section>
            ))}
        </>
    );
};
