"use client"

// import Image from "next/image"

export const Quote = () => {
    return (
        <section className="w-full py-16 flex flex-col items-center text-center">
            {/* kutipan quote */}
            <p className="text-sm text-lime-900 font-medium italic max-w-2xl leading-relaxed">
                {`"God has poured out His love into our hearts,`} <br />
                {`and in His perfect timing, He brought us together.`} <br />
                {`With joy and gratitude, we invite you to witness the beginning`} <br />
                {`of this blessed journey of marriage."`} <br />
            </p>

            {/* Image background */}
            {/* <div className="relative w-full mt-48 min-h-[300px] overflow-visible">
                
                <Image 
                    src="/image_quote/Orn-65.png"
                    alt="Gazebo"
                    width={1000}
                    height={700}
                    className="w-full h-auto object-cover z-10"
                />
               
                <div className="absolute -top-36 left-1/2 -translate-x-1/2 -z-10">
                    <Image 
                        src="/image_quote/Orn-01.png"
                        alt="Gazebo"
                        width={400}
                        height={400}
                        className="w-[500px] h-auto"
                    />
                </div>

                
            </div> */}
        </section>
    )
}