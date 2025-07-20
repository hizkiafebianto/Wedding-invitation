'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Button } from './ui/button';
import { Copy } from 'lucide-react';
import { greatVibes } from '@/app/font';

const banks = [
    {
        name: 'Bank BCA',
        accountNumber: '206 074 3137',
        rawAccountNumber: '2060743137',
        accountName: 'Hizkia Febianto',
        qrCode: null,
    },
    {
        name: 'Bank Mandiri',
        accountNumber: '1340021425441',
        rawAccountNumber: '1340021425441',
        accountName: 'Hizkia Febianto',
        qrCode: '/qris.png',
    },
];

export const GiftSection = () => {
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    const handleCopy = (text: string, index: number) => {
        navigator.clipboard.writeText(text);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 1500);
    };

    return (
        <section id="gift" className="relative px-4 py-20 text-center text-lime-900">
            <div className="mx-auto max-w-xl rounded-xl bg-white/70 p-6 shadow-md">
                <h2 className={`mb-4 font-serif text-5xl ${greatVibes.className}`}>E-Gift</h2>
                <p className="mb-6 text-sm">
                    If you want to give a gift we provide a digital envelope to make it easier for
                    you. Thank you
                </p>

                {banks.map((bank, index) => (
                    <div className="mb-10 text-center" key={bank.name}>
                        <h3 className="text-lg font-semibold">{bank.name}</h3>
                        <p className="text-sm">Account Number:</p>
                        <p className="font-semibold text-lime-900">{bank.accountNumber}</p>
                        <p className="text-sm">Account Name:</p>
                        <p className="mb-3 font-semibold">{bank.accountName}</p>

                        {bank.qrCode && (
                            <div className="mb-4 flex justify-center">
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
                            <Copy className="mr-2 h-4 w-4" /> Copy
                        </Button>

                        {copiedIndex === index && (
                            <p className="mt-2 text-sm text-green-600">Copied</p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};
