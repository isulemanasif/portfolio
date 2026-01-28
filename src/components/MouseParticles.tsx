"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function MouseParticles() {
    const [dots, setDots] = useState<{ id: number; delay: number }[]>([]);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Mouse move handler
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    // Create random dots on mount
    useEffect(() => {
        const newDots = Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            delay: Math.random() * 5,
        }));
        setDots(newDots);
    }, []);

    const springConfig = { damping: 25, stiffness: 150 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    return (
        <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
            {/* Primary following dot */}
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 rounded-full bg-blue-500/40 blur-md"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />

            {/* Floating particles that react subtly */}
            {dots.map((dot) => (
                <motion.div
                    key={dot.id}
                    className="absolute w-1 h-1 bg-white/20 rounded-full"
                    initial={{
                        x: Math.random() * 100 + "%",
                        y: Math.random() * 100 + "%"
                    }}
                    animate={{
                        y: ["0%", "10%", "0%"],
                        opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                        duration: 5 + Math.random() * 5,
                        repeat: Infinity,
                        delay: dot.delay,
                    }}
                />
            ))}
        </div>
    );
}
