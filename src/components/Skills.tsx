"use client";

import { motion } from "framer-motion";
import { FileText, FileSpreadsheet, Presentation, Layout, Cpu, Globe } from "lucide-react";

const skills = [
    { name: "MS Word", icon: <FileText className="text-blue-500" />, category: "Office Suite" },
    { name: "MS Excel", icon: <FileSpreadsheet className="text-green-500" />, category: "Office Suite" },
    { name: "MS PowerPoint", icon: <Presentation className="text-orange-500" />, category: "Office Suite" },
    { name: "Google Docs", icon: <Layout className="text-blue-400" />, category: "Tools" },
    { name: "IT Knowledge", icon: <Cpu className="text-purple-500" />, category: "Tech" },
    { name: "AI Interest", icon: <Globe className="text-cyan-400" />, category: "Tech" },
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

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                            className="p-8 rounded-2xl border border-white/10 bg-white/5 flex flex-col items-center justify-center text-center backdrop-blur-sm transition-all"
                        >
                            <div className="mb-4 p-3 bg-black/50 rounded-xl">
                                {skill.icon}
                            </div>
                            <h4 className="text-white font-bold">{skill.name}</h4>
                            <span className="text-gray-500 text-xs mt-1 uppercase tracking-tighter">{skill.category}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
