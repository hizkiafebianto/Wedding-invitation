"use client"

import { greatVibes } from "@/app/font";
import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { formatDistanceToNow } from "date-fns";


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
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [loading, setLoading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  useEffect(() =>{
      const fetchWishes = async () => {
          try {
              setLoading(true);

              const res = await fetch("https://undangundang.id/api/wishes");
              if(!res.ok) throw new Error("Failed to etch wishes!")

                  const data = await res.json();

                  const sortedData = data.sort(
                      (a: Wish, b: Wish) => 
                          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
                  )

                  setWishes(sortedData)
          } catch (err) {
              console.log("Error fetch : ", err)
          } finally {
              setLoading(false)
          }
      }

      fetchWishes();
  }, [])

  const handleSubmit = async () => {
      if(!name || !message) {
          return alert("Name and message are required!");
      }

      const newWish = {
          wedding_id: 1,
          name,
          address,
          comment: message,
      }
      try{
          const res = await fetch("https://undangundang.id/api/wishes", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json"
              },
              body: JSON.stringify(newWish),
          })

          if (!res.ok) {
              throw new Error("Failed to send wish");
          }

          const savedWish = await res.json()

          setWishes([savedWish, ...wishes]);
          setName("");
          setAddress("");
          setMessage("");
      } catch (err) {
          console.log("Error something wish:", err)
          alert("Try again")
      }
  }

  const handleLoadMore = () => {
      setVisibleCount((prev) => prev + 5);
  }


  return (
    <section 
        className="relative py-20 px-4 text-center text-white bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/background/bgwishes.jpg')" }}
    >

      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
    
      {/* Main content */}
      <div className="max-w-xl mx-auto relative z-10">
        <h2 className={`${greatVibes.className} text-5xl mb-6 text-white`}>
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
            className="text-white"
          />

          <div className="text-sm font-semibold text-white text-left">
              Characters left: {MAX_CHAR - message.length}
          </div>

          <Button className="w-full" onClick={handleSubmit}>
            Send
          </Button>
        </div>

        {/* Wishes list */}
        {loading ? (
            <p className="text-lime-900">Loading wishes...</p>
        ) : (
            <div className="space-y-4">
                {wishes.slice(0, visibleCount).map((wish, i) => (
                    <div
                        key={i}
                        className="bg-white/90 p-4 rounded-xl shadow text-left backdrop-blur-md"
                    >
                        <p className="font-bold text-lime-900">
                            {wish.name}
                        </p>
                        <p className="text-sm text-lime-900">
                            {wish.comment}
                        </p>
                        <p className="text-xs text-lime-900 mt-1">
                            {formatDistanceToNow(new Date(wish.created_at), { addSuffix: true })}
                        </p>
                    </div>
                ))}
            </div>
        )}

        {visibleCount < wishes.length && (
          <Button
            variant="outline"
            className="mt-4 text-lime-900 wrap-break-word"
            onClick={handleLoadMore}
          >
            Load More
          </Button>
        )}
      </div>
    </section>
  );
};
