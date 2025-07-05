import { Button } from "./ui/button";
import { FaEnvelopeOpenText } from "react-icons/fa";
import Image from 'next/image';
import { greatVibes } from "@/app/font";
import Link from "next/link";

const Front = () => {
    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
            <Image src="/wisteria1.jpg" alt="bg_front" fill priority className="object-top object-cover z-0 pointer-events-none select-none"/>
            <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-xl px-4 sm:px-6 md:px-10 py-6 sm:py-8 shadow-lg max-w-md sm:max-w-lg md:max-w-xl w-full mx-4 sm:mx-auto fade-in-up">
                <div className="flex flex-col gap-y-4">
                    <p className="fade-in-up fade-delay-100 text-base font-semibold mb-4 sm:text-lg lg:text-2xl text-black">
                        Hello, We Are Getting Married
                    </p>
                    <h1 className={`${greatVibes.className} text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r text-[#FFDE57] font-fleur bg-clip-text leading-tight fade-in-up fade-delay-200`}>
                        Nama Pengantin
                    </h1>
                    <h3 className={`${greatVibes.className} fade-in-up fade-delay-300 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FFDE57] bg-clip-text`}>
                        and
                    </h3>
                    <h1 className={`${greatVibes.className} fade-in-up fade-delay-400 text-5xl sm:text-6xl lg:text-7xl font-bold text-[#FFDE57] bg-clip-text leading-tight`}>
                        Nama Pengantin
                    </h1>
                    <p className="fade-in-up fade-delay-500 text-base sm:text-lg lg:text-xl font-medium mt-4 text-black">
                        Saturday, Jan 1, 2025
                    </p>
                </div>

                <div className="mt-10 flex flex-col items-center gap-1 text-black">
                    <span className="text-sm sm:text-base fade-in-up fade-delay-600">Dear</span>
                    <p className="text-lg sm:text-xl font-semibold fade-in-up fade-delay-700">Nama Tamu</p>
                    <span className="text-sm sm:text-base fade-in-up fade-delay-800">Alamat tamu</span>
                </div>

                <div className="mt-8 fade-in-up fade-delay-900">
                    <Link href="/invitation">
                        <Button variant="pink" className="text-sm sm:text-base">
                            <FaEnvelopeOpenText className="size-4 text-black"/>
                            <p>Open Invitaton</p>
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Front;