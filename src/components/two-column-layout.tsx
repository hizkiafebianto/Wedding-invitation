// components/TwoColumnLayout.tsx
import { ReactNode } from "react";
import Image from "next/image";
import { greatVibes } from "@/app/font";

interface Props {
  children: ReactNode;
}

export const TwoColumnLayout = ({ children }: Props) => {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Static Left Side */}
      <div className="hidden md:block w-8/12 h-full fixed top-0 left-0 z-0">
        <div className="relative w-full h-full">
          {/* Background Image */}
          <Image
            src="/background/wisteria3.jpg"
            alt="castle"
            fill
            className="object-cover"
            priority
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/10">
            {/* Cahaya Background */}
            <div className="absolute bottom-0 w-full h-full flex justify-center pointer-events-none">
              <Image
                src="/background/cahaya.png"
                alt="cahaya"
                width={1200}
                height={200}
                className="w-[170%] max-w-none h-auto"
                priority
              />
            </div>

            {/* Nama Pengantin */}
            <div className="z-10 text-lime-900">
              <h1 className={`${greatVibes.className} text-8xl font-script drop-shadow-md`}>
                Hizkia
              </h1>
              <h2 className={`${greatVibes.className} text-3xl md:text-4xl drop-shadow-md`}>&</h2>
              <h1 className={`${greatVibes.className} text-8xl font-script drop-shadow-md`}>
                Yushellia
              </h1>
            </div>
          </div>

          {/* Dekorasi Bawah */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-9/12 z-0 pointer-events-none ">
                <Image
                    src="/background/orn-64.png"
                    alt="footer bunga"
                    width={1920}
                    height={400}
                    className="h-auto w-full object-cover"
                    priority
                />
          </div>

          {/* Bunga Dekorasi */}
          <Image
            src="/bunga/bunga_kiri.png"
            alt="Bunga Kiri Bawah"
            width={200}
            height={200}
            className="absolute bottom-0 left-0 w-32 lg:w-52 h-auto pointer-events-none z-10 animate-sway"
            priority
          />
          <Image
            src="/bunga/bunga_kanan.png"
            alt="Bunga Kanan Bawah"
            width={200}
            height={200}
            className="absolute bottom-0 right-0 w-32 lg:w-52 h-auto pointer-events-none z-10 animate-sway"
            priority
          />
          <Image
            src="/bunga/bunga_samping_kanan.png"
            alt="Bunga Samping Kanan"
            width={200}
            height={200}
            className="absolute bottom-36 left-0 w-32 lg:w-52 h-auto pointer-events-none z-0 animate-sway"
            priority
          />
          <Image
            src="/bunga/bunga_samping_kiri.png"
            alt="Bunga Samping Kiri"
            width={200}
            height={200}
            className="absolute bottom-36 right-0 w-32 lg:w-52 h-auto pointer-events-none z-0 animate-sway"
            priority
          />
        </div>
      </div>

      {/* Scrollable Right Side */}
      <div id="scrollable-right" className="ml-auto w-full md:w-4/12 h-screen overflow-y-auto z-10 bg-tembok">
        {children}
      </div>
    </div>
  );
};
