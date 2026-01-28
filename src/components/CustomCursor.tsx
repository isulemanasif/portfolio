"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const ringX = useSpring(mouseX, { damping: 20, stiffness: 100 });
    const ringY = useSpring(mouseY, { damping: 20, stiffness: 100 });

    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === "BUTTON" ||
                target.tagName === "A" ||
                target.closest("button") ||
                target.closest("a") ||
                target.dataset.cursor === "hover"
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [mouseX, mouseY]);

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] hidden lg:block">
            {/* Main Dot */}
            <motion.div
                className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full mix-blend-difference"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />

            {/* Outer Ring */}
            <motion.div
                className="fixed top-0 left-0 border border-white/40 rounded-full mix-blend-difference"
                animate={{
                    width: isHovering ? 50 : 30,
                    height: isHovering ? 50 : 30,
                    opacity: isHovering ? 0.8 : 0.4,
                }}
                style={{
                    x: ringX,
                    y: ringY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                transition={{ type: "spring", damping: 25, stiffness: 150 }}
            />
        </div>
    );
}
