"use client";

import { motion } from "framer-motion";
import { FileText, FileSpreadsheet, Presentation, Layout, Cpu, Globe } from "lucide-react";

const skills = [
    {
        name: "MS Word",
        icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8">
                <path fill="#2B579A" d="M12.5 1V21L1 18V4L12.5 1Z" />
                <path fill="#41A5EE" d="M22.5 2V22L12.5 21V1L22.5 2Z" />
                <path fill="white" d="M7 8L10 16H8.5L7 11.5L5.5 16H4L7 8Z" />
            </svg>
        )
    },
    {
        name: "MS Excel",
        icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8">
                <path fill="#217346" d="M12.5 1V21L1 18V4L12.5 1Z" />
                <path fill="#67A446" d="M22.5 2V22L12.5 21V1L22.5 2Z" />
                <path fill="white" d="M5 8H8.5L6.5 12L8.5 16H5L4 14L3 16H1V8H3L4 10L5 8Z" />
            </svg>
        )
    },
    {
        name: "MS PowerPoint",
        icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8">
                <path fill="#B7472A" d="M12.5 1V21L1 18V4L12.5 1Z" />
                <path fill="#D24726" d="M22.5 2V22L12.5 21V1L22.5 2Z" />
                <path fill="white" d="M7 8H4V16H5.5V13H7C8.5 13 9 12 9 10.5C9 9 8.5 8 7 8ZM7 11.5H5.5V9.5H7C7.5 9.5 7.5 10 7.5 10.5C7.5 11 7.5 11.5 7 11.5Z" />
            </svg>
        )
    },
    {
        name: "Google Docs",
        icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8">
                <path fill="#4285F4" d="M15 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V7l-5-5zM14 8V3.5L18.5 8H14z" />
            </svg>
        )
    },
    {
        name: "IT Knowledge",
        icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8">
                <path fill="#9333EA" d="M19 15c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v6zM7 5V3h2v2h2V3h2v2h2V3h2v2m-12 14v2h2v-2h2v2h2v-2h2v2h2v-2" stroke="white" strokeWidth="1.5" />
            </svg>
        )
    },
    {
        name: "AI Interest",
        icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8">
                <path fill="#22D3EE" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
        )
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-black relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Core Expertise</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Combining academic excellence in Business Administration with practical technical skills to drive efficiency.
                    </p>
                </div>

                <motion.div
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                >
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.name}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                            }}
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: "rgba(255, 255, 255, 0.05)",
                                borderColor: "rgba(59, 130, 246, 0.5)"
                            }}
                            className="p-8 rounded-2xl border border-white/10 bg-white/5 flex flex-col items-center justify-center text-center backdrop-blur-sm transition-all shadow-xl hover:shadow-blue-500/10"
                        >
                            <div className="mb-4">
                                {skill.icon}
                            </div>
                            <h4 className="text-white font-bold">{skill.name}</h4>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
