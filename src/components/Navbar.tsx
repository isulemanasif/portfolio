"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md py-4 border-b border-white/10" : "bg-transparent py-6"}`}>
            <div className="container mx-auto px-6 flex items-center justify-between">
                <div className="text-2xl font-black text-white tracking-tighter">
                    MS<span className="text-blue-500">A</span>.
                </div>

                <div className="hidden md:flex items-center gap-8">
                    {["About", "Skills", "Contact"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-gray-400 hover:text-white transition-colors text-sm font-medium uppercase tracking-widest"
                        >
                            {item}
                        </a>
                    ))}
                    <a
                        href="mailto:i.sulemanasif@gmail.com"
                        className="px-6 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all"
                    >
                        LET'S TALK
                    </a>
                </div>
            </div>
        </nav>
    );
}
