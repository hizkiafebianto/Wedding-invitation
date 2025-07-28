'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { greatVibes } from '@/app/font';
import { motion } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

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

    const [attending, setAttending] = useState<'yes' | 'no' | null>(null);
    const [guestCount, setGuestCount] = useState(1);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [selectedEvents, setSelectedEvents] = useState<string[]>([]);
    const [existingRSVP, setExistingRSVP] = useState<RSVPData | null>(null);

    useEffect(() => {
        if (!guestId) return;

        const fetchRSVP = async () => {
        try {
            setLoading(true);
            const res = await fetch(`https://undangundang.id/api/rsvp/${guestId}`);
            if (!res.ok) throw new Error('Gagal mengambil data RSVP');

            const data = await res.json();
            if (!data || !data.id) return;

            setExistingRSVP(data);
            setSubmitted(!!data.status);
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
            alert('Pilih status RSVP terlebih dahulu');
            return;
        }

    const payload = {
        status: attending === 'yes' ? 'Saya akan datang' : 'Saya tidak bisa datang',
        amount: attending === 'yes' ? guestCount : 0,
        events: attending === 'yes' ? selectedEvents : [],
    };

    if (!guestId || !existingRSVP) {
        setSubmitted(true);
        return;
    }

    try {
        setLoading(true);
        const res = await fetch(`https://undangundang.id/api/rsvp/${existingRSVP.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (!res.ok) throw new Error('Failed to update RSVP');

        const saved = await res.json();
        setExistingRSVP(saved);
        setSubmitted(true);
    } catch (err) {
        console.error('RSVP submit error:', err);
        alert('Failed to save RSVP, try again!');
    } finally {
        setLoading(false);
    }
  };

    if (submitted) {
        return (
            <section id="rsvp" className="relative px-4 text-center text-lime-900">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
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
        <section id="rsvp" className="relative scroll-mt-48 px-4 text-center text-lime-900">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mx-auto max-w-xl rounded-xl bg-white/70 p-6 shadow-md"
            >
                <h2 className={`${greatVibes.className} mb-2 text-5xl`}>RSVP</h2>
                <p className="mb-6 text-sm italic">
                    Please confirm your attendance before,{' '}
                    <strong>Sept 27<sup>th</sup>, 2025</strong>
                </p>

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
