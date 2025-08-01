"use client";

import { greatVibes } from '@/app/font';
import { useEffect, useState } from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { formatDistanceToNow } from 'date-fns';
import { motion } from 'framer-motion';
import { createDelayVariants } from '@/utils/animations';

const MAX_CHAR = 300;
const INITIAL_VISIBLE = 5;

interface Wish {
    id: number;
    name: string;
    address: string;
    comment: string;
    created_at: string;
}

export const WeddingWishes = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [message, setMessage] = useState('');
    const [wishes, setWishes] = useState<Wish[]>([]);
    const [loading, setLoading] = useState(false);
    const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

    useEffect(() => {
        const fetchWishes = async () => {
            try {
                setLoading(true);

                const res = await fetch('/api/wishes');
                if (!res.ok) throw new Error('Failed to etch wishes!');

                const data = await res.json();

                const sortedData = data.sort(
                    (a: Wish, b: Wish) =>
                        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
                );

                setWishes(sortedData);
            } catch (err) {
                console.log('Error fetch : ', err);
            } finally {
                setLoading(false);
            }
        };

        fetchWishes();
    }, []);

    const handleSubmit = async () => {
        if (!name || !message) {
            return alert('Name and message are required!');
        }

        const newWish = {
            wedding_id: 1,
            name,
            address,
            comment: message,
        };
        try {
            const res = await fetch('/api/wishes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(newWish),
            });

            if (!res.ok) {
                throw new Error('Failed to send wish');
            }

            const savedWish = await res.json();

            setWishes([savedWish, ...wishes]);
            setName('');
            setAddress('');
            setMessage('');
        } catch (err) {
            console.log('Error something wish:', err);
            alert('Try again');
        }
    };

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 5);
    };

    return (
        <section
            id="wedding-wishes"
            className="relative bg-cover bg-fixed bg-center px-4 py-20 text-center text-white"
            style={{ backgroundImage: "url('/background/bgwishes.jpg')" }}
        >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

            {/* Main content */}
            <div className="relative z-10 mx-auto max-w-xl">
                <motion.h2
                    variants={createDelayVariants("bottom")}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }} 
                    className={`${greatVibes.className} mb-6 text-5xl text-white`}
                >
                    Wedding Wishes
                </motion.h2>

                <motion.div
                    variants={createDelayVariants("bottom")}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }} 
                    className="mb-8 space-y-4"
                >
                    <Input
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="placeholder:text-white"
                    />
                    <Input
                        placeholder="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="placeholder:text-white"
                    />
                    <Textarea
                        placeholder="Write your wishes"
                        maxLength={MAX_CHAR}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="text-white"
                    />

                    <div className="text-left text-sm font-semibold text-white">
                        Characters left: {MAX_CHAR - message.length}
                    </div>

                    <Button className="w-full" onClick={handleSubmit}>
                        Send
                    </Button>
                </motion.div>

                {/* Wishes list */}
                {loading ? (
                    <p className="text-lime-900">Loading wishes...</p>
                ) : (
                    <div className="space-y-4">
                        {wishes.slice(0, visibleCount).map((wish, i) => (
                            <motion.div
                                variants={createDelayVariants("left")}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: false, amount: 0.3 }}
                                key={i}
                                className="rounded-xl bg-white/90 p-4 text-left shadow backdrop-blur-md"
                            >
                                <p className="font-bold text-lime-900 ">{wish.name}</p>
                                <p className="text-sm text-lime-900">{wish.comment}</p>
                                <p className="mt-1 text-xs text-lime-900">
                                    {formatDistanceToNow(new Date(wish.created_at), {
                                        addSuffix: true,
                                    })}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                )}

                {visibleCount < wishes.length && (
                    <motion.div
                        variants={createDelayVariants("bottom")}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <Button
                            variant="outline"
                            className="mt-4 wrap-break-word text-lime-900"
                            onClick={handleLoadMore}
                        >
                            Load More
                        </Button>
                    </motion.div>
                )}
            </div>
        </section>
    );
};
