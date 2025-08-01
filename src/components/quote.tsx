"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { container, item } from '@/utils/animations';

export const Quote = () => {
    return (
        <motion.section
            id="quote"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="mt-8 flex w-full flex-col items-center py-16 text-center lg:mb-8"
        >
            {/* kutipan quote */}
            <motion.p
                variants={item}
                className="z-10 max-w-2xl text-sm leading-relaxed font-medium text-lime-900 italic"
            >
                {`"God has poured out His love into our hearts,`} <br />
                {`and in His perfect timing, He brought us together.`} <br />
                {`With joy and gratitude, we invite you to witness the beginning`} <br />
                {`of this blessed journey of marriage."`} <br />
            </motion.p>

            {/* Image background */}
            <motion.div variants={item} className="relative h-[280px] w-full">
                <Image
                    src="/image_quote/quote.png"
                    alt="Gazebo"
                    width={1000}
                    height={700}
                    className="z-0 -translate-y-24 object-contain lg:-translate-y-32"
                />
            </motion.div>
        </motion.section>
    );
};
