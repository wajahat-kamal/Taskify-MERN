"use client"
import React from 'react'
import { RootState } from '@/store/store'
import { useSelector } from 'react-redux'

function page() {
    const { user } = useSelector((state: RootState) => state.auth)

    return (
        <div className='bg-[#0e0f14] min-h-screen text-white'>
            <aside className="fixed left-0 top-0 h-full w-16 bg-[#13141b] flex flex-col justify-between items-center py-6 gap-6 border-r border-white/5 z-10">
                <div className="w-10 h-10 rounded-lg bg-(--color-primary) flex items-center justify-center text-sm font-bold">T</div>
                <div className='w-10 h-10 rounded-full bg-(--color-primary) flex items-center justify-center text-xs font-bold'>
                    {user?.name.split(" ").map(word => word[0]).join("").toUpperCase()}
                </div>
            </aside>

            <main className='ml-16 p-8 fade-in'>

                <header className="flex items-center justify-between mb-10">
                    <div>
                        <p className="text-slate-500 text-sm">Welcome back,</p>
                        <h1 className="text-xl font-semibold mt-0.5">{user?.name ?? "User"}</h1>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="text-right hidden sm:block">
                            <p className="text-slate-500 text-sm">{new Date().toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" })}</p>
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 stagger">

                    {/* Circular progress */}
                    <div className="bg-[#13141d] border border-white/[0.05] rounded-2xl p-5 flex items-center gap-4">
                        <div className="relative w-14 h-14 shrink-0">
                            <svg width="56" height="56" className="progress-ring">
                                <circle cx="28" cy="28" r="22" fill="none" stroke="#1e2030" strokeWidth="5" />
                                <circle cx="28" cy="28" r="22" fill="none" stroke="#6366f1" strokeWidth="5"
                                    strokeDasharray={`${2 * Math.PI * 22}`}
                                    strokeDashoffset={`${2 * Math.PI * 22 * (1 - 25 / 100)}`}
                                    strokeLinecap="round"
                                    style={{ transition: "stroke-dashoffset 1s ease" }}
                                />
                            </svg>
                            <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-indigo-400">25%</span>
                        </div>
                        <div>
                            <p className="text-slate-500 text-xs mb-0.5">Progress</p>
                            <p className="text-white font-semibold text-sm">2/8 done</p>
                        </div>
                    </div>

                    <div className="bg-[#13141d] border border-white/[0.05] rounded-2xl p-5">
                        <p className="text-slate-500 text-xs uppercase tracking-wider mb-2">Total</p>
                        <p className="text-3xl font-bold text-white">8</p>
                        <p className="text-slate-600 text-xs mt-1">all tasks</p>
                    </div>

                    <div className="bg-[#13141d] border border-white/[0.05] rounded-2xl p-5">
                        <p className="text-slate-500 text-xs uppercase tracking-wider mb-2">Pending</p>
                        <p className="text-3xl font-bold text-amber-400">2</p>
                        <p className="text-slate-600 text-xs mt-1">not completed</p>
                    </div>

                    <div className="bg-[#13141d] border border-white/[0.05] rounded-2xl p-5">
                        <p className="text-slate-500 text-xs uppercase tracking-wider mb-2">Overdue</p>
                        <p className="text-3xl font-bold text-rose-400">6</p>
                        <p className="text-slate-600 text-xs mt-1">past due date</p>
                    </div>
                </div>

            </main>
        </div>
    )
}

export default page