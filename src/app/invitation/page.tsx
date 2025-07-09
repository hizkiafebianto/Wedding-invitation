"use client"

import { Alquran } from "@/components/alquran";
import { AudioProvider } from "@/components/audio-provider";
// import { AudioPlayer } from "@/components/audio-player";
import { BrideGroom, GroomSection } from "@/components/groom";
import { Countdown } from "@/components/countdown";
import { FormRSVP } from "@/components/form-rsvp";
import { Gallery } from "@/components/gallery";
import { Gift } from "@/components/gift";
import { Hero } from "@/components/hero";
import { Quote } from "@/components/quote";
import { Rounddown } from "@/components/roundown";
import { OurStory, Story } from "@/components/story";
import { TwoColumnLayout } from "@/components/two-column-layout";
import { BrideSection } from "@/components/bride";
import { WeddingVideo } from "@/components/wedding-video";

export default function InvitationPage() {
  return (
    <TwoColumnLayout>
      <Hero />
      <Quote />
      <Countdown />
      <GroomSection />
      <BrideSection />
      <OurStory />
      <Gallery />
      <WeddingVideo />
    </TwoColumnLayout>
  );
}
