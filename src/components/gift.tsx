"use client"

import Image from "next/image";
import { useState } from "react"
import { Button } from "./ui/button";
import { Copy } from "lucide-react";
import { greatVibes } from "@/app/font";

const banks = [
    {
        name: "Bank BCA",
        accountNumber: "206 074 3137",
        rawAccountNumber: "2060743137",
        accountName: "Hizkia Febianto",
        qrCode: null,
    },
    {
        name: "Bank Mandiri",
        accountNumber: "1340021425441",
        rawAccountNumber: "1340021425441",
        accountName: "Hizkia Febianto",
        qrCode: "/qris.png",
    }
]

export const GiftSection = () => {
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    const handleCopy = (text: string, index: number) => {
        navigator.clipboard.writeText(text)
        setCopiedIndex(index)
        setTimeout(() => setCopiedIndex(null), 1500)
    }

    return (
        <section className="py-20 px-4 text-center text-lime-900 relative">
            <div className="max-w-xl mx-auto bg-white/70 rounded-xl p-6 shadow-md">
                <h2 className={`text-5xl font-serif mb-4 ${greatVibes.className}`}>
                    E-Gift
                </h2>
                <p className="text-sm mb-6">
                    If you want to give a gift we provide a digital envelope to make it easier for you. Thank you
                </p>

                {banks.map((bank, index) => (
                    <div 
                        className="mb-10 text-center"
                        key={bank.name}
                    >
                        <h3 className="text-lg font-semibold">
                            {bank.name}
                        </h3>
                        <p className="text-sm">
                            Account Number:
                        </p>
                        <p className="font-semibold text-lime-900">
                            {bank.accountNumber}
                        </p>
                        <p className="text-sm">
                            Account Name:
                        </p>
                        <p className="font-semibold mb-3">
                            {bank.accountName}
                        </p>

                        {bank.qrCode && (
                            <div className="flex justify-center mb-4">
                                <Image 
                                    src={bank.qrCode}
                                    alt={`${bank.name} QR Code`}
                                    width={130}
                                    height={130}
                                    className="rounded shadow"
                                />
                            </div>
                        )}

                        <Button
                            variant="secondary"
                            onClick={() => handleCopy(bank.rawAccountNumber, index)}
                        >
                            <Copy className="w-4 h-4 mr-2" /> Copy
                        </Button>

                        {copiedIndex === index && (
                            <p className="mt-2 text-green-600 text-sm">
                                Copied
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}