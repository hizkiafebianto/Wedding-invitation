"use client";

// components/TwoColumnLayout.tsx
import { ReactNode } from 'react';
import Image from 'next/image';
import { greatVibes } from '@/app/font';

interface Props {
    children: ReactNode;
}

export const TwoColumnLayout = ({ children }: Props) => {
    return (
        <div className="flex h-screen w-full overflow-hidden">
            {/* Static Left Side */}
            <div className="fixed top-0 left-0 z-0 hidden h-full w-8/12 lg:block">
                <div className="relative h-full w-full">
                    {/* Background Image */}
                    <Image
                        src="/background/wisteria3.jpg"
                        alt="castle"
                        fill
                        className="object-cover"
                        priority
                    />

                    {/* Overlay Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/10 text-center">
                        {/* Cahaya Background */}
                        <div className="pointer-events-none absolute bottom-0 flex h-full w-full justify-center">
                            <Image
                                src="/background/cahaya.png"
                                alt="cahaya"
                                width={1200}
                                height={200}
                                className="h-auto w-[170%] max-w-none"
                                priority
                            />
                        </div>

                        {/* Nama Pengantin */}
                        <div className="z-10 text-lime-900">
                            <h1
                                className={`${greatVibes.className} font-script text-8xl drop-shadow-md`}
                            >
                                Hizkia
                            </h1>
                            <h2
                                className={`${greatVibes.className} text-3xl drop-shadow-md md:text-4xl`}
                            >
                                &
                            </h2>
                            <h1
                                className={`${greatVibes.className} font-script text-8xl drop-shadow-md`}
                            >
                                Yushellia
                            </h1>
                            <p className="mt-4">#YUSHELbeHIZ</p>
                        </div>
                    </div>

                    {/* Dekorasi Bawah */}
                    <div className="pointer-events-none absolute -bottom-12 left-1/2 z-0 w-9/12 -translate-x-1/2">
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
                        className="animate-sway pointer-events-none absolute bottom-0 left-0 z-10 h-auto w-32 lg:w-52"
                        priority
                    />
                    <Image
                        src="/bunga/bunga_kanan.png"
                        alt="Bunga Kanan Bawah"
                        width={200}
                        height={200}
                        className="animate-sway pointer-events-none absolute right-0 bottom-0 z-10 h-auto w-32 lg:w-52"
                        priority
                    />
                    <Image
                        src="/bunga/bunga_samping_kanan.png"
                        alt="Bunga Samping Kanan"
                        width={200}
                        height={200}
                        className="animate-sway pointer-events-none absolute bottom-36 left-0 z-0 h-auto w-32 lg:w-52"
                        priority
                    />
                    <Image
                        src="/bunga/bunga_samping_kiri.png"
                        alt="Bunga Samping Kiri"
                        width={200}
                        height={200}
                        className="animate-sway pointer-events-none absolute right-0 bottom-36 z-0 h-auto w-32 lg:w-52"
                        priority
                    />
                </div>
            </div>

            {/* Scrollable Right Side */}
            <div
                id="scrollable-right"
                className="bg-tembok z-10 ml-auto h-screen w-full overflow-y-auto lg:w-4/12"
            >
                {children}
            </div>
        </div>
    );
};
