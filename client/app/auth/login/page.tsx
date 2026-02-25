"use client"
import { motion } from "framer-motion";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { fadeUp } from "@/components/Hero";
import { useRouter } from "next/navigation";
import PrimaryButton from "@/components/PrimaryButton";
import { toast } from "react-toastify";
import axios from "axios";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter()

    const [form, setForm] = useState({ email: "", password: "" })

    const submitLoginForm = async () => {
        const { email, password } = form;

        // Basic client-side validation
        if (!email.trim() || !password.trim()) {
            return toast.error("All fields are required");
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return toast.error("Please enter a valid email");
        }
        if (password.length < 6) {
            return toast.error("Password must be at least 6 characters");
        }

        try {
            const { data } = await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
                form
            );

            if (data.success) {
                toast.success(data.message);
                setForm({ email: "", password: "" });
                router.push("/"); // redirect after success
            } else {
                toast.error(data.message);
            }
        } catch (error: any) {
            const message =
                error.response?.data?.message || // server error message
                error.message ||                 // axios/network error
                "Something went wrong";
            toast.error(message);
        }
    };

    return (
        <main className="min-h-screen bg-[#00030f] text-[#F0F4FF] flex items-center justify-center px-6 py-16 relative overflow-hidden">

            {/* Card */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 w-full max-w-md"
            >
                {/* Form card */}
                <div className="relative rounded-2xl border border-white/8 bg-white/3 backdrop-blur-sm p-8 overflow-hidden">

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
                            className="text-center mb-8 flex flex-row justify-center items-center gap-8"
                        >
                            <button
                                onClick={() => router.push("/")}
                                className="w-9 h-9 rounded-xl bg-white/4 border border-white/8 hover:border-[#4f7eff]/40 hover:bg-[#4f7eff]/10 flex items-center justify-center transition-colors duration-300"
                            >
                                <ArrowLeft size={16} className="text-[#6B7A99]" />
                            </button>
                            <div className="flex flex-col justify-center items-center">
                                <h1 className="text-2xl font-extrabold tracking-tight mb-2"
                                >
                                    Welcome Back
                                </h1>
                                <p className="text-[#6B7A99] text-sm">
                                    Join 12,000+ teams — completely free.
                                </p>
                            </div>
                        </motion.div>

                        {/* Form fields */}
                        <div className="flex flex-col gap-4">

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
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full bg-white/4 border border-white/8 focus:border-[#4f7eff]/50 focus:bg-[#4f7eff]/4 rounded-xl px-4 py-3 text-sm text-[#F0F4FF] placeholder-[#6B7A99] outline-none transition-all duration-300"
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
                                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Min. 6 characters"
                                        className="w-full bg-white/4 border border-white/8 focus:border-[#4f7eff]/50 focus:bg-[#4f7eff]/4 rounded-xl px-4 py-3 pr-11 text-sm text-[#F0F4FF] placeholder-[#6B7A99] outline-none transition-all duration-300"
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

                        </div>

                        {/* Submit */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={0.55}
                            className="relative w-full mt-5 flex items-center justify-center group"
                        >
                            <PrimaryButton text="Welcome Back" route="" widthFull={true} onClick={submitLoginForm} />
                        </motion.div>

                        {/* Login link */}
                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={0.6}
                            className="text-center text-sm text-[#6B7A99] mt-6"
                        >
                            Don't have an account?{" "}
                            <Link href="/auth/signup" className="text-[#4f7eff] font-medium hover:underline">
                                Signup
                            </Link>
                        </motion.p>

                    </div>
                </div>
            </motion.div>
        </main>
    );
}