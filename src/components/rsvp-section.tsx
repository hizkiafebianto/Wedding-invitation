"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { greatVibes } from "@/app/font";
import { motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useSearchParams } from "next/navigation";

interface RSVPData {
  id: number;
  wedding_id: number;
  name: string;
  phone: string;
  address: string;
  status: string;
  amount: number;
}

export const RSVPSection = () => {
  const searchParams = useSearchParams();
  const guestId = searchParams.get("to");

  const [attending, setAttending] = useState<"yes" | "no" | null>(null);
  const [guestCount, setGuestCount] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [existingRSVP, setExistingRSVP] = useState<RSVPData | null>(null);

  // ✅ Fetch data RSVP dari API
  useEffect(() => {
    if (!guestId) {
      setErrorMsg("Guest ID tidak ditemukan.");
      return;
    }

    const fetchRSVP = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://undangundang.id/api/rsvp/${guestId}`);
        if (!res.ok) throw new Error("Gagal mengambil data RSVP");

        const data = await res.json();
        if (!data || !data.id) {
          setErrorMsg("Undangan tidak ditemukan.");
          return;
        }

        setExistingRSVP(data);
        setSubmitted(!!data.status);
        if (data.status) {
          setAttending(data.status === "Saya akan datang" ? "yes" : "no");
        }
        if (data.amount) {
          setGuestCount(data.amount);
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setErrorMsg("Terjadi kesalahan saat mengambil data RSVP.");
      } finally {
        setLoading(false);
      }
    };

    fetchRSVP();
  }, [guestId]);

  const handleSubmit = async () => {
    if (!guestId || !existingRSVP) {
      alert("Invalid Guest");
      return;
    }

    // const payload = {
    //   wedding_id: existingRSVP.wedding_id,
    //   name: existingRSVP.name,
    //   phone: existingRSVP.phone, 
    //   address: existingRSVP.address,
    //   status: attending === "yes" ? "Saya akan datang" : "Tidak bisa hadir",
    //   amount: attending === "yes" ? guestCount : 0
    // };

    const payload = {
      status: attending === "yes" ? "Saya akan datang" : "Saya tidak bisa datang",
      amount: attending === "yes" ? guestCount : 0,
    };
     console.log(payload)

// const payload: Partial<RSVPData> = {
//   status: attending === "yes" ? "Saya akan datang" : "Tidak bisa hadir",
//   ...(attending === "yes" ? { amount: guestCount } : {}),
// };

    try {
      setLoading(true);
      const res = await fetch(
        `https://undangundang.id/api/rsvp/${existingRSVP.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

//       const responseData = await res.json();
// console.log("Response:", responseData);

// if (!res.ok) throw new Error(`Failed: ${JSON.stringify(responseData)}`);

      if (!res.ok) throw new Error("Failed to update RSVP");

      const saved = await res.json();
      setExistingRSVP(saved);
      setSubmitted(true);
    } catch (err) {
      console.error("RSVP submit error:", err);
      alert("Failed to save RSVP, try again!");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Jika error
  if (errorMsg) {
    return (
      <section className="text-center text-red-600 py-10">
        <p>{errorMsg}</p>
      </section>
    );
  }

  if (loading && !submitted) {
    return <p className="text-center text-gray-500">Loading RSVP...</p>;
  }

  // ✅ Setelah Submit
  if (submitted) {
    return (
      <section className="px-4 text-center text-lime-900 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto bg-white/70 rounded-xl p-6 shadow-xl"
        >
          <h2 className={`${greatVibes.className} text-5xl mb-2`}>RSVP</h2>
          <p className="mb-4 italic text-sm">
            Please confirm your attendance before,{" "}
            <strong>
              Sept 27<sup>th</sup>, 2025
            </strong>
          </p>
          <div className="border-2 p-4 rounded-lg bg-white text-center">
            <h3 className="font-semibold text-lime-900 mb-1">
              {attending === "yes" ? "Will Attend" : "Unable to Attend"}
            </h3>
            <p className="text-sm">
              {attending === "yes"
                ? `Thank you! ${guestCount} guest(s) confirmed.`
                : `Sorry you can't make it.`}
            </p>
            <Button
              className="mt-4"
              variant="secondary"
              onClick={() => setSubmitted(false)}
            >
              Change
            </Button>
          </div>
        </motion.div>
      </section>
    );
  }

  // ✅ Form RSVP
  return (
    <section
      id="rsvp"
      className="px-4 text-center text-lime-900 relative scroll-mt-48"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl mx-auto bg-white/70 rounded-xl p-6 shadow-md"
      >
        <h2 className={`${greatVibes.className} text-5xl mb-2`}>RSVP</h2>
        <p className="mb-6 italic text-sm">
          Please confirm your attendance before,{" "}
          <strong>
            Sept 27<sup>th</sup>, 2025
          </strong>
        </p>

        <div className="flex justify-center gap-4 mb-6">
          <Button
            variant={attending === "yes" ? "default" : "outline"}
            className="px-6"
            onClick={() => setAttending("yes")}
          >
            Will Attend
          </Button>
          <Button
            variant={attending === "no" ? "default" : "outline"}
            className="px-6"
            onClick={() => setAttending("no")}
          >
            Unable To Attend
          </Button>
        </div>

        {attending === "yes" && (
          <>
            <p className="mb-2 font-medium">People you bring including you?</p>
            <div className="flex items-center justify-center gap-4 mb-6">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setGuestCount((c) => Math.max(1, c - 1))}
              >
                <Minus className="w-4 h-4" />
              </Button>
             

              <span className="text-lg font-semibold w-10">{guestCount}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setGuestCount((c) => c + 1)}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </>
        )}

        <Button
          disabled={attending === null || loading}
          className="bg-lime-800 text-white hover:bg-lime-700 w-full"
          onClick={handleSubmit}
        >
          {loading
            ? "Saving..."
            : existingRSVP
            ? "Update RSVP"
            : "Confirm RSVP"}
        </Button>
      </motion.div>
    </section>
  );
};
