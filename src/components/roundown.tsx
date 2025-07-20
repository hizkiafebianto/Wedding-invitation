import { greatVibes } from '@/app/font';
import { Button } from './ui/button';
import { FaMapLocationDot } from 'react-icons/fa6';
import { motion, Variants } from 'framer-motion';

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
};

const eventList = [
    {
        title: 'Akad Nikah',
        date: 'Sabtu, 12 Oktober 2025',
        time: 'Pukul 08.00 - 10.00 WIB',
        place: 'Rumah Mempelai Wanita',
        address: 'Jl. Gatot Subroto No. 45',
        mapsUrl:
            'https://www.google.com/maps/place/Osaka,+Japan/@34.6777115,135.4036368,12z/data=!4m6!3m5!1s0x6000e6553406e2e1:0xc55bc16ee46a2fe7!8m2!3d34.6937249!4d135.5022535!16zL20vMGRxeXc?entry=ttu',
    },
    {
        title: 'Resepsi',
        date: 'Sabtu, 12 Oktober 2025',
        time: 'Pukul 11.00 - 13.00 WIB',
        place: 'Gedung Serbaguna Sakura',
        address: 'Jl. Melati Raya No. 10',
        mapsUrl:
            'https://www.google.com/maps/place/Osaka,+Japan/@34.6777115,135.4036368,12z/data=!4m6!3m5!1s0x6000e6553406e2e1:0xc55bc16ee46a2fe7!8m2!3d34.6937249!4d135.5022535!16zL20vMGRxeXc?entry=ttu',
    },
];

export const Rounddown = () => {
    return (
        <section className="bg-[#FFEBF1] px-4 py-12 text-center text-gray-800">
            <div className="mx-auto max-w-4xl px-4">
                <motion.h1
                    className={`${greatVibes.className} font-fleur mb-8 text-5xl lg:text-6xl`}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    Weddings
                </motion.h1>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {eventList.map((event, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col gap-y-1 rounded-2xl bg-[#FBBDD0] p-6 shadow-xl"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <motion.h3
                                className="mb-2 text-3xl font-bold"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                {event.title}
                            </motion.h3>
                            <motion.p
                                className="text-lg font-bold text-white"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                {event.date}
                            </motion.p>
                            <motion.p
                                className="text-lg"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                {event.time}
                            </motion.p>
                            <motion.p
                                className="text-lg"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                {event.place}
                            </motion.p>
                            <motion.p
                                className="text-base"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                {event.address}
                            </motion.p>

                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <div className="mt-8">
                                    <Button
                                        variant="pink"
                                        className="bg-white"
                                        onClick={() =>
                                            window.open(
                                                event.mapsUrl,
                                                '_blank',
                                                'noopener,noreferrer'
                                            )
                                        }
                                    >
                                        <FaMapLocationDot />
                                        Lihat Lokasi
                                    </Button>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
