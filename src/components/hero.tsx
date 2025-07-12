'use client';

import Image from 'next/image';
import { greatVibes } from "@/app/font";
import { Button } from './ui/button';
import { useCallback } from 'react';
import { motion, Variants } from "framer-motion";

export const Hero = () => {
  const handleScrollToRSVP = useCallback(() => {
    // Pastikan berjalan di browser
    if (typeof window !== 'undefined') {
      const target = document.getElementById('rsvp');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, []);

  const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

  return (
    <section className="flex flex-col items-center text-center">
      {/* Logo & bunga atas */}
      <motion.div 
          className="relative w-full flex flex-col items-center pt-40 pb-20 z-10 overflow-hidden"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
      > {/* Ubah overflow-x-hidden menjadi overflow-hidden */}
        {/* <div className="absolute top-0 left-0 w-full h-[1200px] pointer-events-none z-0"> Tingkatkan tinggi di sini */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image 
              src="/bunga/frame-left (3).png" 
              alt="Bunga Kiri" 
              width={200} 
              height={200} 
              className="absolute -top-6 -left-6 translate-x-[-30%] w-48 lg:w-60 h-auto animate-sway z-10" 
          />
        </motion.div>
          <Image 
              src="/bunga/frame-left (4).png" 
              alt="Bunga Kanan" 
              width={200} 
              height={200} 
              className="absolute -top-6 -right-6 translate-x-[30%] w-48 lg:w-60 h-auto animate-sway z-10" 
          />
          <Image 
              src="/bunga/hero.png" 
              alt="Bunga Kanan" 
              width={300} 
              height={300} 
              className="absolute top-16 -right-16 w-48 lg:w-60 animate-sway" 
          />
          <Image 
              src="/bunga/hero-1.png" 
              alt="Bunga Kiri" 
              width={200} 
              height={200} 
              className="absolute top-16 -left-16 w-48 lg:w-60 h-auto animate-sway" 
          />
          <Image 
              src="/image/logo.png" 
              alt="Logo" 
              width={1000} 
              height={1000} 
              className="z-20 w-11/12 -mt-36" />
        {/* </div> */}
      </motion.div>

      {/* Foto Couple & Nama */}
      <div className="relative w-[90%] max-w-[480px] aspect-[3/4] mx-auto flex mb-8 flex-col items-center justify-end -mt-24 overflow-hidden z-30">
        <Image 
            src="/image/couple-foto.png" 
            alt="Foto Couple" 
            fill 
            className="object-contain" 
            priority />
        <div className="absolute bottom-0 z-40 w-full flex justify-center pointer-events-none">
          <Image 
              src="/background/cahaya.png" 
              alt="Cahaya" 
              width={1200} 
              height={200} 
              className="w-[170%] max-w-none h-auto translate-y-12" 
              priority />
        </div>

        <div className="absolute bottom-0 z-50 text-center w-full -translate-y-10 px-4">
            <p className="text-lime-900 font-semibold mb-4 text-sm">Wedding Invitation</p>
            <h2 
                className={`${greatVibes.className} text-6xl font-semibold text-lime-900 drop-shadow-md`}
                // style={{
                //     WebkitTextStroke: "0.5px #2B3A67",
                // }}
            >
                Hizkia &
            </h2>
            <h2 
                className={`${greatVibes.className} text-6xl font-semibold text-lime-900 drop-shadow-2xl`}
                // style={{
                //     WebkitTextStroke: "0.5px #2B3A67",
                // }}
            >
                Yushellia
            </h2>
            <p className="text-sm sm:text-base mt-4 font-medium text-lime-900">#YUSHELbeHIZ</p>

            <div className="flex justify-center items-center mt-4">
            <Button
              onClick={handleScrollToRSVP}
              className="rounded-full w-1/3 bg-lime-900 text-white"
              variant="pink"
            >
              RSVP
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
