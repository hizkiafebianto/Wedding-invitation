import { Variants } from "framer-motion";

export const getRandomDelay = (): string => `${(Math.random() * 4).toFixed(2)}s`;

export const createDelayVariants = (direction: "left" | "right" | "bottom"): Variants => {
    const x = direction === "left" ? -150 : direction === "right" ? 150 : 0;
    const y = direction === "bottom" ? 100 : 0;

    return {
        hidden: { opacity: 0, x, y },
        show: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 1.2,
                ease: "easeInOut",
                delay: Math.random() * 0.6,
            },
        },
    };
};

export const container: Variants = {
        hidden: {},
        show: {
            transition: {
                delayChildren: 1.3,
                staggerChildren: 0.3,
            },
        },
    };

export const item: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: 'easeOut',
        },
    },
};


export const fadeIn: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1,
            ease: 'easeOut',
        },
    },
};
