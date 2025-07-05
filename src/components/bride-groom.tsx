import { greatVibes } from "@/app/font"
import Image from "next/image"

export const BrideGroom = () => {
    return (
        <section className="bg-[#FFEBF1] py-16 px-4 sm:px-6 lg:px-8 text-center">
            <h2 className={`${greatVibes.className} text-5xl lg:text-6xl font-fleur mb-12`}>
                Bride & Groom
            </h2>

            <div className="flex flex-col justify-center items-center max-w-5xl mx-auto">
                <p>
                    Assalamu’alaikum Warahmatullahi Wabarakatuh
                </p>

                <p>
                    Maha suci Allah SWT yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah, perkenankanlah kami merangkai kasih sayang yang Kau ciptakan di antara putra-putri kami:
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                    <div className="text-center flex flex-col gap-y-2">
                        <Image 
                            src="/fiersa.jpg" 
                            alt="cowo" 
                            width={180} 
                            height={180}
                            className="mt-8 rounded-full object-cover mx-auto shadow-md"    
                        />
                        <h3>
                            Nama Cowo
                        </h3>
                        <p>
                            Putra Bapak A & Ibu B
                        </p>
                        <p>
                            Jl. Indonesia Merdeka No.45 Indonesia
                        </p>
                    </div>

                    <div className="text-center flex flex-col gap-y-2">
                        <Image 
                            src="/aqia.png" 
                            alt="cewe" 
                            width={180} 
                            height={180}
                            className="mt-8 rounded-full object-cover mx-auto shadow-md"    
                        />
                        <h3>
                            Nama Cowo
                        </h3>
                        <p>
                            Putra Bapak A & Ibu B
                        </p>
                        <p>
                            Jl. Indonesia Merdeka No.45 Indonesia
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}