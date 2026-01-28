"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(() => setLoading(false), 500);
                    return 100;
                }
                return prev + 1;
            });
        }, 20);

        return () => clearInterval(timer);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    key="preloader"
                    initial={{ opacity: 1 }}
                    exit={{
                        y: "-100%",
                        opacity: 0,
                        transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
                    }}
                    className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-black overflow-hidden"
                >
                    {/* luxury background glow */}
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.1, 0.2, 0.1]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[100px]"
                    />

                    <div className="relative overflow-hidden mb-8">
                        <motion.h1
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                            className="text-3xl md:text-4xl font-black text-white tracking-[0.4em] uppercase"
                        >
                            Suleman Asif
                        </motion.h1>
                    </div>

                    <div className="w-64 h-[2px] bg-white/5 relative overflow-hidden rounded-full">
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 origin-left"
                            style={{ scaleX: count / 100 }}
                        />
                    </div>

                    <div className="mt-8 flex flex-col items-center gap-2">
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-white/40 text-[10px] font-bold tracking-[0.3em] uppercase"
                        >
                            Experience V3 Luxury
                        </motion.span>
                        <motion.span
                            className="text-white font-mono text-lg"
                        >
                            {count.toString().padStart(3, '0')}
                        </motion.span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
