"use client"
import { motion, Variants } from "framer-motion";
import { Sparkles } from "lucide-react";
import DemoButton from "./DemoButton";
import PrimaryButton from "./PrimaryButton";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: (delay: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
    }),
};

export default function HeroSection() {
    const { user } = useSelector((state: RootState) => state.auth)

    return (
        <header className="text-[#F0F4FF] min-h-screen overflow-x-hidden relative flex items-center justify-center bg-[#00030f]">
            {/* ── Ambient background glows ── */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
                    style={{
                        background: "radial-gradient(circle, rgba(79,126,255,0.18) 0%, transparent 70%)",
                    }}
                />
                {/* Grid lines */}
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage:
                            "linear-gradient(#4f7eff 1.5px, transparent 1.5px), linear-gradient(90deg, #4f7eff 1.5px, transparent 1.5px)",
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
                    className="inline-flex items-center gap-2 bg-(--color-primary)/10 border border-(--color-primary) rounded-full px-4 py-1.5 text-[13px] text-(--color-primary) font-medium mb-6 backdrop-blur-sm"
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
                    className="text-3xl sm:text-6xl max-w-[750px] leading-[1.08] tracking-tight"
                    style={{
                        background: "linear-gradient(135deg, #F0F4FF 30%, #4f7eff 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    Manage Tasks Smarter with AI That Works For You {user?.name}
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    custom={0.3}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="mt-4 text-[#6B7A99] max-w-[520px] leading-[1.8] text-xs sm:text-base"
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
                    <PrimaryButton text="Get Started Free" route="/auth/signup" widthFull={false} />
                    <DemoButton />
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