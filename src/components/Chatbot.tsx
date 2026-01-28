"use client";

import { useChat } from "@ai-sdk/react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Loader2 } from "lucide-react";

export default function SulemanGPT() {
    const [isOpen, setIsOpen] = useState(false);
    const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();
    const scrollRef = useRef<HTMLDivElement>(null);

    // Auto scroll to bottom
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isLoading]);

    return (
        <div className="fixed bottom-6 left-6 z-[9999]">
            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center relative overflow-hidden group"
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                        >
                            <X size={24} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="chat"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            className="flex items-center gap-2"
                        >
                            <MessageCircle size={24} />
                            <span className="hidden md:inline font-bold text-sm tracking-widest uppercase">Suleman GPT</span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="absolute bottom-20 left-0 w-[350px] md:w-[400px] h-[500px] bg-black border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col backdrop-blur-xl"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-white/10 bg-gradient-to-r from-blue-900/20 to-purple-900/20 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                                    <Bot size={20} />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold tracking-widest uppercase text-xs">Suleman GPT</h3>
                                    <p className="text-[10px] text-blue-400 uppercase tracking-tighter">Online & Ready</p>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-white transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div
                            ref={scrollRef}
                            className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
                        >
                            {messages.length === 0 && (
                                <div className="text-center py-10 space-y-4">
                                    <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto text-blue-400">
                                        <Bot size={32} />
                                    </div>
                                    <p className="text-gray-400 text-sm italic font-medium">
                                        "Assalamu Alaikum! Ask me anything about Suleman's work, skills, or career goals."
                                    </p>
                                </div>
                            )}

                            {messages.map((m) => (
                                <div
                                    key={m.id}
                                    className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div className={`max-w-[85%] flex gap-3 ${m.role === "user" ? "flex-row-reverse" : ""}`}>
                                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${m.role === "user" ? "bg-white/10 text-white" : "bg-blue-600 text-white"
                                            }`}>
                                            {m.role === "user" ? <User size={16} /> : <Bot size={16} />}
                                        </div>
                                        <div className={`p-4 rounded-2xl text-sm leading-relaxed ${m.role === "user"
                                            ? "bg-white/5 border border-white/10 text-gray-200"
                                            : "bg-blue-600/10 border border-blue-500/20 text-blue-100"
                                            }`}>
                                            {m.content}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="max-w-[85%] flex gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
                                            <Loader2 size={16} className="animate-spin" />
                                        </div>
                                        <div className="p-4 rounded-2xl bg-blue-600/10 border border-blue-500/20 text-blue-100 italic text-sm">
                                            Thinking...
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSubmit} className="p-6 border-t border-white/10 bg-black/50 overflow-hidden relative">
                            <div className="absolute inset-0 bg-blue-500/5 pointer-events-none" />
                            <div className="flex items-center gap-2 relative z-10">
                                <input
                                    value={input}
                                    onChange={handleInputChange}
                                    placeholder="Type your message..."
                                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-colors placeholder:text-white/20"
                                />
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    type="submit"
                                    disabled={isLoading || !input.trim()}
                                    className="bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-blue-600/20"
                                >
                                    <Send size={18} />
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
