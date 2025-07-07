import { greatVibes } from "@/app/font";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3, // delay antar item
    },
  },
}

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



export const Story = () => {
    const stories = [
        {
            title: "Pertama Kenal",
            date: "Januari 2020",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt ut, recusandae maxime reprehenderit facere vel ab a! Error, laboriosam! Explicabo?",
            image: "/story1.jpg",
            
        },
        {
            title: "Menyatakan Cinta",
            date: "Januari 2020",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt ut, recusandae maxime reprehenderit facere vel ab a! Error, laboriosam! Explicabo?",
            image: "/story2.jpg",
        },
        {
            title: "Tunangan",
            date: "Januari 2020",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt ut, recusandae maxime reprehenderit facere vel ab a! Error, laboriosam! Explicabo?",
            image: "/tunangan.jpg",
        },
    ]

    return (
        <section 
            className="relative bg-fixed bg-center bg-cover py-36 "
            style={{ backgroundImage: "url('/wisteria1.jpg')" }}
        >
            <div className="absolute inset-0 backdrop-blur-xs bg-black/40 z-0" />
                <div className="relative z-10 max-w-4xl mx-auto px-4 text-white text-center -mt-14">
                    <motion.h1 
                        className={`${greatVibes.className} text-5xl lg:text-6xl font-fleur mb-8`}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        Our Story
                    </motion.h1>

                    <motion.div 
                        className="space-y-10 text-left flex flex-col items-center justify-center"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {stories.map((story, i) => (
                            <>
                                <motion.div
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true, amount: 0.3 }}
                                    key={i} 
                                    className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-md border border-white/30 w-full max-w-9xl lg:w-[1300px] flex flex-col md:flex-row gap-6 items-center"
                                >
                                    <motion.div 
                                        className="flex-shrink-0"
                                        variants={fadeUp}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: true, amount: 0.3 }}
                                    >
                                        <Image 
                                            src={story.image}
                                            alt={story.title}
                                            width={120}   
                                            height={120}
                                            className="mt-8 rounded-full object-cover mx-auto shadow-md mb-2"
                                        />
                                    </motion.div>
                                    <div className="text-gray-800">
                                        <motion.h3 
                                            className="text-2xl font-semibold text-gray-800 mb-1 lg:text-3xl"
                                            variants={fadeUp}
                                            initial="hidden"
                                            whileInView="show"
                                            viewport={{ once: true, amount: 0.3 }}
                                        >
                                            {story.title}
                                        </motion.h3>
                                        <motion.p 
                                            className="text-sm text-gray-800 italic mb-2"
                                            variants={fadeUp}
                                            initial="hidden"
                                            whileInView="show"
                                            viewport={{ once: true, amount: 0.3 }}
                                        >
                                            {story.date}
                                        </motion.p>
                                        <motion.p 
                                            className="text-gray-800 leading-relaxed lg:text-xl"
                                            variants={fadeUp}
                                            initial="hidden"
                                            whileInView="show"
                                            viewport={{ once: true, amount: 0.3 }}
                                        >
                                            {story.text}
                                        </motion.p>
                                    </div>
                                </motion.div>
                            </>
                        ))}
                    </motion.div>
                </div>
            
        </section>
    )
}