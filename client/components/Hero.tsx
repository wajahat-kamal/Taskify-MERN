"use client"
import { motion, Variants } from "framer-motion";
import { Sparkles, ArrowRight, Play } from "lucide-react";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: (delay: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
    }),
};

export default function HeroSection() {
    return (
        <header className="text-[#F0F4FF] min-h-screen overflow-x-hidden relative flex items-center justify-center bg-[#00030f]">

            {/* ── Ambient background glows ── */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                {/* Centre glow */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
                    style={{
                        background: "radial-gradient(circle, rgba(79,126,255,0.18) 0%, transparent 70%)",
                    }}
                />
                {/* Top-left accent */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ duration: 2.5, delay: 0.5 }}
                    className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full"
                    style={{
                        background: "radial-gradient(circle, rgba(79,126,255,0.12) 0%, transparent 70%)",
                        filter: "blur(60px)",
                    }}
                />
                {/* Bottom-right accent */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ duration: 2.5, delay: 0.8 }}
                    className="absolute -bottom-20 -right-20 w-[350px] h-[350px] rounded-full"
                    style={{
                        background: "radial-gradient(circle, rgba(120,80,255,0.15) 0%, transparent 70%)",
                        filter: "blur(60px)",
                    }}
                />

                {/* Grid lines */}
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage:
                            "linear-gradient(#4f7eff 1px, transparent 1px), linear-gradient(90deg, #4f7eff 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            {/* ── Main content ── */}
            <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-32 pb-20">

                {/* Badge */}
                <motion.div
                    custom={0}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="inline-flex items-center gap-2 bg-[#4f7eff]/10 border border-[#4f7eff]/40 rounded-full px-4 py-1.5 text-[13px] text-[#4f7eff] font-medium mb-6 backdrop-blur-sm"
                >
                    <motion.span
                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="flex items-center"
                    >
                        <Sparkles size={12} />
                    </motion.span>
                    Powered by GPT-4o
                </motion.div>

                {/* Headline */}
                <motion.h1
                    custom={0.15}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="text-4xl sm:text-6xl max-w-[750px] leading-[1.08] tracking-tight"
                    style={{
                        background: "linear-gradient(135deg, #F0F4FF 30%, #4f7eff 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    Manage Tasks Smarter with AI That Works For You
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    custom={0.3}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="mt-5 text-[#6B7A99] max-w-[520px] leading-[1.8] text-base"
                >
                    Taskify learns your workflow, auto-assigns priorities, and keeps your
                    team perfectly in sync — so you can focus on what actually matters.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    custom={0.45}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="flex gap-3 mt-8 flex-wrap justify-center"
                >
                    <motion.button
                        whileHover={{ y: -3, scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="relative flex items-center gap-2 bg-[#4f7eff] text-white font-bold px-8 py-3.5 rounded-xl text-[15px] overflow-hidden group"
                        style={{ boxShadow: "0 0 30px rgba(79,126,255,0.45)" }}
                    >
                        {/* Shimmer */}
                        <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                        Get Started Free
                        <ArrowRight size={16} />
                    </motion.button>

                    <motion.button
                        whileHover={{ y: -3, scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
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
                </motion.div>

                {/* Social proof */}
                <motion.div
                    custom={0.6}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="mt-10 flex items-center gap-3 text-sm text-[#6B7A99]"
                >
                    <span>
                        Trusted by <span className="text-[#F0F4FF] font-semibold">12,000+</span> teams worldwide
                    </span>
                </motion.div>
            </section>
        </header>
    );
}