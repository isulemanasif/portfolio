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
        name: "Web Development",
        icon: (
            <svg viewBox="0 0 24 24" className="w-10 h-10">
                <circle cx="12" cy="12" r="2" fill="#61DAFB" />
                <path stroke="#61DAFB" strokeWidth="1" fill="none" d="M12 7c3.1 0 5.6 2.2 5.6 5s-2.5 5-5.6 5-5.6-2.2-5.6-5 2.5-5 5.6-5z" />
                <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(60 12 12)" />
                <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(-60 12 12)" />
            </svg>
        )
    },
    {
        name: "Artificial Intelligence",
        icon: (
            <svg viewBox="0 0 24 24" className="w-10 h-10">
                <path fill="#74aa9c" d="M22.28 7.53a4.57 4.57 0 0 0-.24-1.17 4.13 4.13 0 0 0-1-1.49 4.3 4.3 0 0 0-1.49-1 4.56 4.56 0 0 0-3.71 0 4.3 4.3 0 0 0-1.49 1L12.75 3a4.56 4.56 0 0 0-3.71 0 4.3 4.3 0 0 0-1.49 1 4.13 4.13 0 0 0-1 1.49 4.57 4.57 0 0 0-.24 1.17 4.56 4.56 0 0 0-1 3.71 4.13 4.13 0 0 0 1 1.49l-1.59 2.75a4.56 4.56 0 0 0 0 3.71 4.3 4.3 0 0 0 1 1.49 4.13 4.13 0 0 0 1.49 1 4.56 4.56 0 0 0 3.71 0 4.3 4.3 0 0 0 1.49-1L11.25 21a4.56 4.56 0 0 0 3.71 0 4.3 4.3 0 0 0 1.49-1 4.13 4.13 0 0 0 1-1.49 4.57 4.57 0 0 0 .24-1.17 4.56 4.56 0 0 0 1-3.71 4.13 4.13 0 0 0-1-1.49l1.59-2.75a4.56 4.56 0 0 0 0-3.71M11.97 18.23a4.59 4.59 0 0 0-2.31-1.33 4.6 4.6 0 0 0-2.3-1.33l-1.59-2.75a4.56 4.56 0 0 1 0-3.14l1.59-2.75a4.61 4.61 0 0 1 2.3-1.31 4.6 4.6 0 0 1 2.31-1.33l1.59 2.75a4.56 4.56 0 0 1 0 3.14l-1.59 2.75m4.35 1.33a4.59 4.59 0 0 0 2.31 1.33l-1.59 2.75a4.56 4.56 0 0 1-3.14 0l-1.59-2.75a4.6 4.6 0 0 1 2.3-1.33 4.6 4.6 0 0 1 1.71 0m2.31-11a4.59 4.59 0 0 0-1.33 2.3l-2.75 1.59a4.56 4.56 0 0 1 0-3.14l2.75-1.59a4.61 4.61 0 0 1 1.31 2.3l.02.04m-12.75 0a4.59 4.59 0 0 1 1.33-2.3l2.75-1.59a4.56 4.56 0 0 1 0 3.14l-2.75 1.59a4.61 4.61 0 0 1-1.31-2.3.02.04" />
            </svg>
        )
    },
    {
        name: "Mobile App Dev",
        icon: (
            <svg viewBox="0 0 24 24" className="w-10 h-10">
                <rect x="5" y="2" width="14" height="20" rx="3" fill="none" stroke="#61DAFB" strokeWidth="2" />
                <line x1="10" y1="19" x2="14" y2="19" stroke="#61DAFB" strokeWidth="2" strokeLinecap="round" />
                <path d="M12 6c-2 0-3.5 1.5-3.5 3.5S10 13 12 13s3.5-1.5 3.5-3.5S14 6 12 6z" fill="#61DAFB" opacity="0.6" />
            </svg>
        )
    },
    {
        name: "Prompt Engineer",
        icon: (
            <svg viewBox="0 0 24 24" className="w-10 h-10">
                <path fill="#FFD700" d="M12 2L14.5 9H22L16 14L18.5 21L12 17L5.5 21L8 14L2 9H9.5L12 2Z" opacity="0.8" />
                <path fill="white" d="M12 6L13.5 10H18L14.5 13L16 17L12 15L8 17L9.5 13L6 10H10.5L12 6Z" />
                <circle cx="12" cy="12" r="8" stroke="white" strokeWidth="1" fill="none" strokeDasharray="2 2" />
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
                    className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6"
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
                            className="p-8 rounded-2xl border border-white/10 bg-black flex flex-col items-center justify-center text-center backdrop-blur-sm transition-all shadow-xl hover:shadow-blue-500/10 relative z-10"
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
