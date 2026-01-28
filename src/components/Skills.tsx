"use client";

import { motion } from "framer-motion";

const skills = [
    {
        name: "MS Word",
        icon: (
            <svg viewBox="0 0 24 24" className="w-10 h-10">
                <path fill="#2B579A" d="M12.5 1V21L1 18V4L12.5 1Z" />
                <path fill="#41A5EE" d="M22.5 2V22L12.5 21V1L22.5 2Z" />
                <path fill="white" d="M7 8L10 16H8.5L7 11.5L5.5 16H4L7 8Z" />
            </svg>
        )
    },
    {
        name: "MS Excel",
        icon: (
            <svg viewBox="0 0 24 24" className="w-10 h-10">
                <path fill="#217346" d="M12.5 1V21L1 18V4L12.5 1Z" />
                <path fill="#67A446" d="M22.5 2V22L12.5 21V1L22.5 2Z" />
                <path fill="white" d="M5 8H8.5L6.5 12L8.5 16H5L4 14L3 16H1V8H3L4 10L5 8Z" />
            </svg>
        )
    },
    {
        name: "MS PowerPoint",
        icon: (
            <svg viewBox="0 0 24 24" className="w-10 h-10">
                <path fill="#B7472A" d="M12.5 1V21L1 18V4L12.5 1Z" />
                <path fill="#D24726" d="M22.5 2V22L12.5 21V1L22.5 2Z" />
                <path fill="white" d="M7 8H4V16H5.5V13H7C8.5 13 9 12 9 10.5C9 9 8.5 8 7 8ZM7 11.5H5.5V9.5H7C7.5 9.5 7.5 10 7.5 10.5C7.5 11 7.5 11.5 7 11.5Z" />
            </svg>
        )
    },
    {
        name: "Google Docs",
        icon: (
            <svg viewBox="0 0 48 48" className="w-10 h-10">
                <path fill="#4285F4" d="M30 4H10c-2.21 0-4 .79-4 3v34c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V16l-12-12z" />
                <path fill="#BBDEFB" d="M30 4v12h12" />
                <path fill="#FFFFFF" d="M30 24H14v2h16v-2zm0 8H14v2h16v-2zm-8-16H14v2h8v-2z" />
            </svg>
        )
    },
    {
        name: "IT Knowledge",
        icon: (
            <svg viewBox="0 0 24 24" className="w-10 h-10">
                <rect x="5" y="5" width="14" height="14" rx="2" fill="#9333EA" />
                <path d="M9 1h2v4H9V1zm4 0h2v4h-2V1zM9 19h2v4H9v-4zm4 0h2v4h-2v-4zM1 9h4v2H1V9zm0 4h4v2H1v-4zM19 9h4v2h-4V9zm0 4h4v2h-4v-4z" fill="#D8B4FE" />
                <rect x="8" y="8" width="8" height="8" rx="1" fill="white" opacity="0.9" />
                <path d="M10 10l4 4m0-4l-4 4" stroke="#9333EA" strokeWidth="1.5" />
            </svg>
        )
    },
    {
        name: "AI Interest",
        icon: (
            <svg viewBox="0 0 24 24" className="w-10 h-10">
                <circle cx="12" cy="12" r="10" fill="#22D3EE" opacity="0.2" />
                <path d="M12 4v4m0 8v4M4 12h4m8 0h4m-1.4-6.6l-2.8 2.8m-5.6 5.6l-2.8 2.8m0-11.2l2.8 2.8m5.6 5.6l2.8 2.8" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" />
                <circle cx="12" cy="12" r="4" fill="#22D3EE" />
                <path d="M12 10v4m-2-2h4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        )
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-black relative">
            <div className="container mx-auto px-6 relative z-10">
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
                            className="p-8 rounded-2xl border border-white/10 bg-white/5 flex flex-col items-center justify-center text-center backdrop-blur-sm transition-all shadow-xl hover:shadow-blue-500/10 relative z-30"
                        >
                            <div className="mb-6">
                                {skill.icon}
                            </div>
                            <h4 className="text-white font-bold text-lg">{skill.name}</h4>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
