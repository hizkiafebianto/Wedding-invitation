"use client"

import { greatVibes } from "@/app/font";
import { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import Image from "next/image";

const MAX_CHAR = 300;
const INITIAL_VISIBLE = 5;

export const WeddingWishes = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [wishes, setWishes] = useState([
    { name: "Ronaldo", message: "Happy Wedding", time: "1 hour ago" },
  ]);

  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const handleSubmit = () => {
    if (!message) return;
    setWishes([{ name, message, time: "Just Now" }, ...wishes]);
    setName("");
    setAddress("");
    setMessage("");
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  return (
    <section className="relative py-20 px-4 text-center text-lime-900">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/background/bgwishes.jpg"
          alt="Wedding Wishes Background"
          fill
          className="object-cover object-center"
          quality={100}
        />
        {/* Optional overlay */}
        <div className="absolute inset-0 bg-white/70" />
      </div>

      {/* Main content */}
      <div className="max-w-xl mx-auto relative z-10">
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
            className="text-lime-900"
          />

          <div className="text-sm font-semibold text-lime-900 text-left">
            Characters left: {MAX_CHAR - message.length}
          </div>

          <Button className="w-full" onClick={handleSubmit}>
            Send
          </Button>
        </div>

        {/* Wishes list */}
        <div className="space-y-4">
          {wishes.slice(0, visibleCount).map((wish, i) => (
            <div
              key={i}
              className="bg-white/90 p-4 rounded shadow text-left backdrop-blur-sm"
            >
              <p className="font-bold">{wish.name}</p>
              <p className="text-sm text-lime-900">{wish.message}</p>
              <p className="text-xs text-lime-900 mt-1">{wish.time}</p>
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
  );
};
