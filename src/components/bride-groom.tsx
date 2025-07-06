import { greatVibes } from "@/app/font"
import Image from "next/image"

export const BrideGroom = () => {
    return (
        <section className="bg-[#FFEBF1] py-16 px-4 sm:px-6 lg:px-8 text-center text-gray-800">
            <h2 className={`${greatVibes.className} text-5xl lg:text-6xl font-fleur mb-8`}>
                Bride & Groom
            </h2>

            <div className="flex flex-col justify-center items-center max-w-4xl mx-auto">
                <p className="text-lg mb-2 lg:text-xl">
                    Assalamu’alaikum Warahmatullahi Wabarakatuh
                </p>

                <p className="text-lg mb-2 lg:text-xl">
                    Maha suci Allah SWT yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah, perkenankanlah kami merangkai kasih sayang yang Kau ciptakan di antara putra-putri kami:
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                    <div className="text-center flex flex-col gap-y-1">
                        <Image 
                            src="/fiersa.jpg" 
                            alt="cowo" 
                            width={180} 
                            height={180}
                            className="mt-8 rounded-full object-cover mx-auto shadow-md mb-2"    
                        />
                        <h2 className="text-3xl font-medium">
                            Fiersa
                        </h2>
                        <h2 className="text-2xl">
                            Fiersa Besari
                        </h2>
                        <p className="text-base">
                            Putra Pertama dari Bapak A & Ibu B
                        </p>
                        <p>
                            Jl. Indonesia Merdeka No.45 Indonesia
                        </p>
                    </div>

                    <div className="text-center flex flex-col gap-y-1">
                        <Image 
                            src="/aqia.png" 
                            alt="cewe" 
                            width={180} 
                            height={180}
                            className="mt-8 rounded-full object-cover mx-auto shadow-md mb-2"    
                        />
                        <h2 className="text-3xl font-medium">
                            Aqia
                        </h2>
                        <h2 className="text-2xl">
                            Siti Aqia Nurfadla
                        </h2>
                        <p className="text-base">
                            Putri Pertama dari Bapak A & Ibu B
                        </p>
                        <p>
                            Jl. Indonesia Merdeka No.46 Indonesia
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}