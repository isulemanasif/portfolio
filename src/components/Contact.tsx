"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github } from "lucide-react";
import Magnetic from "./Magnetic";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-zinc-950">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto rounded-3xl overflow-hidden bg-black border border-white/10 backdrop-blur-xl p-12 text-center relative z-10 shadow-2xl"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 -z-10 opacity-50"></div>
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Connect</h2>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                I am open to professional career opportunities in Supply Chain and Logistics. Feel free to reach out for collaborations or potential roles.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                            <Magnetic>
                                <a href="mailto:i.sulemanasif@gmail.com" className="flex flex-col items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                                    <div className="p-5 bg-white/5 rounded-2xl group-hover:bg-blue-600/30 transition-all border border-white/10">
                                        <Mail size={32} className="text-blue-400" />
                                    </div>
                                    <span className="font-medium">Email Me</span>
                                </a>
                            </Magnetic>

                            <Magnetic>
                                <a href="tel:+923159776477" className="flex flex-col items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                                    <div className="p-5 bg-white/5 rounded-2xl group-hover:bg-green-600/30 transition-all border border-white/10">
                                        <Phone size={32} className="text-green-400" />
                                    </div>
                                    <span className="font-medium">Call Me</span>
                                </a>
                            </Magnetic>

                            <Magnetic>
                                <a href="https://github.com/isulemanasif" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                                    <div className="p-5 bg-white/5 rounded-2xl group-hover:bg-black/30 transition-all border border-white/10">
                                        <Github size={32} className="text-white" />
                                    </div>
                                    <span className="font-medium">GitHub</span>
                                </a>
                            </Magnetic>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
