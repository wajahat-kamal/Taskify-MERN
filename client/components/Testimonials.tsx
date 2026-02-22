"use client"
import { motion, Variants } from "framer-motion";
import { Star, Quote } from "lucide-react";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: (delay: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
    }),
};

const testimonials = [
    {
        name: "Sarah Mitchell",
        role: "Product Manager @ Notion",
        avatar: "SM",
        color: "#4f7eff",
        stars: 5,
        text: "Taskify completely replaced our chaotic Notion setup. The AI prioritization alone saved us 4+ hours of planning every single week.",
    },
    {
        name: "James Okafor",
        role: "CTO @ Streamline",
        avatar: "JO",
        color: "#7c3aed",
        stars: 5,
        text: "I was skeptical about another task tool. But Taskify's AI actually understands context — it feels like having a Chief of Staff.",
    },
    {
        name: "Priya Sharma",
        role: "Engineering Lead @ Vercel",
        avatar: "PS",
        color: "#06b6d4",
        stars: 5,
        text: "Our sprint delivery rate went from 60% to 94% in two months. The team sync features are genuinely game-changing.",
    },
    {
        name: "Lucas Brennan",
        role: "Founder @ Launchpad",
        avatar: "LB",
        color: "#10b981",
        stars: 5,
        text: "As a solo founder wearing every hat, Taskify keeps me sane. It knows what's urgent before I even open the app.",
    },
    {
        name: "Aiko Tanaka",
        role: "Design Director @ Figma",
        avatar: "AT",
        color: "#f59e0b",
        stars: 5,
        text: "The UI is beautiful and the intelligence behind it is real. Taskify has become non-negotiable for our design team.",
    },
    {
        name: "Daniel Reeves",
        role: "COO @ ScaleHQ",
        avatar: "DR",
        color: "#ef4444",
        stars: 5,
        text: "We evaluated 12 tools before choosing Taskify. Nothing else came close to the depth of AI features at this price point.",
    },
];

export default function TestimonialsSection() {
    const half = Math.ceil(testimonials.length / 2);
    const row1 = testimonials.slice(0, half);
    const row2 = testimonials.slice(half);

    return (
        <section
            id="testimonials"
            className="relative bg-[#00030f] text-[#F0F4FF] overflow-hidden py-32 px-6"
        >
                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] opacity-20"
                    style={{ background: "linear-gradient(90deg, transparent, #4f7eff, transparent)" }}
                />
             

            <div className="relative z-10 max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
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
                        Testimonials
                    </motion.div>

                    <motion.h2
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0.1}
                        className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] max-w-[640px] mx-auto"
                        style={{
                            background: "linear-gradient(135deg, #F0F4FF 30%, #4f7eff 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Loved by teams everywhere
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0.2}
                        className="mt-5 text-[#6B7A99] max-w-[480px] mx-auto leading-[1.8] text-base"
                    >
                        Don't take our word for it — here's what real teams say after switching to Taskify.
                    </motion.p>
                </div>

                {/* Cards — Row 1 */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0.1}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4"
                >
                    {row1.map((t, i) => (
                        <TestimonialCard key={t.name} testimonial={t} delay={0.1 * i} />
                    ))}
                </motion.div>

                {/* Cards — Row 2 */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0.2}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                    {row2.map((t, i) => (
                        <TestimonialCard key={t.name} testimonial={t} delay={0.1 * i + 0.15} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

type Testimonial = {
    name: string;
    role: string;
    avatar: string;
    color: string;
    stars: number;
    text: string;
};

function TestimonialCard({ testimonial, delay }: { testimonial: Testimonial; delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="group relative bg-white/[0.03] border border-white/[0.08] hover:border-[#4f7eff]/40 rounded-2xl p-6 backdrop-blur-sm transition-colors duration-300 flex flex-col gap-4 cursor-default"
        >
            {/* Hover glow */}
            <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "radial-gradient(circle at 50% 0%, rgba(79,126,255,0.07), transparent 70%)" }}
            />

            <div className="relative z-10 flex flex-col gap-4">
                {/* Quote icon + stars */}
                <div className="flex items-center justify-between">
                    <Quote size={20} className="text-[#4f7eff] opacity-60" />
                    <div className="flex gap-0.5">
                        {Array.from({ length: testimonial.stars }).map((_, i) => (
                            <Star key={i} size={13} className="text-[#f59e0b] fill-[#f59e0b]" />
                        ))}
                    </div>
                </div>

                {/* Text */}
                <p className="text-[#9AAAC8] text-sm leading-[1.8] flex-1">
                    "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-2 border-t border-white/[0.06]">
                    <div
                        className="w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold text-white shrink-0"
                        style={{ backgroundColor: testimonial.color + "33", border: `1px solid ${testimonial.color}55` }}
                    >
                        <span style={{ color: testimonial.color }}>{testimonial.avatar}</span>
                    </div>
                    <div>
                        <p className="text-[#F0F4FF] text-sm font-semibold leading-tight">{testimonial.name}</p>
                        <p className="text-[#6B7A99] text-xs mt-0.5">{testimonial.role}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}