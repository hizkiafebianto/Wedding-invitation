"use client"

import { Alquran } from "@/components/alquran";
import { BrideGroom } from "@/components/bride-groom";
import { Countdown } from "@/components/countdown";
import { Hero } from "@/components/hero";

export default function InvitationPage() {
  return (
    <div>
        <Hero />
        <Countdown />
        <Alquran />
        <BrideGroom />
    </div>
  );
}
