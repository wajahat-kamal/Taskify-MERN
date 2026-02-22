"use client"
import { motion, Variants } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: (delay: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
    }),
};

export default function CTABanner() {
    return (
        <section className="relative bg-transparent text-[#F0F4FF] overflow-hidden py-16 px-6">
            <div className="relative z-10 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="relative rounded-3xl overflow-hidden border border-[#4f7eff]/20 p-px"
                    style={{
                        background: "linear-gradient(135deg, rgba(79,126,255,0.15), rgba(120,80,255,0.1))",
                    }}
                >
                    {/* Inner card */}
                    <div
                        className="relative rounded-3xl px-8 py-16 text-center overflow-hidden"
                        style={{ background: "linear-gradient(135deg, #00061a 0%, #000310 100%)" }}
                    >
                        {/* Content */}
                        <div className="relative z-10 flex flex-col items-center">

                            {/* Badge */}
                            {/* <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={0.1}
                                className="inline-flex items-center gap-2 bg-[#4f7eff]/10 border border-[#4f7eff]/40 rounded-full px-4 py-1.5 text-[13px] text-[#4f7eff] font-medium mb-8 backdrop-blur-sm"
                            >
                                <motion.span
                                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    className="flex items-center"
                                >
                                    <Sparkles size={12} />
                                </motion.span>
                                No credit card required
                            </motion.div> */}

                            {/* Headline */}
                            <motion.h2
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={0.2}
                                className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] max-w-[580px]"
                                style={{
                                    background: "linear-gradient(135deg, #F0F4FF 30%, #4f7eff 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Start managing smarter today
                            </motion.h2>

                            {/* Subtext */}
                            <motion.p
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={0.3}
                                className="mt-5 text-[#6B7A99] max-w-[420px] leading-[1.8] text-base"
                            >
                                Join 12,000+ teams already using Taskify to ship faster, stress less, and stay aligned.
                            </motion.p>

                            {/* CTA Buttons */}
                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={0.4}
                                className="flex gap-3 mt-8 flex-wrap justify-center"
                            >
                                <motion.button
                                    whileHover={{ y: -3, scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className="relative flex items-center gap-2 bg-[#4f7eff] text-white font-bold px-8 py-3.5 rounded-xl text-[15px] overflow-hidden group"
                                    style={{ boxShadow: "0 0 30px rgba(79,126,255,0.45)" }}
                                >
                                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                                    Get Started Free
                                    <ArrowRight size={16} />
                                </motion.button>

                                <motion.button
                                    whileHover={{ y: -3, scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#4f7eff]/40 text-[#F0F4FF] font-medium px-8 py-3.5 rounded-xl text-[15px] transition-colors duration-300 backdrop-blur-sm"
                                >
                                    View Demo
                                </motion.button>
                            </motion.div>

                            {/* Trust note */}
                            <motion.p
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={0.5}
                                className="mt-6 text-[#6B7A99] text-xs"
                            >
                                Free 14-day trial · No setup fees · Cancel anytime
                            </motion.p>

                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}