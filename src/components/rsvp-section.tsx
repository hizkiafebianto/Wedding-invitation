'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { greatVibes } from '@/app/font';
import { motion } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { Input } from './ui/input';
import { createDelayVariants } from '@/utils/animations';

interface RSVPData {
    id: number;
    wedding_id: number;
    name: string;
    phone: string;
    address: string;
    status: string;
    amount: number;
    events?: string[];
}

export const RSVPSection = () => {
    const searchParams = useSearchParams();
    const guestId = searchParams.get('to');
    const weddingId = Number(searchParams.get('wedding') || 1);


    const [attending, setAttending] = useState<'yes' | 'no' | null>(null);
    const [guestCount, setGuestCount] = useState(1);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [selectedEvents, setSelectedEvents] = useState<string[]>([]);
    const [existingRSVP, setExistingRSVP] = useState<RSVPData | null>(null);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");


    const flowers = [
        // kiri
        { src: "/png/9.png", className: "-left-24 top-[23px] rotate-12", direction: "right", delay: 0 },
        { src: "/png/8.png", className: "-left-12 top-24", direction: "right", delay: 0.2 },
        { src: "/png/6.png", className: "-left-20 top-40 rotate-12", direction: "right", delay: 0.4 },
        { src: "/png/15.png", className: "-left-12 top-56 rotate-12", direction: "right", delay: 0.6 },
        { src: "/png/15.png", className: "-left-12 top-64 rotate-45", direction: "right", delay: 0.8 },

        // kanan
        { src: "/png2/9.png", className: "-right-24 top-[23px] -rotate-12", direction: "left", delay: 0 },
        { src: "/png2/8.png", className: "-right-12 top-24", direction: "left", delay: 0.2 },
        { src: "/png2/6.png", className: "-right-20 top-40 -rotate-12", direction: "left", delay: 0.4 },
        { src: "/png/15.png", className: "-right-12 top-56 -rotate-12", direction: "left", delay: 0.6 },
        { src: "/png/15.png", className: "-right-12 top-64 -rotate-45", direction: "left", delay: 0.8 },
    ] as const;


    useEffect(() => {
        if (!guestId) return;

        const fetchRSVP = async () => {
            try {
                setLoading(true);
                const res = await fetch(`/api/rsvp/${guestId}`);

                if (!res.ok) throw new Error('Gagal mengambil data RSVP');
                const data = await res.json();

                if (!data || !data.id) return;
                setExistingRSVP(data);
                setSubmitted(!!data.status);

                if (data.name && !name) setName(data.name);
                if (data.phone && !phone) setPhone(data.phone);
                if (data.address && !address) setAddress(data.address);

                if(data.phone && !phone) setPhone(data.phone);

                if (data.status) {
                    setAttending(data.status === 'Saya akan datang' ? 'yes' : 'no');
                }

                if (data.amount) {
                    setGuestCount(data.amount);
                }

                if (data.events) {
                    setSelectedEvents(data.events);
                }
            } catch (err) {
                console.error('Fetch error:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchRSVP();
    }, [guestId]);

    const toggleEvent = (event: string) => {
        setSelectedEvents((prev) =>
            prev.includes(event) ? prev.filter((e) => e !== event) : [...prev, event]
        );
    };

    const selectAllEvents = () => {
        setSelectedEvents(['matrimony', 'reception']);
    };

    const handleSubmit = async () => {
        if (!attending) {
            alert("Please select your attendance status.");
            return;
        }

        if (!name.trim() || !phone.trim() || !address.trim()) {
            alert("Name, phone number, and address are required.");
            return;
        }

        const payload = {
            wedding_id: weddingId,
            name: name.trim(),
            phone: phone.trim(),
            address: address.trim(),
            amount: guestCount, //ada perubahan guest_num
            status: attending === 'yes' ? 'Saya akan datang' : 'Saya tidak bisa datang',
        };
        console.log('🟡 RSVP payload:', JSON.stringify(payload, null, 2));

        try {
            setLoading(true);

            const res = await fetch('/api/rsvp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(payload),
            });

            if (!res.ok) {
                const errorText = await res.text();
                throw new Error(`Failed to submit RSVP: ${res.status} - ${errorText}`);
            }

            const saved = await res.json();
            console.log('RSVP Saved:', saved);
            setSubmitted(true);
        } catch (err) {
            console.error('RSVP submit error:', err);
            alert(`Failed to save RSVP: ${err}`);
        } finally {
            setLoading(false);
        }
    };


    if (submitted) {
        return (
            <section id="rsvp" className="relative px-4 py-32 overflow-x-hidden text-center text-lime-900">

                {flowers.map((flower, i) => (
                    <motion.div
                        variants={createDelayVariants(flower.direction)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.3 }} 
                        key={i}
                        className={`pointer-events-none absolute z-[-1] ${flower.className}`}
                    >
                        <Image 
                            src={flower.src}
                            alt={`Flower ${i}`}
                            width={150}
                            height={150}
                        />
                    </motion.div>
                ))}

                <motion.div
                    variants={createDelayVariants("bottom")}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }}
                    className="mx-auto max-w-xl rounded-xl bg-white/70 p-6 shadow-xl"
                >
                <h2 className={`${greatVibes.className} mb-2 text-5xl`}>RSVP</h2>
                <p className="mb-4 text-sm italic">
                    Please confirm your attendance before,{' '}
                    <strong>Sept 27<sup>th</sup>, 2025</strong>
                </p>
                <div className="rounded-lg border-2 bg-white p-4 text-center">
                    <h3 className="mb-1 font-semibold text-lime-900">
                        {attending === 'yes' ? 'Will Attend' : 'Unable to Attend'}
                    </h3>
                    <p className="text-sm">
                        {attending === 'yes'
                            ? `Thank you! ${guestCount} guest(s) confirmed.`
                            : `Sorry you can't make it.`}
                    </p>

                    {attending === 'yes' && selectedEvents.length > 0 && (
                        <p className="text-sm mt-2">
                            You plan to attend:{' '}
                            {selectedEvents
                            .map((e) =>
                                e === 'matrimony'
                                ? 'Holy Matrimony'
                                : e === 'reception'
                                    ? 'Wedding Reception'
                                    : e
                            )
                            .join(' & ')}
                        </p>
                    )}
                    <Button
                        className="mt-4"
                        variant="secondary"
                        onClick={() => {
                            setSubmitted(false);
                            setSelectedEvents([]);
                        }}
                    >
                        Change
                    </Button>
                </div>
                </motion.div>
            </section>
        );
    }

    return (
        <section id="rsvp" className="relative scroll-mt-48 px-4 py-16 text-center overflow-hidden text-lime-900">

            {flowers.map((flower, i) => (
                <motion.div
                    variants={createDelayVariants(flower.direction)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }}
                    key={i}
                    className={`pointer-events-none absolute z-[-1] ${flower.className}`}
                >
                    <Image 
                        src={flower.src}
                        alt={`Flower ${i}`}
                        width={150}
                        height={150}
                    />
                </motion.div>
            ))}

            <motion.div
                variants={createDelayVariants("bottom")}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="mx-auto max-w-xl rounded-xl bg-white/70 p-6 shadow-md"
            >
                <h2 className={`${greatVibes.className} mb-2 text-5xl`}>RSVP</h2>
                <p className="mb-6 text-sm italic">
                    Please confirm your attendance before,{' '}
                    <strong>Sept 27<sup>th</sup>, 2025</strong>
                </p>

                <div className="mb-6 space-y-3">
                    <Input 
                        type="text"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <Input 
                        type="tel"
                        placeholder="Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <Input 
                        type="text"
                        placeholder="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />

                </div>

                <div className="mb-6 flex justify-center gap-4">
                <Button
                    variant={attending === 'yes' ? 'default' : 'outline'}
                    className="px-6"
                    onClick={() => setAttending('yes')}
                >
                    Will Attend
                </Button>
                <Button
                    variant={attending === 'no' ? 'default' : 'outline'}
                    className="px-6"
                    onClick={() => setAttending('no')}
                >
                    Unable To Attend
                </Button>
                </div>

                {attending === 'yes' && (
                <>
                    <div className="mb-6">
                        <p className="mb-2 font-medium">Which event will you attend?</p>
                        <div className="flex flex-col items-center gap-2">
                            <Button
                                variant={selectedEvents.includes('matrimony') ? 'default' : 'outline'}
                                className="w-64"
                                onClick={() => toggleEvent('matrimony')}
                            >
                                Holy Matrimony
                            </Button>
                            <Button
                                variant={selectedEvents.includes('reception') ? 'default' : 'outline'}
                                className="w-64"
                                onClick={() => toggleEvent('reception')}
                            >
                                Wedding Reception
                            </Button>
                            <Button
                                variant={selectedEvents.length === 2 ? 'default' : 'outline'}
                                className="w-64"
                                onClick={selectAllEvents}
                            >
                                Attend All
                            </Button>
                        </div>
                    </div>

                    <div className="mb-6">
                        <p className="mb-2 font-medium">People you bring including you?</p>
                        <div className="flex items-center justify-center gap-4">
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() => setGuestCount((c) => Math.max(1, c - 1))}
                            >
                                <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-10 text-lg font-semibold">{guestCount}</span>
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() => setGuestCount((c) => c + 1)}
                            >
                                <Plus className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </>
                )}

                <Button
                    disabled={attending === null || loading}
                    className="w-full bg-lime-800 text-white hover:bg-lime-700"
                    onClick={handleSubmit}
                >
                    {loading ? 'Saving...' : existingRSVP ? 'Update RSVP' : 'Confirm RSVP'}
                </Button>
            </motion.div>
        </section>
    );
};
