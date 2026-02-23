"use client"
import { motion, Variants } from "framer-motion";
import { Sparkles, ArrowRight, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { fadeUp } from "@/components/Hero";

export default function SignupPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    return (
        <main className="min-h-screen bg-[#00030f] text-[#F0F4FF] flex items-center justify-center px-6 py-16 relative overflow-hidden">

            {/* Background glows */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
                    style={{ background: "radial-gradient(circle, rgba(79,126,255,0.12) 0%, transparent 70%)" }}
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ duration: 2.5, delay: 0.4 }}
                    className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full"
                    style={{
                        background: "radial-gradient(circle, rgba(79,126,255,0.1) 0%, transparent 70%)",
                        filter: "blur(60px)",
                    }}
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ duration: 2.5, delay: 0.7 }}
                    className="absolute -bottom-20 -right-20 w-[350px] h-[350px] rounded-full"
                    style={{
                        background: "radial-gradient(circle, rgba(120,80,255,0.12) 0%, transparent 70%)",
                        filter: "blur(60px)",
                    }}
                />
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage:
                            "linear-gradient(#4f7eff 1px, transparent 1px), linear-gradient(90deg, #4f7eff 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            {/* Card */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 w-full max-w-md"
            >
                {/* Logo */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={0}
                    className="flex items-center justify-center gap-2 mb-8"
                >
                    <div className="w-8 h-8 rounded-lg bg-[#4f7eff]/20 border border-[#4f7eff]/40 flex items-center justify-center">
                        <Sparkles size={14} className="text-[#4f7eff]" />
                    </div>
                    <span className="text-xl font-extrabold tracking-widest text-[#F0F4FF]">
                        TASKIFY
                    </span>
                </motion.div>

                {/* Form card */}
                <div className="relative rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-8 overflow-hidden">

                    {/* Card inner glow */}
                    <div
                        className="pointer-events-none absolute inset-0 rounded-2xl"
                        style={{ background: "radial-gradient(circle at 50% 0%, rgba(79,126,255,0.06), transparent 70%)" }}
                    />

                    <div className="relative z-10">

                        {/* Header */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={0.1}
                            className="text-center mb-8"
                        >
                            <h1 className="text-2xl font-extrabold tracking-tight mb-2"
                                style={{
                                    background: "linear-gradient(135deg, #F0F4FF 40%, #4f7eff 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Create your account
                            </h1>
                            <p className="text-[#6B7A99] text-sm">
                                Start your free 14-day trial. No credit card required.
                            </p>
                        </motion.div>

                        {/* Google SSO */}
                        <motion.button
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={0.2}
                            whileHover={{ y: -2, scale: 1.01 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="w-full flex items-center justify-center gap-3 bg-white/[0.05] hover:bg-white/[0.08] border border-white/[0.1] hover:border-[#4f7eff]/30 rounded-xl px-4 py-3 text-sm font-medium text-[#F0F4FF] transition-colors duration-300 mb-6"
                        >
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4" />
                                <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853" />
                                <path d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05" />
                                <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 6.29C4.672 4.163 6.656 3.58 9 3.58z" fill="#EA4335" />
                            </svg>
                            Continue with Google
                        </motion.button>

                        {/* Divider */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={0.25}
                            className="flex items-center gap-3 mb-6"
                        >
                            <div className="flex-1 h-[1px] bg-white/[0.06]" />
                            <span className="text-[#6B7A99] text-xs">or continue with email</span>
                            <div className="flex-1 h-[1px] bg-white/[0.06]" />
                        </motion.div>

                        {/* Form fields */}
                        <div className="flex flex-col gap-4">

                            {/* Full name */}
                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                                custom={0.3}
                            >
                                <label className="block text-xs font-medium text-[#9AAAC8] mb-1.5">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full bg-white/[0.04] border border-white/[0.08] focus:border-[#4f7eff]/50 focus:bg-[#4f7eff]/[0.04] rounded-xl px-4 py-3 text-sm text-[#F0F4FF] placeholder-[#6B7A99] outline-none transition-all duration-300"
                                />
                            </motion.div>

                            {/* Email */}
                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                                custom={0.35}
                            >
                                <label className="block text-xs font-medium text-[#9AAAC8] mb-1.5">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full bg-white/[0.04] border border-white/[0.08] focus:border-[#4f7eff]/50 focus:bg-[#4f7eff]/[0.04] rounded-xl px-4 py-3 text-sm text-[#F0F4FF] placeholder-[#6B7A99] outline-none transition-all duration-300"
                                />
                            </motion.div>

                            {/* Password */}
                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                                custom={0.4}
                            >
                                <label className="block text-xs font-medium text-[#9AAAC8] mb-1.5">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Min. 8 characters"
                                        className="w-full bg-white/[0.04] border border-white/[0.08] focus:border-[#4f7eff]/50 focus:bg-[#4f7eff]/[0.04] rounded-xl px-4 py-3 pr-11 text-sm text-[#F0F4FF] placeholder-[#6B7A99] outline-none transition-all duration-300"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7A99] hover:text-[#4f7eff] transition-colors duration-200"
                                    >
                                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                    </button>
                                </div>
                            </motion.div>

                            {/* Confirm Password */}
                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                                custom={0.45}
                            >
                                <label className="block text-xs font-medium text-[#9AAAC8] mb-1.5">
                                    Confirm Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={showConfirm ? "text" : "password"}
                                        placeholder="Repeat your password"
                                        className="w-full bg-white/[0.04] border border-white/[0.08] focus:border-[#4f7eff]/50 focus:bg-[#4f7eff]/[0.04] rounded-xl px-4 py-3 pr-11 text-sm text-[#F0F4FF] placeholder-[#6B7A99] outline-none transition-all duration-300"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirm(!showConfirm)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7A99] hover:text-[#4f7eff] transition-colors duration-200"
                                    >
                                        {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
                                    </button>
                                </div>
                            </motion.div>

                        </div>

                        {/* Terms */}
                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={0.5}
                            className="text-[#6B7A99] text-xs mt-4 leading-[1.7]"
                        >
                            By signing up, you agree to our{" "}
                            <a href="#" className="text-[#4f7eff] hover:underline">Terms of Service</a>{" "}
                            and{" "}
                            <a href="#" className="text-[#4f7eff] hover:underline">Privacy Policy</a>.
                        </motion.p>

                        {/* Submit */}
                        <motion.button
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={0.55}
                            whileHover={{ y: -2, scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="relative w-full mt-5 flex items-center justify-center gap-2 bg-[#4f7eff] text-white font-bold px-8 py-3.5 rounded-xl text-[15px] overflow-hidden group"
                            style={{ boxShadow: "0 0 30px rgba(79,126,255,0.35)" }}
                        >
                            <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                            Create Account
                            <ArrowRight size={16} />
                        </motion.button>

                        {/* Login link */}
                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={0.6}
                            className="text-center text-sm text-[#6B7A99] mt-6"
                        >
                            Already have an account?{" "}
                            <Link href="/login" className="text-[#4f7eff] font-medium hover:underline">
                                Log in
                            </Link>
                        </motion.p>

                    </div>
                </div>
            </motion.div>
        </main>
    );
}