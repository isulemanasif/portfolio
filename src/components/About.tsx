"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, GraduationCap, Languages, BrainCircuit } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-24 bg-zinc-950 relative overflow-hidden z-0">
            <div className="container mx-auto px-6 relative z-20">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* image side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="relative w-full aspect-square max-w-md mx-auto group">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative z-20 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
                                <Image
                                    src="/suleman.jpeg"
                                    alt="Muhammad Suleman Asif"
                                    width={500}
                                    height={500}
                                    className="object-cover transition duration-500 group-hover:scale-110"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* info side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 space-y-8"
                    >
                        <div>
                            <h4 className="text-blue-500 font-semibold mb-2 flex items-center gap-2 uppercase tracking-widest text-sm">
                                <BrainCircuit size={18} /> About Me
                            </h4>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Supply Chain Expert & <br />Business Strategist
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                I am <span className="text-white font-medium">Muhammad Suleman Asif</span>, a results-driven professional currently based in <span className="text-white font-medium">Islamabad</span>, originally from the beautiful land of <span className="text-white font-medium">Bannu, KPK</span>.
                            </p>
                            <p className="text-gray-400 text-lg leading-relaxed mt-4">
                                With a solid foundation in Business Administration and a deep-rooted expertise in Supply Chain Management, I am actively seeking <span className="text-white font-medium">professional career opportunities</span> to contribute my logistics knowledge to large-scale business operations. I am also fascinated by IT and the transformative power of AI in modern industry.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                                <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400"><GraduationCap size={24} /></div>
                                <div>
                                    <h4 className="text-white font-semibold">Education</h4>
                                    <p className="text-gray-400 text-sm">BBA Student (Current)</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                                <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400"><MapPin size={24} /></div>
                                <div>
                                    <h4 className="text-white font-semibold">Location</h4>
                                    <p className="text-gray-400 text-sm">Islamabad / Bannu, KPK</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                                <div className="p-2 bg-green-500/20 rounded-lg text-green-400"><Languages size={24} /></div>
                                <div>
                                    <h4 className="text-white font-semibold">Languages</h4>
                                    <p className="text-gray-400 text-sm">English, Urdu, Pashto</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
