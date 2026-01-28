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
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
                    }}
                    className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-black"
                >
                    <div className="relative overflow-hidden mb-8">
                        <motion.h1
                            initial={{ y: 100 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                            className="text-2xl md:text-3xl font-bold text-white tracking-[0.2em] uppercase"
                        >
                            Muhammad Suleman Asif
                        </motion.h1>
                    </div>

                    <div className="w-64 h-[1px] bg-white/10 relative overflow-hidden">
                        <motion.div
                            className="absolute inset-0 bg-blue-500 origin-left"
                            style={{ scaleX: count / 100 }}
                        />
                    </div>

                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-4 text-white/40 text-xs font-mono tracking-widest uppercase"
                    >
                        Initializing V3 Luxury Experience {count}%
                    </motion.span>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
