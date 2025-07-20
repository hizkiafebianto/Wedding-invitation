import { greatVibes } from '@/app/font';
import { Button } from './ui/button';

export const WeddingStreaming = () => {
    return (
        <section className="px-4 py-16 text-center">
            <h2 className={`text-5xl ${greatVibes.className} mb-8 font-semibold text-lime-900`}>
                Live Streaming
            </h2>

            <div className="relative mx-auto aspect-video w-full max-w-4xl overflow-hidden rounded-lg shadow-lg">
                <iframe
                    src="https://www.youtube.com/embed/nHRnL7rSe2U?si=nOwAwiIBN9mOIHK-"
                    title="Wedding Video"
                    className="h-full w-full"
                    allowFullScreen
                />
            </div>

            <Button variant="default" className="mt-6 w-full">
                Open Link
            </Button>
        </section>
    );
};
