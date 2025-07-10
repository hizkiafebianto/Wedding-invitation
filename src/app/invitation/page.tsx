"use client"

import { Alquran } from "@/components/alquran"
import { AudioProvider } from "@/components/audio-provider"
import { BrideGroom, GroomSection } from "@/components/groom"
import { Countdown } from "@/components/countdown"
import { FormRSVP } from "@/components/form-rsvp"
import { Gallery } from "@/components/gallery"
import { Gift, GiftSection } from "@/components/gift"
import { Hero } from "@/components/hero"
import { Quote } from "@/components/quote"
import { Rounddown } from "@/components/roundown"
import { OurStory, Story } from "@/components/story"
import { TwoColumnLayout } from "@/components/two-column-layout"
import { BrideSection } from "@/components/bride"
import { WeddingVideo } from "@/components/wedding-video"
import { EventDetails, EventHoly } from "@/components/event-holy"
import { EventWedding } from "@/components/event-wedding"
import { EventDresscode } from "@/components/dresscode-holy"
import { RSVPSection } from "@/components/rsvp-section"
import { WeddingWishes } from "@/components/wedding-wishes"
import { WeddingStreaming } from "@/components/wedding-streaming"
import { ThankSection } from "@/components/thank-section"

export default function InvitationPage() {
  return (
    <>
      {/* Static audio provider (play once masuk invitation) */}
      <AudioProvider />

      <TwoColumnLayout>
        <Hero />
        <Quote />
        <Countdown />
        <GroomSection />
        <BrideSection />
        <OurStory />
        <Gallery />
        <WeddingVideo />
        <EventHoly />
        <EventWedding />
        <EventDresscode />
        <RSVPSection />
        <WeddingStreaming />
        <GiftSection />
        <WeddingWishes />
        <ThankSection />
      </TwoColumnLayout>
    </>
  )
}
