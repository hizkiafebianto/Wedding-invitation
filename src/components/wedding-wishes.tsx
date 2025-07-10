"use client"

import { greatVibes } from "@/app/font";
import { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const MAX_CHAR = 300;
const INITIAL_VISIBLE = 5;

export const WeddingWishes = () => {
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [message, setMessage] = useState("")
    const [wishes, setWishes] = useState([
        {name: "Ronaldo", message: "Happy Wedding", time: "1 hour ago"},
    ])
    
    const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE)

    const handleSubmit = () => {
        if(!message) return
        setWishes([{ name, message, time: "Just Now" }, ...wishes])
        setName("")
        setAddress("")
        setMessage("")
    }

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 5)
    }

    return (
        <section className="py-20 px-4 text-center text-gray-800 bg-white/70">
            <div className="max-w-xl mx-auto">
                <h2 className={`${greatVibes.className} text-5xl mb-6`}>
                    Wedding Wishes
                </h2>

                <div className="space-y-4 mb-8">
                    <Input 
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input 
                        placeholder="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <Textarea 
                        placeholder="Write your wishes"
                        maxLength={MAX_CHAR}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />

                    <div className="text-sm text-gray-500 text-left">
                        Characters left: {MAX_CHAR - message.length}
                    </div>

                    <Button 
                        className="w-full" 
                        onClick={handleSubmit}
                    >
                        Send
                    </Button>
                </div>

                {/* wishes list */}
                <div className="space-y-4">
                    {wishes.slice(0, visibleCount).map((wish, i) => (
                        <div
                            key={i}
                            className="bg-white p-4 rounded shadow text-left"
                        >
                            <p className="font-bold">
                                {wish.name}
                            </p>
                            <p className="text-sm text-gray-700">
                                {wish.message}
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                                {wish.time}
                            </p>
                        </div>
                    ))}
                </div>

                {visibleCount < wishes.length && (
                    <Button
                        variant="outline"
                        className="mt-4"
                        onClick={handleLoadMore}
                    >
                        Load More
                    </Button>
                )}
            </div>
        </section>
    )
}