"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Magnetic from "./Magnetic";

export default function Hero() {
    const name = "MUHAMMAD SULEMAN ASIF";

    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/hero-bg.png"
                    alt="Professional Logistics Background"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-20 text-center px-4 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h2 className="text-blue-400 font-bold tracking-[0.4em] uppercase mb-8 text-[10px] md:text-xs opacity-70">
                        Supply Chain & Logistics Professional
                    </h2>

                    <h1 className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-[0.85] drop-shadow-[0_15px_15px_rgba(0,0,0,0.8)]">
                        MUHAMMAD <br className="hidden md:block" /> SULEMAN ASIF
                    </h1>

                    <p className="text-gray-400 text-lg md:text-2xl max-w-2xl mx-auto mb-12 font-light tracking-wide leading-relaxed">
                        Redefining Business Operations <br className="hidden md:block" /> through <span className="text-white">AI Innovation</span> & <span className="text-white">Strategic Logistics</span>
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                >
                    <Magnetic>
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all shadow-lg shadow-blue-500/30 block"
                        >
                            Contact Me
                        </a>
                    </Magnetic>
                    <Magnetic>
                        <a
                            href="#about"
                            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md rounded-full font-bold transition-all border border-white/20 block"
                        >
                            Learn More
                        </a>
                    </Magnetic>
                </motion.div>
            </div>

            {/* Floating Elements for "Wow" factor */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 right-[10%] w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"
            />
            <motion.div
                animate={{
                    y: [0, 20, 0],
                    rotate: [0, -5, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 left-[10%] w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"
            />
        </section>
    );
}
