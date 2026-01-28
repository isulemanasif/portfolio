"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function MouseParticles() {
    const [dots, setDots] = useState<{ id: number; size: number; opacity: number }[]>([]);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Generate 60 dots with varying sizes and opacities
        const newDots = Array.from({ length: 60 }).map((_, i) => ({
            id: i,
            size: Math.random() * 4 + 2, // 2px to 6px
            opacity: Math.random() * 0.5 + 0.1, // 0.1 to 0.6
        }));
        setDots(newDots);

        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div ref={containerRef} className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
            {dots.map((dot, index) => (
                <motion.div
                    key={dot.id}
                    className="absolute rounded-full bg-blue-400/40 blur-[1px]"
                    animate={{
                        x: mousePos.x,
                        y: mousePos.y,
                    }}
                    transition={{
                        type: "spring",
                        damping: 15 + Math.random() * 20,
                        stiffness: 50 + Math.random() * 100,
                        mass: 0.5 + Math.random() * 1.5,
                        delay: index * 0.005, // Create a trailing effect
                    }}
                    style={{
                        width: dot.size,
                        height: dot.size,
                        opacity: dot.opacity,
                        left: -dot.size / 2,
                        top: -dot.size / 2,
                    }}
                />
            ))}

            {/* Central glow */}
            <motion.div
                className="absolute w-24 h-24 bg-blue-600/10 rounded-full blur-3xl"
                animate={{
                    x: mousePos.x,
                    y: mousePos.y,
                }}
                transition={{
                    type: "spring",
                    damping: 30,
                    stiffness: 200,
                }}
                style={{
                    left: -48,
                    top: -48,
                }}
            />
        </div>
    );
}
