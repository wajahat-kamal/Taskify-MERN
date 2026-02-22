"use client"
import AboutSection from "@/components/AboutSection";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { motion, Variants } from "framer-motion";


export default function Home() {
  return (
    <div className="bg-[#000310]">
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
      <Navbar />
      <Hero />
      <AboutSection />
    </div>
  );
}
