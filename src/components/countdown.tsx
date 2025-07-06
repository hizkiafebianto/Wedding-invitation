import { greatVibes } from "@/app/font";

export const Countdown = () => {
    return (
        <section data-aos="fade-up">
            <div className="bg-[#FFEBF1] py-12 px-4 text-center text-gray-800">
                <h1 className={`${greatVibes.className} text-5xl lg:text-6xl font-fleur mb-12 mt-8`}>
                    Countdown
                </h1>

                <div className="flex justify-center gap-16 mb-8 flex-wrap">
                    <div className="flex flex-col items-center">
                        <span className="text-4xl sm:text-5xl font-bold">07</span>
                        <span className="text-lg sm:text-xl mt-1">Hari</span>
                    </div>

                    <div className="flex flex-col items-center">
                        <span className="text-4xl sm:text-5xl font-bold">20</span>
                        <span className="text-lg sm:text-xl mt-1">Jam</span>
                    </div>

                    <div className="flex flex-col items-center">
                        <span className="text-4xl sm:text-5xl font-bold">30</span>
                        <span className="text-lg sm:text-xl mt-1">Menit</span>
                    </div>

                    <div className="flex flex-col items-center">
                        <span className="text-4xl sm:text-5xl font-bold">30</span>
                        <span className="text-lg sm:text-xl mt-1">Detik</span>
                    </div>
                </div>
            </div>
        </section>
    )
}