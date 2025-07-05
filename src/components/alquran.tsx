"use client"

import { greatVibes } from "@/app/font";
import { useEffect, useState } from "react";

export const Alquran = () => {
    const [ayat, setAyat] = useState<{ teksArab: string, teksIndonesia: string } | null>(null);

    useEffect(() => {
        fetch("https://equran.id/api/v2/surat/30")
            .then(res => res.json())
            .then(data => {
                const ayat21 = data.data.ayat[20];
                setAyat(ayat21);
            })
    }, [])

    if (!ayat) return <p className="text-center">Loading ayat...</p>;

    return (
        <section className="bg-[#FFEBF1] py-16 px-4 sm:px-6 lg:px-8 text-gray-800 text-center">
            <div className="max-w-4xl mx-auto">
                <h2 className={`${greatVibes.className} text-5xl mt-8 lg:text-6xl font-fleur mb-12`}>
                    Dalil Pernikahan dalam Al-Quran
                </h2>
                {ayat && (
                    <>
                        <p className="text-2xl lg:text-4xl leading-loose text-gray-800 font-semibold arabic-font">
                            {ayat.teksArab}
                        </p>

                        <p className="mt-4 text-sm md:text-base lg:text-lg italic text-gray-600">
                            {ayat.teksIndonesia}
                        </p>
                    </>
                )}

                <p className="mt-2 text-sm text-gray-500 mb-8">
                    (QS. Ar-Rum: 21)
                </p>
            </div>
        </section>
    )
}