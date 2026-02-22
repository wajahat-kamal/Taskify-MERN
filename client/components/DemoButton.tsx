import React from 'react'
import { toast } from "react-toastify";
import { motion } from "framer-motion"
import { Play } from 'lucide-react';

function DemoButton() {
    return (
            <motion.button
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={() =>
                    toast("🎬 Demo coming soon! Stay tuned.", {
                        position: "bottom-right",
                        autoClose: 3000,
                        theme: "dark",
                        style: {
                            background: "#0a0f1e",
                            border: "1px solid rgba(79,126,255,0.3)",
                            color: "#F0F4FF",
                            borderRadius: "12px",
                        },
                    })
                }
                className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#4f7eff]/40 text-[#F0F4FF] font-medium px-8 py-3.5 rounded-xl text-[15px] transition-colors duration-300 backdrop-blur-sm"
            >
                <motion.span
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex items-center"
                >
                    <Play size={14} fill="#4f7eff" stroke="#4f7eff" />
                </motion.span>
                Watch Demo
            </motion.button>
    )
}

export default DemoButton