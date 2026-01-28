"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Magnetic from "./Magnetic";

export default function WhatsAppButton() {
    const phoneNumber = "923159776477";
    const message = "Hello Muhammad Suleman Asif, I saw your portfolio and would like to discuss a professional opportunity.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div className="fixed bottom-8 right-8 z-[99] lg:bottom-12 lg:right-12">
            <Magnetic>
                <motion.a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20ba5a] transition-colors relative group"
                >
                    <MessageCircle size={32} />

                    {/* Tooltip */}
                    <span className="absolute right-full mr-4 px-4 py-2 bg-white text-black text-sm font-bold rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
                        Chat on WhatsApp
                    </span>

                    {/* Pulsing effect */}
                    <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
                </motion.a>
            </Magnetic>
        </div>
    );
}
