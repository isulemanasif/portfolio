"use client";

import { motion } from "framer-motion";
import { ExternalLink, ShoppingCart, BarChart3, Bot } from "lucide-react";

const projects = [
    {
        title: "Logistics Optimization System",
        description: "A comprehensive supply chain project focusing on reducing transit times and optimizing route efficiency for regional logistics.",
        icon: <ShoppingCart className="text-blue-500 w-12 h-12" />,
        tags: ["Supply Chain", "Logistics", "Optimization"]
    },
    {
        title: "AI-Powered Inventory Forecast",
        description: "Developed a predictive model to forecast inventory needs using historical data, significantly reducing overhead costs.",
        icon: <Bot className="text-cyan-500 w-12 h-12" />,
        tags: ["AI", "Data Analysis", "Predictive Modeling"]
    },
    {
        title: "Business Analytics Dashboard",
        description: "Created a centralized dashboard to track KPIs across multiple supply chain nodes, enhancing real-time decision making.",
        icon: <BarChart3 className="text-purple-500 w-12 h-12" />,
        tags: ["Analytics", "Business Intelligence", "IT"]
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-black relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white mb-4"
                    >
                        Featured Projects
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-2xl mx-auto"
                    >
                        Real-world professional case studies where I applied Supply Chain principles and modern technology to solve complex problems.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            whileHover={{ y: -10 }}
                            className="group relative bg-zinc-900/50 rounded-3xl p-8 border border-white/10 backdrop-blur-sm transition-all hover:bg-zinc-800/80 hover:border-blue-500/50 overflow-hidden z-30"
                        >
                            {/* Background glow on hover */}
                            <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600/10 to-purple-600/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

                            <div className="relative z-10">
                                <div className="mb-6 p-4 bg-black/40 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-500">
                                    {project.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                                <p className="text-gray-400 mb-8 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-gray-300 border border-white/10 uppercase tracking-widest leading-none">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
