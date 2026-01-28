"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LiquidTransition() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    // Organic SVG path for the liquid reveal
    const initialPath = "M 0 100 V 100 Q 50 100 100 100 V 100 z";
    const targetPath = "M 0 100 V 0 Q 50 0 100 0 V 100 z";

    return (
        <div className="fixed inset-0 pointer-events-none z-[8888] flex items-center justify-center overflow-hidden">
            <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="absolute inset-0 w-full h-full"
            >
                <motion.path
                    initial={{ d: initialPath }}
                    animate={{
                        d: [initialPath, "M 0 100 V 50 Q 50 0 100 50 V 100 z", targetPath],
                    }}
                    transition={{
                        duration: 1.2,
                        ease: [0.76, 0, 0.24, 1],
                        delay: 1.5 // Start after preloader begins to finish
                    }}
                    fill="#000"
                />
            </svg>
        </div>
    );
}
