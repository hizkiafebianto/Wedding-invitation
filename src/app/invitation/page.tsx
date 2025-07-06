"use client"

import { Alquran } from "@/components/alquran";
import { BrideGroom } from "@/components/bride-groom";
import { Countdown } from "@/components/countdown";
import { FormRSVP } from "@/components/form-rsvp";
import { Gallery } from "@/components/gallery";
import { Gift } from "@/components/gift";
import { Hero } from "@/components/hero";
import { Quote } from "@/components/quote";
import { Rounddown } from "@/components/roundown";
import { Story } from "@/components/story";

export default function InvitationPage() {
  return (
    <div>
        <Hero />
        <Countdown />
        <Alquran />
        <BrideGroom />
        <Rounddown />
        <Gallery />
        <Story />
        <Quote />
        <Gift />
        <FormRSVP />
    </div>
  );
}
