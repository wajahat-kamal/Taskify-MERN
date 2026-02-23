import React from 'react'
import { useRouter } from "next/navigation";
import { ArrowRight } from 'lucide-react';
import { motion } from "framer-motion"

function PrimaryButton({text, route, widthFull}: {text: string, route: string, widthFull: boolean}) {

    const router = useRouter()

    return (
        <motion.button
            onClick={() => router.push(route)}
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`relative cursor-pointer flex items-center justify-center gap-2 bg-(--color-primary) text-white font-bold px-8 py-3.5 rounded-xl text-[15px] overflow-hidden group ${widthFull ? "w-full" : ""}`}
            style={{ boxShadow: "0 0 30px rgba(79,126,255,0.45)" }}
        >
            {/* Shimmer */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12" />
            {text}
            <ArrowRight size={16} />
        </motion.button>
    )
}

export default PrimaryButton