"use client"

import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Navbar() {
    const nav_items = [
        { name: "Home", href: "/" },
        { name: "About", href: "/#about" },
        { name: "Testimonials", href: "/#testimonials" },
        { name: "Get Started", href: "/#cta" },
    ];

    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 10 }}
            transition={{ duration: 0.4, ease: "easeIn" }}
            viewport={{ once: true }}
            className="shadow-md  w-full absolute top-0 right-0 z-50">
            {/* Desktop Navbar */}
            <div className="max-w-7xl md:px-24 px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <a href="/" className="text-[#656FE4] text-2xl font-extrabold tracking-widest flex justify-center items-center gap-2">
                    <Image src="/logo.png" width={40} height={40} className='rounded' alt="logo" />
                    TASKIFY
                </a>

                {/* Desktop Links */}
                <ul className="hidden md:flex items-center gap-8">
                    {nav_items.map((item, index) => (
                        <li key={index}>
                            <a
                                href={item.href}
                                className="text-white text-base font-medium hover:text-[#656FE4] transition"
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Desktop Signup Button */}
                <a
                    href="/signup"
                    className="hidden md:inline-block bg-(--color-primary) text-white px-5 py-2 rounded-full border-2 hover:text-(--color-primary) hover:bg-[#000310] border-(--color-primary) transition"
                >
                    Signup
                </a>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Sidebar / Dropdown */}
            <div
                className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                    }`} >
                <ul className="flex flex-col gap-4 px-6 py-6 bg-[#040b29]">
                    {nav_items.map((item, index) => (
                        <li key={index}>
                            <a
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="block text-white text-lg font-medium hover:text-[#656FE4] transition"
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}

                    {/* ✅ Mobile Signup Button */}
                    <li className="mt-2">
                        <a
                            href="/signup"
                            onClick={() => setIsOpen(false)}
                            className="block w-full text-center bg-(--color-primary) text-white font-semibold px-5 py-2 rounded-full hover:bg-[#000310] transition"
                        >
                            Signup
                        </a>
                    </li>
                </ul>
            </div>
        </motion.nav>
    );
}

export default Navbar;