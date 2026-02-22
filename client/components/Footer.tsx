"use client"
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { fadeUp } from "./Hero";
import { links } from "@/data/indexData";

export default function Footer() {
    return (
        <footer className="relative bg-transparent text-[#F0F4FF] overflow-hidden pt-20 pb-10 px-6">

            {/* Top divider */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px opacity-20"
                style={{ background: "linear-gradient(90deg, transparent, #4f7eff, transparent)" }}
            />
            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Top row */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
                    {/* Brand col */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0}
                        className="md:col-span-2 flex flex-col gap-5"
                    >
                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-[#4f7eff]/20 border border-[#4f7eff]/40 flex items-center justify-center">
                                <Sparkles size={14} className="text-[#4f7eff]" />
                            </div>
                            <span className="text-xl font-extrabold tracking-widest text-[#F0F4FF]">
                                TASKIFY
                            </span>
                        </div>

                        <p className="text-[#6B7A99] text-sm leading-[1.8] max-w-[280px]">
                            The AI-native workspace that keeps your team aligned, focused, and shipping — every single day.
                        </p>
                    </motion.div>

                    {/* Nav link cols */}
                    {Object.entries(links).map(([category, items], ci) => (
                        <motion.div
                            key={category}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={0.1 * (ci + 1)}
                            className="flex flex-col gap-4"
                        >
                            <h4 className="text-[#F0F4FF] text-sm font-semibold tracking-wide">
                                {category}
                            </h4>
                            <ul className="flex flex-col gap-3">
                                {items.map((item) => (
                                    <li key={item}>
                                        <a
                                            href="#"
                                            className="text-[#6B7A99] text-sm hover:text-[#4f7eff] transition-colors duration-200"
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom divider */}
                <div className="w-full h-px bg-white/6 mb-8" />

                {/* Bottom row */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0.3}
                    className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#6B7A99]"
                >
                    <span>© {new Date().getFullYear()} Taskify. All rights reserved.</span>

                    <div className="flex items-center gap-1.5">
                        <span>Built with</span>
                        <motion.span
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            className="text-[#ef4444]"
                        >
                            ♥
                        </motion.span>
                        <a href="https://wajahat-kamal.vercel.app/">by <span className="text-(--color-primary)">Wajahat Kamal</span></a>
                    </div>
                </motion.div>

            </div>
        </footer>
    );
}