'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { greatVibes } from '@/app/font';

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

            {/* Dekorasi bunga kiri-kanan */}
            {/* <Image
        src="/left-flower.png"
        alt="Left Flower"
        width={200}
        height={400}
        className="absolute -left-8 -bottom-10 z-0"
      />
      <Image
        src="/right-flower.png"
        alt="Right Flower"
        width={200}
        height={400}
        className="absolute -right-8 -bottom-10 z-0"
      /> */}

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 mx-auto max-w-3xl"
            >
                {/* Foto dengan frame oval */}
                <div className="mx-auto mb-8 h-96 w-72 overflow-hidden">
                    <Image
                        src="/image/couple-foto.png" // foto pengantin
                        alt="Thank You Couple"
                        width={400}
                        height={500}
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* Judul dan pesan */}
                <h2 className={`${greatVibes.className} mb-4 text-5xl font-bold`}>Thank You</h2>
                <p className="mx-auto max-w-xl text-base leading-relaxed">
                    Kami mengucapkan terimakasih kepada Bapak/Ibu/Saudara yang telah menghadiri
                    seluruh rangkaian acara pernikahan kami. Semoga waktu yang diberikan oleh
                    Bapak/Ibu/Saudara sekalian menjadi berkah dan manfaat yang kelak dibalas oleh
                    Tuhan Yang Maha Esa. Terima kasih atas seluruh ucapan yang diberikan. Semoga
                    kami menjadi pasangan yang berbahagia dunia dan akhirat.
                </p>
            </motion.div>
        </section>
    );
};
