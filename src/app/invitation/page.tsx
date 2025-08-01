'use client';

import { Suspense } from 'react';

import { AudioProvider } from '@/components/audio-provider';
import { GroomSection } from '@/components/groom';
import { Countdown } from '@/components/countdown';
import { Gallery } from '@/components/gallery';
import { GiftSection } from '@/components/gift';
import { Hero } from '@/components/hero';
import { Quote } from '@/components/quote';
import { OurStory } from '@/components/story';
import { TwoColumnLayout } from '@/components/two-column-layout';
import { BrideSection } from '@/components/bride';
import { WeddingVideo } from '@/components/wedding-video';
import { EventDresscode } from '@/components/dresscode-holy';
import { RSVPSection } from '@/components/rsvp-section';
import { WeddingWishes } from '@/components/wedding-wishes';
import { WeddingStreaming } from '@/components/wedding-streaming';
import { ThankSection } from '@/components/thank-section';
import { EventSection } from '@/components/event-section';

export default function InvitationPage() {
    return (
        <>
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
                <EventSection />
                <EventDresscode />

                {/* ⬇️ Bungkus RSVPSection dengan Suspense */}
                <Suspense fallback={<div>Loading RSVP...</div>}>
                    <RSVPSection />
                </Suspense>

                <WeddingStreaming />
                <GiftSection />
                <WeddingWishes />
                <ThankSection />
            </TwoColumnLayout>
        </>
    );
}
