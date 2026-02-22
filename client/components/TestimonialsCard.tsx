import { Testimonial } from "@/data&types/testimonials";
import { Quote, Star } from "lucide-react";
import { motion, Variants } from "framer-motion";

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
