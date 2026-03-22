"use client";
import { testimonials } from "@/data/testimonials";
import { motion } from "framer-motion";
import TestimonialsCard from "./TestimonialsCard";
import { fadeUp } from "./Hero";

export default function Testimonials() {
    return (
        <section
            id="testimonials"
            className="relative bg-[#00030f] text-[#F0F4FF] overflow-hidden py-16 px-6"
        >
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-0.5 opacity-20"
                style={{ background: "linear-gradient(90deg, transparent, #4f7eff, transparent)" }}
            />
            <div className="relative z-10 max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0.1}
                        className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] max-w-[700px] mx-auto"
                    >
                        Loved by teams everywhere
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0.2}
                        className="mt-4 text-[#6B7A99] max-w-[520px] mx-auto leading-[1.8] text-sm"
                    >
                        Don't take our word for it — here's what real teams say after switching to Taskify.
                    </motion.p>
                </div>

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0.1}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4"
                >
                    {testimonials.map((t, i) => (
                        <TestimonialsCard key={t.name} testimonial={t} delay={0.1 * i} />
                    ))}
                </motion.div>

            </div>
        </section>
    );
}



