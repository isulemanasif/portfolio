"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github, Send } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-zinc-950">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-white/10 backdrop-blur-xl">
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/2 p-12 space-y-8">
                            <div>
                                <h2 className="text-4xl font-bold text-white mb-4">Let's Connect</h2>
                                <p className="text-gray-400">
                                    I am open to professional career opportunities in Supply Chain and Logistics. Feel free to reach out for collaborations or potential roles.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <a href="mailto:i.sulemanasif@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                                    <div className="p-3 bg-white/5 rounded-lg group-hover:bg-blue-600/30">
                                        <Mail size={24} className="text-blue-400" />
                                    </div>
                                    <span>i.sulemanasif@gmail.com</span>
                                </a>
                                <a href="tel:+923159776477" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                                    <div className="p-3 bg-white/5 rounded-lg group-hover:bg-green-600/30">
                                        <Phone size={24} className="text-green-400" />
                                    </div>
                                    <span>+92 315 9776477</span>
                                </a>
                                <a href="https://github.com/isulemanasif" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                                    <div className="p-3 bg-white/5 rounded-lg group-hover:bg-black/30">
                                        <Github size={24} className="text-white" />
                                    </div>
                                    <span>github.com/isulemanasif</span>
                                </a>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 p-12 bg-white/5 border-l border-white/10">
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                    <textarea
                                        rows={4}
                                        className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                        placeholder="Tell me about the opportunity..."
                                    ></textarea>
                                </div>
                                <button className="w-full py-4 bg-white text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">
                                    Send Message <Send size={18} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
