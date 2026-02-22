"use client"
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp } from "./Hero";
import DemoButton from "./DemoButton";

export default function CTABanner() {
    return (
        <section id="#cta" className="relative bg-transparent text-[#F0F4FF] overflow-hidden py-16 px-6">
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-0.5 opacity-20"
                style={{ background: "linear-gradient(90deg, transparent, #4f7eff, transparent)" }}
            />
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
                        className="relative rounded-3xl px-8 py-10 text-center overflow-hidden"
                        style={{ background: "linear-gradient(135deg, #00061a 0%, #000310 100%)" }}
                    >
                        {/* Content */}
                        <div className="relative z-10 flex flex-col items-center">
                            {/* Headline */}
                            <motion.h2
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={0.2}
                                className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] max-w-[580px]"
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
                                className="mt-4 text-[#6B7A99] max-w-[420px] leading-[1.8] text-xs md:text-base"
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
                                    className="relative flex items-center gap-2 bg-(--color-primary) text-white font-bold px-6 py-3 rounded-xl text-[15px] overflow-hidden group"
                                    style={{ boxShadow: "0 0 30px rgba(79,126,255,0.45)" }}
                                >
                                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                                    Get Started Free
                                    <ArrowRight size={16} />
                                </motion.button>

                                <DemoButton />
                            </motion.div>

                            {/* Trust note */}
                            <motion.p
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={0.5}
                                className="mt-6 text-[#6B7A99] text-sm"
                            >
                                Free trial · No setup fees
                            </motion.p>

                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}