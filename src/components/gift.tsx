import { greatVibes } from "@/app/font"
import Image from "next/image"
import { Button } from "./ui/button"
import { useState } from "react"

export const Gift = () => {
    const [copied, setCopied] = useState<string | null>(null)

    const handleCopy = (text: string, label: string) => {
        navigator.clipboard.writeText(text)
        setCopied(label)
        setTimeout(() => setCopied(null), 2000)
    }

    return (
        <section className="bg-[#FFEBF1] py-12 px-4 text-center text-gray-800">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className={`${greatVibes.className} text-5xl lg:text-6xl font-fleur mb-8`}>
                    Wedding Gift
                </h1>

                <p className="max-w-4xl mx-auto mb-12 text-lg">
                    Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Jika ingin memberikan tanda kasih, dapat melalui informasi di bawah ini.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* QRIS */}
                    <div className="bg-[#FBBDD0] backdrop-blur-md p-6 rounded-xl shadow-xl border border-white/20">
                        <h3 className="text-xl font-semibold text-pink-800 mb-4">
                            Scan QRIS
                        </h3>
                        <div className="flex justify-center">
                            <Image 
                                src="/qris.png"
                                alt="QRIS"
                                width={200}
                                height={200}
                                className="rounded-md shadow-md"
                            />
                        </div>

                        <p className="text-sm text-gray-600 mt-4 italic">
                            Scan menggunakan aplikasi e-wallet favorit Anda
                        </p>
                    </div>

                    {/* Rekening */}
                    <div className="bg-[#FBBDD0] backdrop-blur-md p-6 rounded-xl shadow-xl border border-white/20 text-left flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-semibold text-pink-800 mb-4">
                                Transfer Rekening
                            </h3>

                            <div className="mb-6">
                                <p className="font-semibold text-gray-800">
                                    BCA - 1234567890
                                </p>
                                <p className="text-sm text-gray-600 mb-2">
                                    a.n. Rekening ku ya
                                </p>

                                <Button
                                    variant="outline"
                                    onClick={() => handleCopy("1234567890", "BCA")}
                                    className="cursor-pointer"
                                >
                                    {copied === "BCA" ? "Disalin" : "Salin Nomor"}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}