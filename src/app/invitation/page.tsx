'use client';

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
import { EventHoly } from '@/components/event-holy';
import { EventWedding } from '@/components/event-wedding';
import { EventDresscode } from '@/components/dresscode-holy';
import { RSVPSection } from '@/components/rsvp-section';
import { WeddingWishes } from '@/components/wedding-wishes';
import { WeddingStreaming } from '@/components/wedding-streaming';
import { ThankSection } from '@/components/thank-section';

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
    );
}
