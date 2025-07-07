import { greatVibes } from "@/app/font";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
}

const people = [
    {
        img: "/fiersa.jpg",
        name: "Fiersa",
        fullName: "Fiersa Besari",
        desc: "Putra Pertama dari Bapak A & Ibu B",
        address: "Jl. Indonesia Merdeka No.45 Indonesia",
    },
    {
        img: "/aqia.png",
        name: "Aqia",
        fullName: "Siti Aqia Nurfadla",
        desc: "Putri Pertama dari Bapak A & Ibu B",
        address: "Jl. Indonesia Raya No.17 Indonesia",
    }
]

export const BrideGroom = () => {
    return (
        <section className="bg-[#FFEBF1] py-16 px-4 sm:px-6 lg:px-8 text-center text-gray-800">

                <motion.h2 
                    className={`${greatVibes.className} text-5xl lg:text-6xl font-fleur mb-8`}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    Bride & Groom
                </motion.h2>

                <div className="flex flex-col justify-center items-center max-w-4xl mx-auto">
                    <motion.p 
                        className="text-lg mb-2 lg:text-xl"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        Assalamu’alaikum Warahmatullahi Wabarakatuh
                    </motion.p>

                    <motion.p 
                        className="text-lg mb-2 lg:text-xl"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        Maha suci Allah SWT yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah, perkenankanlah kami merangkai kasih sayang yang Kau ciptakan di antara putra-putri kami:
                    </motion.p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                        {people.map((person, i) => (
                            <motion.div 
                                key={i}
                                className="text-center flex flex-col gap-y-1"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <motion.div
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    <Image 
                                        src={person.img} 
                                        alt={person.name} 
                                        width={180} 
                                        height={180}
                                        className="mt-8 rounded-full object-cover mx-auto shadow-md mb-2"   
                                    />
                                </motion.div>

                                <motion.h2 
                                    className="text-3xl font-medium"
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    {person.name}
                                </motion.h2>
                                <motion.h2 
                                    className="text-2xl"
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    {person.fullName}
                                </motion.h2>
                                <motion.p 
                                    className="text-base"
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    {person.desc}
                                </motion.p>
                                <motion.p
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    {person.address}
                                </motion.p>
                            </motion.div>
                        ))}
                    </div>
                
            </div>
        </section>
    )
}