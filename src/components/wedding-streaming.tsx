import { greatVibes } from '@/app/font';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { createDelayVariants } from '@/utils/animations';

export const WeddingStreaming = () => {
    return (
        <section id="wedding-streaming" className="px-4 py-16 text-center">
            <motion.h2
                variants={createDelayVariants("bottom")}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }} 
                className={`text-5xl ${greatVibes.className} mb-8 font-semibold text-lime-900`}
            >
                Live Streaming
            </motion.h2>

            <motion.div
                variants={createDelayVariants("bottom")}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }} 
                className="relative mx-auto aspect-video w-full max-w-4xl overflow-hidden rounded-lg shadow-lg"
            >
                <iframe
                    src="https://www.youtube.com/embed/nHRnL7rSe2U?si=nOwAwiIBN9mOIHK-"
                    title="Wedding Video"
                    className="h-full w-full"
                    allowFullScreen
                />
            </motion.div>

            <motion.div
                variants={createDelayVariants("bottom")}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
            >
                <Button variant="default" className="mt-6 w-full">
                    Open Link
                </Button>
            </motion.div>
        </section>
    );
};
