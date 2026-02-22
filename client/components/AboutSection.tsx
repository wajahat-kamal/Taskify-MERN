"use client"
import { motion } from "framer-motion";
import { fadeUp } from "./Hero";
import { features, stats } from "@/data/generalData";

export default function AboutSection() {
    return (
        <section
            id="about"
            className="relative text-[#F0F4FF] overflow-hidden py-16 px-6"
        >
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-0.5 opacity-20"
                style={{ background: "linear-gradient(90deg, transparent, #4f7eff, transparent)" }}
            />

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Section header */}
                <div className="text-center mb-16">
                    <motion.h2
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0.1}
                        className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] max-w-[700px] mx-auto"
                    >
                        Built for teams that move fast
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0.2}
                        className="mt-4 text-[#6B7A99] max-w-[520px] mx-auto leading-[1.8] text-sm"
                    >
                        Taskify was born from a simple frustration — too many tools, too little clarity.
                        We built the AI-native workspace that keeps every team aligned without the noise.
                    </motion.p>
                </div>

                {/* Feature cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
                    {features.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={0.1 * i}
                            whileHover={{ y: -6, scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="group relative bg-white/3 border border-white/8 hover:border-(--color-primary)/40 rounded-2xl p-6 backdrop-blur-sm transition-colors duration-300 cursor-default"
                        >
                            {/* Card glow on hover */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{ background: "radial-gradient(circle at 50% 0%, rgba(79,126,255,0.08), transparent 70%)" }}
                            />
                            <div className="relative z-10">
                                <div className="w-10 h-10 rounded-xl bg-(--color-primary)/10 border border-(--color-primary)/20 flex items-center justify-center mb-4">
                                    <feature.icon size={18} className="text-(--color-primary)" />
                                </div>
                                <h3 className="text-[#F0F4FF] font-semibold text-[15px] mb-2">{feature.title}</h3>
                                <p className="text-[#6B7A99] text-sm leading-[1.7]">{feature.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats row */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0.2}
                    className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/6 rounded-2xl overflow-hidden border border-white/6"
                >
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }}
                            className="bg-[#00030f] flex flex-col items-center justify-center py-10 gap-1"
                        >
                            <span
                                className="text-4xl font-extrabold tracking-tight"
                                style={{
                                    background: "linear-gradient(135deg, #F0F4FF 40%, #4f7eff 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                {stat.value}
                            </span>
                            <span className="text-[#6B7A99] text-sm">{stat.label}</span>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}