import { greatVibes } from "@/app/font"
import { Button } from "./ui/button"
import Link from "next/link"
import { FaMapLocationDot } from "react-icons/fa6";

export const Rounddown = () => {
    return (
        <section className="bg-[#FFEBF1] py-12 px-4 text-center text-gray-800">
            <div className="max-w-4xl mx-auto px-4">
                <h1 data-aos="fade-up" className={`${greatVibes.className} text-5xl lg:text-6xl font-fleur mb-8`}>
                    Weddings
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* akad */}
                    <div className="bg-[#FBBDD0] flex flex-col gap-y-1 shadow-xl rounded-2xl p-6">
                        <h3 className="text-3xl font-bold mb-2">
                            Akah Nikah
                        </h3>
                        <p className="text-white font-bold text-lg">
                            Saturday, October 12, 2024
                        </p>
                        <p className="text-lg">
                            Pukul 08.00 - 10.00 WIB
                        </p>
                        <p className="text-lg">
                            Rumah Mempelai Wanita
                        </p>
                        <p className="text-base">
                            Jl. Gatot Subroto
                        </p>
                        
                        <Link href="https://www.google.com/maps/place/Osaka,+Japan/@34.6777115,135.4036368,12z/data=!4m6!3m5!1s0x6000e6553406e2e1:0xc55bc16ee46a2fe7!8m2!3d34.6937249!4d135.5022535!16zL20vMGRxeXc?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D">
                            <Button variant="pink" className="bg-white mt-8">
                                <FaMapLocationDot />
                                Lihat Lokasi
                            </Button>
                        </Link>
                    </div>

                    {/* Respsi */}
                    <div className="bg-[#FBBDD0] flex flex-col gap-y-1 shadow-md rounded-2xl p-6">
                        <h3 className="text-3xl font-bold mb-2">
                            Resepsi
                        </h3>
                        <p className="text-white font-bold text-lg">
                            Saturday, October 12, 2024
                        </p>
                        <p className="text-lg">
                            Pukul 08.00 - 10.00 WIB
                        </p>
                        <p className="text-lg">
                            Rumah Mempelai Wanita
                        </p>
                        <p className="text-base">
                            Jl. Gatot Subroto
                        </p>
                        
                        <Link href="https://www.google.com/maps/place/Osaka,+Japan/@34.6777115,135.4036368,12z/data=!4m6!3m5!1s0x6000e6553406e2e1:0xc55bc16ee46a2fe7!8m2!3d34.6937249!4d135.5022535!16zL20vMGRxeXc?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D">
                            <Button variant="pink" className="bg-white mt-8">
                                <FaMapLocationDot />
                                Lihat Lokasi
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}