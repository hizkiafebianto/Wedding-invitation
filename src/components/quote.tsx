import { greatVibes } from "@/app/font";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export const Quote = () => {
    return (
        <section className="bg-[#FFEBF1] py-12 px-4 text-center text-gray-800">
            <div className="max-w-4xl mx-auto px-4">
                <motion.h1 
                    className={`${greatVibes.className} text-5xl lg:text-6xl font-fleur mt-8 mb-12`}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    Quote
                </motion.h1>

                <motion.p 
                    className="italic lg:text-2xl"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {`"Tidak ada solusi yang lebih baik bagi dua insan yang saling mencintai di banding pernikahan."`}
                </motion.p>
                <motion.p 
                    className="mt-8 text-pink-800 font-bold text-xl mb-8"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    HR. Ibnu Majah
                </motion.p>
            </div>
        </section>
    )
}