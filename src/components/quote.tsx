import { greatVibes } from "@/app/font"

export const Quote = () => {
    return (
        <section className="bg-[#FFEBF1] py-12 px-4 text-center text-gray-800">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className={`${greatVibes.className} text-5xl lg:text-6xl font-fleur mt-8 mb-12`}>
                    Quote
                </h1>

                <p className="italic lg:text-2xl">
                    {`"Tidak ada solusi yang lebih baik bagi dua insan yang saling mencintai di banding pernikahan."`}
                </p>
                <p className="mt-8 text-pink-800 font-bold text-xl mb-8">
                    HR. Ibnu Majah
                </p>
            </div>
        </section>
    )
}