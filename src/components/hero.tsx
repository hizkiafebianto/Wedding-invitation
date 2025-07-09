

'use client';

import Image from 'next/image';
import { greatVibes } from "@/app/font";
import { Button } from './ui/button';

export const Hero = () => {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Logo & bunga atas */}
      <div className="relative w-full flex flex-col items-center pt-16 pb-10 overflow-x-hidden">
        <Image src="/bunga/frame-left (3).png" alt="Bunga Kiri" width={200} height={200} className="absolute top-0 -left-20 z-10 w-48 lg:w-60 h-auto animate-sway" />
        <Image src="/bunga/frame-left (4).png" alt="Bunga Kanan" width={200} height={200} className="absolute top-0 -right-20 z-10 w-48 lg:w-60 h-auto animate-sway" />
        <Image src="/image/logo.png" alt="Logo" width={1000} height={1000} className="z-20 w-11/12 -mt-24" />
      </div>

      {/* Foto Couple & Nama */}
      <div className="relative w-[90%] max-w-[460px] aspect-[3/4] mx-auto flex flex-col items-center justify-end overflow-hidden">
        <Image src="/image/couple-foto.png" alt="Foto Couple" fill className="object-contain" priority />
        <div className="absolute bottom-0 z-40 w-full flex justify-center pointer-events-none">
          <Image src="/background/cahaya.png" alt="Cahaya" width={1200} height={200} className="w-[170%] max-w-none h-auto translate-y-12" priority />
        </div>

        <div className="absolute bottom-0 z-50 text-center w-full -translate-y-10 px-4">
            <p className="text-black font-semibold mb-4 text-sm">Wedding Invitation</p>
            <h2 
                className={`${greatVibes.className} text-6xl font-semibold text-[#D0A7E3] drop-shadow-md`}
                style={{
                    WebkitTextStroke: "0.5px #2B3A67",
                }}
            >
                Hizkia &
            </h2>
            <h2 
                className={`${greatVibes.className} text-6xl font-semibold text-[#D0A7E3] drop-shadow-2xl`}
                style={{
                    WebkitTextStroke: "0.5px #2B3A67",
                }}
            >
                Yushellia
            </h2>
            <p className="text-sm sm:text-base mt-4 font-medium text-black">#YUSHELbeHIZ</p>

            <div className="flex justify-center items-center mt-4">
                <Button className="rounded-full w-1/3 bg-white text-black" variant="pink">RSVP</Button>
            </div>
        </div>
      </div>
    </div>
  );
};


