import { greatVibes } from "@/app/font"
import { Button } from "./ui/button"
import { FaMapLocationDot } from "react-icons/fa6";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
}

export const Rounddown = () => {
    return (
        <section className="bg-[#FFEBF1] py-12 px-4 text-center text-gray-800">
            <div className="max-w-4xl mx-auto px-4">
                
                    <motion.h1 
                        className={`${greatVibes.className} text-5xl lg:text-6xl font-fleur mb-8`}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        Weddings
                    </motion.h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* akad */}
                        <motion.div 
                            className="bg-[#FBBDD0] flex flex-col gap-y-1 shadow-xl rounded-2xl p-6"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <motion.h3 
                                className="text-3xl font-bold mb-2"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                Akah Nikah
                            </motion.h3>
                            <motion.p 
                                className="text-white font-bold text-lg"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                Saturday, October 12, 2024
                            </motion.p>
                            <motion.p 
                                className="text-lg"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                Pukul 08.00 - 10.00 WIB
                            </motion.p>
                            <motion.p 
                                className="text-lg"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                Rumah Mempelai Wanita
                            </motion.p>
                            <motion.p 
                                className="text-base"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                Jl. Gatot Subroto
                            </motion.p>
                            
                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <Button 
                                    variant="pink" 
                                    className="bg-white mt-8"
                                    onClick={() =>
                                        window.open(
                                        "https://www.google.com/maps/place/Osaka,+Japan/@34.6777115,135.4036368,12z/data=!4m6!3m5!1s0x6000e6553406e2e1:0xc55bc16ee46a2fe7!8m2!3d34.6937249!4d135.5022535!16zL20vMGRxeXc?entry=ttu",
                                        "_blank",
                                        "noopener,noreferrer"
                                        )
                                    }
                                >
                                    <FaMapLocationDot />
                                    Lihat Lokasi
                                </Button>
                               
                            </motion.div>
                        </motion.div>

                        <motion.div 
                            className="bg-[#FBBDD0] flex flex-col gap-y-1 shadow-xl rounded-2xl p-6"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <motion.h3 
                                className="text-3xl font-bold mb-2"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                Resepsi
                            </motion.h3>
                            <motion.p 
                                className="text-white font-bold text-lg"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                Saturday, October 12, 2024
                            </motion.p>
                            <motion.p 
                                className="text-lg"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                Pukul 08.00 - 10.00 WIB
                            </motion.p>
                            <motion.p 
                                className="text-lg"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                Rumah Mempelai Wanita
                            </motion.p>
                            <motion.p 
                                className="text-base"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                Jl. Gatot Subroto
                            </motion.p>
                            
                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <Button 
                                    variant="pink" 
                                    className="bg-white mt-8"
                                    onClick={() =>
                                        window.open(
                                        "https://www.google.com/maps/place/Osaka,+Japan/@34.6777115,135.4036368,12z/data=!4m6!3m5!1s0x6000e6553406e2e1:0xc55bc16ee46a2fe7!8m2!3d34.6937249!4d135.5022535!16zL20vMGRxeXc?entry=ttu",
                                        "_blank",
                                        "noopener,noreferrer"
                                        )
                                    }
                                >
                                    <FaMapLocationDot />
                                    Lihat Lokasi
                                </Button>
                               
                            </motion.div>
                        </motion.div>

                    </div>
                
            </div>
        </section>
    )
}