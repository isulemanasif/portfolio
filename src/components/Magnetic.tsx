"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Magnetic({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const playSound = () => {
        try {
            const context = new (window.AudioContext || (window as any).webkitAudioContext)();
            const oscillator = context.createOscillator();
            const gain = context.createGain();

            oscillator.type = "sine";
            oscillator.frequency.setValueAtTime(1200, context.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(0.01, context.currentTime + 0.1);

            gain.gain.setValueAtTime(0.05, context.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 0.1);

            oscillator.connect(gain);
            gain.connect(context.destination);

            oscillator.start();
            oscillator.stop(context.currentTime + 0.1);
        } catch (e) { }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        if (!isHovered) {
            setIsHovered(true);
            playSound();
        }
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * 0.35, y: middleY * 0.35 });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;

    return (
        <motion.div
            style={{ position: "relative" }}
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {
                setPosition({ x: 0, y: 0 });
                setIsHovered(false);
            }}
            animate={{ x, y }}
            transition={{ type: "spring", damping: 15, stiffness: 150, mass: 0.1 }}
        >
            {children}
        </motion.div>
    );
}
