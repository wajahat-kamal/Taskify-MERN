"use client"
import { motion, Variants } from "framer-motion";
import { Twitter, Github, Linkedin, Mail, Sparkles } from "lucide-react";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: (delay: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
    }),
};

const links = {
    Product: ["Features", "About", "Testimonials", "Changelog"],
    Company: ["About Us", "Careers", "Blog", "Press Kit"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"],
};

const socials = [
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Mail, label: "Email", href: "#" },
];

export default function Footer() {
    return (
        <footer className="relative bg-transparent text-[#F0F4FF] overflow-hidden pt-20 pb-10 px-6">

            {/* Top divider */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] opacity-20"
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

                        {/* Socials */}
                        <div className="flex items-center gap-3">
                            {socials.map((s, i) => (
                                <motion.a
                                    key={s.label}
                                    href={s.href}
                                    aria-label={s.label}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.1 * i }}
                                    whileHover={{ y: -3, scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-[#4f7eff]/40 hover:bg-[#4f7eff]/10 flex items-center justify-center transition-colors duration-300"
                                >
                                    <s.icon size={15} className="text-[#6B7A99] group-hover:text-[#4f7eff]" />
                                </motion.a>
                            ))}
                        </div>
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
                <div className="w-full h-[1px] bg-white/[0.06] mb-8" />

                {/* Bottom row */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0.3}
                    className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B7A99]"
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