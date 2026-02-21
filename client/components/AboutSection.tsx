"use client"
import { motion, Variants } from "framer-motion";
import { Brain, Zap, Users, BarChart3 } from "lucide-react";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: (delay: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
    }),
};

const features = [
    {
        icon: Brain,
        title: "AI-Powered Planning",
        desc: "Taskify understands your goals and automatically breaks them into actionable tasks with smart deadlines.",
    },
    {
        icon: Zap,
        title: "Instant Prioritization",
        desc: "Our engine ranks your backlog in real time so your team always knows what to tackle next.",
    },
    {
        icon: Users,
        title: "Seamless Collaboration",
        desc: "Assign, comment, and track progress together — no more status-update meetings.",
    },
    {
        icon: BarChart3,
        title: "Deep Analytics",
        desc: "Visual dashboards surface bottlenecks and celebrate wins so you can continuously improve.",
    },
];

const stats = [
    { value: "12K+", label: "Teams worldwide" },
    { value: "98%", label: "On-time delivery" },
    { value: "3×", label: "Faster execution" },
    { value: "4.9★", label: "Average rating" },
];

export default function AboutSection() {
    return (
        <section
            id="about"
            className="relative bg-[#00030f] text-[#F0F4FF] overflow-hidden py-32 px-6"
        >
            {/* Background accents */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] opacity-20"
                    style={{ background: "linear-gradient(90deg, transparent, #4f7eff, transparent)" }}
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full"
                    style={{
                        background: "radial-gradient(circle, rgba(79,126,255,0.08) 0%, transparent 70%)",
                        filter: "blur(60px)",
                    }}
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 0.4 }}
                    className="absolute bottom-20 left-0 w-[350px] h-[350px] rounded-full"
                    style={{
                        background: "radial-gradient(circle, rgba(120,80,255,0.08) 0%, transparent 70%)",
                        filter: "blur(60px)",
                    }}
                />
                {/* Grid */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage:
                            "linear-gradient(#4f7eff 1px, transparent 1px), linear-gradient(90deg, #4f7eff 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">

                {/* Section header */}
                <div className="text-center mb-20">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0}
                        className="inline-flex items-center gap-2 bg-[#4f7eff]/10 border border-[#4f7eff]/40 rounded-full px-4 py-1.5 text-[13px] text-[#4f7eff] font-medium mb-6 backdrop-blur-sm"
                    >
                        <motion.span
                            className="w-2 h-2 rounded-full bg-[#4f7eff] inline-block"
                            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                        About Taskify
                    </motion.div>

                    <motion.h2
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0.1}
                        className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] max-w-[700px] mx-auto"
                        style={{
                            background: "linear-gradient(135deg, #F0F4FF 30%, #4f7eff 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Built for teams that move fast
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0.2}
                        className="mt-5 text-[#6B7A99] max-w-[520px] mx-auto leading-[1.8] text-base"
                    >
                        Taskify was born from a simple frustration — too many tools, too little clarity.
                        We built the AI-native workspace that keeps every team aligned without the noise.
                    </motion.p>
                </div>

                {/* Feature cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
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
                            className="group relative bg-white/[0.03] border border-white/[0.08] hover:border-[#4f7eff]/40 rounded-2xl p-6 backdrop-blur-sm transition-colors duration-300 cursor-default"
                        >
                            {/* Card glow on hover */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{ background: "radial-gradient(circle at 50% 0%, rgba(79,126,255,0.08), transparent 70%)" }}
                            />
                            <div className="relative z-10">
                                <div className="w-10 h-10 rounded-xl bg-[#4f7eff]/10 border border-[#4f7eff]/20 flex items-center justify-center mb-4">
                                    <feature.icon size={18} className="text-[#4f7eff]" />
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
                    className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]"
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