'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { greatVibes } from '@/app/font';
import { createDelayVariants } from '@/utils/animations';

const flowerDecorations = [
    {
        src: '/png2/8.png',
        width: 220,
        height: 220,
        className: 'absolute bottom-32 animate-sway -right-16 z-0',
        direction: 'left',
        delay: '0s'
    },
    {
        src: '/png2/7.png',
        width: 200,
        height: 200,
        className: 'absolute top-12 animate-sway -right-24 z-0',
        direction: 'left',
        delay: '0.4s'
    },
    {
        src: '/png/7.png',
        width: 200,
        height: 200,
        className: 'absolute top-24 animate-sway -left-24 z-0',
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

export const ThankSection = () => {
    return (
        <section id="thank-section" className="relative min-h-screen w-full overflow-hidden px-4 py-20 text-center text-lime-900">
            {/* Background bunga dan daun */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/background/thank-bg.png" // background daun & pilar
                    alt="Background Decoration"
                    fill
                    className="object-cover object-center"
                />
            </div>
            <div className="absolute inset-0 bg-white/80" />

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

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 mx-auto max-w-3xl"
            >
                {/* Foto dengan frame oval */}
                <motion.div
                    variants={createDelayVariants('bottom')}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }} 
                    className="mx-auto mb-8 h-96 w-72 overflow-hidden"
                >
                    <Image
                        src="/image/couple-foto.png" // foto pengantin
                        alt="Thank You Couple"
                        width={400}
                        height={500}
                        className="h-full w-full object-cover"
                    />
                </motion.div>

                {/* Judul dan pesan */}
                <motion.h2 
                    variants={createDelayVariants('bottom')}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }}
                    className={`${greatVibes.className} mb-4 text-5xl font-bold`}
                >
                    Thank You
                </motion.h2>
                <motion.p 
                    variants={createDelayVariants('bottom')}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }}
                    className="mx-auto max-w-xl text-base leading-relaxed"
                >
                    Kami mengucapkan terimakasih kepada Bapak/Ibu/Saudara yang telah menghadiri
                    seluruh rangkaian acara pernikahan kami. Semoga waktu yang diberikan oleh
                    Bapak/Ibu/Saudara sekalian menjadi berkah dan manfaat yang kelak dibalas oleh
                    Tuhan Yang Maha Esa. Terima kasih atas seluruh ucapan yang diberikan. Semoga
                    kami menjadi pasangan yang berbahagia dunia dan akhirat.
                </motion.p>
            </motion.div>
        </section>
    );
};
