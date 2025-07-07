import { greatVibes } from "@/app/font";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
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

export const FormRSVP = () => {
    const [form, setForm] = useState({
        name: "",
        attendance: "",
        guests: "",
        message: "",
    })

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSelect = (value: string) => {
        setForm({ ...form, attendance: value })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        console.log("Form data: ", form)
        setSubmitted(true)
    }

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
                    Konfirmasi Kehadiran
                </motion.h1>
                <motion.p 
                    className="text-gray-700 mb-10 text-lg"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    Silahkan isi form berikut untuk konfirmasi kehadiran anda.
                </motion.p>

                {submitted ? (
                    <div>
                        Terima kasih! Kehadiran Anda telah dikonfirmasi.
                    </div>
                ) : (
                    <motion.form
                        onSubmit={handleSubmit}
                        className="bg-[#FBBDD0] backdrop-blur-md p-8 rounded-xl shadow-xl space-y-6 text-left"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {/* Nama */}
                        <div>
                            <Label htmlFor="name" className="mb-2">Nama</Label>
                            <Input 
                                id="name"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                placeholder="Tuliskan nama anda"
                                className="bg-white text-gray-800 placeholder-gray-500 border border-gray-300 focus:border-pink-500 focus:ring-pink-500"
                            />
                        </div>

                        {/* Kehadiran */}
                        <div>
                            <Label htmlFor="attendance" className="mb-2">Apakah anda akan hadir?</Label>
                            <Select onValueChange={handleSelect} required>
                                <SelectTrigger className="w-full bg-white text-gray-800 placeholder-gray-500 border border-gray-300 focus:border-pink-500 focus:ring-pink-500" >
                                    <SelectValue placeholder="Pilih salah satu" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Hadir">Hadir</SelectItem>
                                    <SelectItem value="Tidak Hadir">Tidak Hadir</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* message */}
                        <div>
                            <Label htmlFor="message" className="mb-2" >Ucapan / Pesan</Label>
                            <Textarea 
                                id="message"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Tulis doa atau ucapan untuk pengantin"
                                className="bg-white text-gray-800 placeholder-gray-500 border border-gray-300 focus:border-pink-500 focus:ring-pink-500"
                            />
                        </div>

                        {/* Submit */}
                        <Button
                            variant="pink"
                            className="text-gray-800 bg-white"
                        >
                            Kirim Kehadiran
                        </Button>
                    </motion.form>
                )}
            </div>
        </section>
    )
}