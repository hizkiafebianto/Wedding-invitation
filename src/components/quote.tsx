"use client"

import Image from "next/image"

export const Quote = () => {
    return (
        <section className="w-full py-16 flex flex-col items-center text-center lg:mb-8 mt-8">
            {/* kutipan quote */}
            <p className="text-sm text-lime-900 font-medium italic max-w-2xl leading-relaxed z-10">
                {`"God has poured out His love into our hearts,`} <br />
                {`and in His perfect timing, He brought us together.`} <br />
                {`With joy and gratitude, we invite you to witness the beginning`} <br />
                {`of this blessed journey of marriage."`} <br />
            </p>

            {/* Image background */}
            <div className="relative w-full h-[280px]"> 
                <Image 
                    src="/image_quote/quote.png"
                    alt="Gazebo"
                    width={1000}
                    height={700}
                    className="object-contain lg:-translate-y-32 -translate-y-24 z-0"
                />
            </div>
        </section>
    )
}