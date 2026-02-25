"use client"

import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { nav_items } from '@/data/generalData';
import Link from 'next/link';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '@/store/slices/authSlice';
import { RootState } from "@/store/store";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const { user } = useSelector((state: RootState) => state.auth)
    const dispatch = useDispatch()

    async function logoutHandler() {
        try {
            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`)
            if (data.success) {
                toast.success(data.message)
                dispatch(setUser({ user: null }))
            }
        } catch (error: any) {
            toast.error(error?.message)
        }
    }

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
                <Link href="/" className="text-[#656FE4] text-2xl font-extrabold tracking-widest flex justify-center items-center gap-2">
                    <Image src="/logo.png" width={40} height={40} className='rounded' alt="logo" />
                    TASKIFY
                </Link>

                {/* Desktop Links */}
                <ul className="hidden md:flex items-center gap-8">
                    {nav_items.map((item, index) => (
                        <li key={index}>
                            <Link
                                href={item.href}
                                className="text-white text-base font-medium hover:text-[#656FE4] transition"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <button
                    onClick={logoutHandler}
                    className="hidden md:inline-block bg-(--color-primary) text-white px-5 py-2 rounded-full border-2 hover:text-(--color-primary) hover:bg-[#000310] border-(--color-primary) transition"
                >
                    Logout
                </button>

                {/* Desktop Signup Button */}
                <Link
                    href="/auth/login"
                    className="hidden md:inline-block bg-(--color-primary) text-white px-5 py-2 rounded-full border-2 hover:text-(--color-primary) hover:bg-[#000310] border-(--color-primary) transition"
                >
                    Login
                </Link>

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
                            <Link
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="block text-white text-lg font-medium hover:text-[#656FE4] transition"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}

                    {/* ✅ Mobile Signup Button */}
                    <li className="mt-2">
                        <Link
                            href="/auth/login"
                            onClick={() => setIsOpen(false)}
                            className="block w-full text-center bg-(--color-primary) text-white font-semibold px-5 py-2 rounded-full hover:bg-[#000310] transition"
                        >
                            Login
                        </Link>
                    </li>
                </ul>
            </div>
        </motion.nav>
    );
}

export default Navbar;