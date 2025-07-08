
import Image from 'next/image';
import { greatVibes } from "@/app/font";
import { motion, Variants } from 'framer-motion'
import { useEffect, useState } from 'react';

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const staggerContainer = {
    hidden: {},
    show: {
        transition: {
        staggerChildren: 0.2,
        },
    },
}

const backgroundImages = [
    "/background/wisteria1.jpg",
    "/background/wisteria4.jpg",
    "/background/wisteria3.jpg"
]

export const Hero = () => {
    const [currentBg, setCurrentBg] = useState(0);
    
            useEffect(() => {
                const interval = setInterval(() => {
                    setCurrentBg((prev) => (prev + 1) % backgroundImages.length)
                }, 5000)
    
                return () => clearInterval(interval)
            })

    return (
        // <section 
        //     className="relative z-10"
        //     data-aos="fade-down"   
        // >
        //     <div className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
        //         <Image src="/wisteria1.jpg" alt="bg_front" fill priority className="object-top object-cover z-0 pointer-events-none select-none"/>
        //         <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-xl px-4 sm:px-6 md:px-10 py-6 sm:py-8 shadow-lg max-w-md sm:max-w-lg md:max-w-xl w-full mx-4 sm:mx-auto fade-in-up">
        //             <motion.div 
        //                 className="flex flex-col gap-y-4"
        //                 variants={staggerContainer}
        //                 initial="hidden"
        //                 animate="show"
        //             >
        //                     <motion.p 
        //                         className="text-base font-semibold mb-4 sm:text-lg lg:text-2xl text-black"
        //                         variants={fadeUp}    
        //                     >
        //                             Hello, We Are Getting Married
        //                     </motion.p>
        //                     <motion.h1
        //                         variants={fadeUp}
        //                         className={`${greatVibes.className} text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r text-[#FFDE57] font-fleur bg-clip-text leading-tight`}>
        //                             Nama Pengantin
        //                     </motion.h1>
        //                     <motion.h3
        //                         variants={fadeUp} 
        //                         className={`${greatVibes.className} text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r text-[#FFDE57] bg-clip-text`}>
        //                             and
        //                     </motion.h3>
        //                     <motion.h1
        //                         variants={fadeUp} 
        //                         className={`${greatVibes.className} text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r text-[#FFDE57] bg-clip-text leading-tight`}>
        //                             Nama Pengantin
        //                     </motion.h1>
        //                     <motion.p
        //                         variants={fadeUp} 
        //                         className="text-base sm:text-lg lg:text-xl font-medium mt-4 text-black">
        //                             Saturday, Jan 1, 2025
        //                     </motion.p>
        //             </motion.div>
        //         </div>
        //     </div>

        //     <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] -mb-1">
        //         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        //             <path
        //             fill="#FFEBF1"
        //             fillOpacity="1"
        //             d="M0,160L48,170.7C96,181,192,203,288,224C384,245,480,267,576,261.3C672,256,768,224,864,229.3C960,235,1056,277,1152,293.3C1248,309,1344,299,1392,293.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        //             ></path>
        //         </svg>
        //     </div>
        // </section>
        <div className="flex min-h-screen w-full overflow-hidden">

            {/* statsic left side */}
            <div className="relative w-11/12 min-h-screen hidden md:block">
                {backgroundImages.map((src, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentBg ? 1 : 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <Image src={src} alt="castle" fill className="object-cover" />
            </motion.div>
          ))}

          {/* text overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black/10">
                <h1 className="text-5xl md:text-6xl font-script">Jennifer</h1>
            <h2 className="text-3xl md:text-4xl">&</h2>
            <h1 className="text-5xl md:text-6xl font-script">Edward</h1>
            <p className="mt-4 text-sm">Hai Katsudoto</p>
          </div>
            </div>

            {/* scorllable right side */}
            <div className="relative w-full md:w-1/2 overflow-y-auto py-12 px-4 flex flex-col items-center text-center">
                {/* wedding logo (optional) */}
                {/* <motion.img
            src="/logo-wedding.gif"
            alt="logo"
            className="w-20 h-20 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          /> */}

          {/* animasi bunga */}
                <motion.img
                    src="/bunga/bunga-kanan.png"
            alt="bunga kiri"
            className="absolute top-0 right-0 w-48 animate-pulse"
                />
            </div>
        </div>
    )
}