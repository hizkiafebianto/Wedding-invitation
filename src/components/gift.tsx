"use client";

import Image from 'next/image';
import { useState } from 'react';
import { Copy } from 'lucide-react';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { greatVibes } from '@/app/font';
import { motion } from 'framer-motion';
import { createDelayVariants } from '@/utils/animations';

const banks = [
    {
        id: 'bca',
        name: 'Bank BCA',
        accountNumber: '206 074 3137',
        rawAccountNumber: '2060743137',
        accountName: 'Hizkia Febianto',
        qrCode: null,
    },
    {
        id: 'mandiri',
        name: 'Bank Mandiri',
        accountNumber: '1340021425441',
        rawAccountNumber: '1340021425441',
        accountName: 'Hizkia Febianto',
        qrCode: '/qris.png',
    },
];

export const GiftSection = () => {
    const [selectedBankId, setSelectedBankId] = useState<string | null>(null);
    const [copied, setCopied] = useState(false);

    const selectedBank = banks.find((bank) => bank.id === selectedBankId);

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
  };

    return (
        <section id="gift" className="relative px-4 py-16 text-center text-lime-900">
        <motion.div
            variants={createDelayVariants("bottom")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }} 
            className="mx-auto max-w-xl rounded-xl bg-white/70 p-6 shadow-md"
        >
            <h2 className={`mb-4 font-serif text-5xl ${greatVibes.className}`}>E-Gift</h2>
            <p className="mb-6 text-sm">
                If you want to give a gift we provide a digital envelope to make it easier for you.
                Thank you
            </p>

            <Select onValueChange={setSelectedBankId}>
                <SelectTrigger className="w-full bg-white">
                    <SelectValue placeholder="Select a bank" />
                </SelectTrigger>
                <SelectContent>
                    {banks.map((bank) => (
                    <SelectItem key={bank.id} value={bank.id}>
                        {bank.name}
                    </SelectItem>
                    ))}
                </SelectContent>
            </Select>

            {selectedBank && (
                <div className="mt-6 flex justify-center">
                    <div className="relative w-[360px] rounded-2xl bg-white shadow-md overflow-hidden">
                        <div className="absolute inset-0">
                            <Image
                                src="/png2/card.png"
                                alt="Debit Card Background"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="relative z-10 flex flex-col gap-2 p-5 text-black">
                            <div className="flex justify-between items-start">
                                <p className="text-right text-lg font-semibold">{selectedBank.name}</p>
                            </div>

                            <p className="mt-3 text-base font-medium">{selectedBank.accountName}</p>
                            <p className="text-sm tracking-wide">{selectedBank.accountNumber}</p>

                            <div className="mt-4">
                                <Button className="p-4" variant="default" onClick={() => handleCopy(selectedBank.rawAccountNumber)}>
                                    <Copy className="mr-2 h-4 w-4" /> Salin
                                </Button>
                                {copied && (
                                    <p className="mt-1 text-sm text-green-600">Tersalin!</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </motion.div>
        </section>
    );
};
