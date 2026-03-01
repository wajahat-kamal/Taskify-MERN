"use client"
import React, { useState } from 'react'
import { RootState } from '@/store/store'
import { useSelector } from 'react-redux'
import Image from 'next/image'
import { Bell, Plus } from 'lucide-react'

function Dashboard() {
    const { user } = useSelector((state: RootState) => state.auth)

    const [search, setSearch] = useState("")
    const [filterCompleted, setFilterCompleted] = useState<"all" | "pending" | "completed">("all");
    const [filterPriority, setFilterPriority] = useState<"all" | "high" | "medium" | "low">("all");


    return (
        <div className='bg-[#0e0f14] min-h-screen text-white'>
            <aside className="fixed left-0 top-0 h-full w-16 bg-[#13141b] flex flex-col justify-between items-center py-6 gap-6 border-r border-white/5 z-10">
                <div className="w-10 h-10 rounded-lg bg-(--color-primary) flex items-center justify-center text-sm font-bold">
                    <Image src="/logo.png" alt="logo" width={60} height={60} />
                </div>
                <div className='w-10 h-10 rounded-full bg-(--color-primary) flex items-center justify-center text-xs font-bold'>
                    {user?.name.split(" ").map(word => word[0]).join("").toUpperCase()}
                </div>
            </aside>

            <main className='ml-16 p-8 fade-in'>

                {/* Header */}
                <header className="flex items-center justify-between mb-10">
                    {/* Left — greeting */}
                    <div className="flex flex-col gap-0.5">
                        <p className="text-xs font-medium text-slate-500 uppercase tracking-widest">
                            {new Date().toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" })}
                        </p>
                        <h1 className="text-2xl font-semibold text-white leading-tight tracking-tight">
                            Welcome back, <span className="text-indigo-400">{user?.name ?? "User"}</span> 👋
                        </h1>
                    </div>

                    {/* Right — actions */}
                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-sm text-white
      bg-(--color-primary)/90 hover:bg-(--color-primary) active:scale-95
      shadow-lg shadow-indigo-500/20 cursor-pointer
      transition-all duration-150">
                            <Plus size={15} />
                            <span className="hidden md:inline">Create Task</span>
                        </button>
                    </div>
                </header>

                {/* Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8 stagger">
                    {/* Circular progress */}
                    <div className="bg-[#13141d] border border-white/5 rounded-2xl p-5 flex items-center gap-4">
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

                    {[
                        { title: "Total", numbers: 9, para: "all tasks", numColor: "text-white" },
                        { title: "Pending", numbers: 2, para: "not completed", numColor: "text-amber-400" },
                        { title: "Completed", numbers: 3, para: "completed", numColor: "text-green-400" },
                        { title: "Overdue", numbers: 4, para: "past due date", numColor: "text-rose-400" },
                    ].map((item) => (
                        <div className="bg-[#13141d] border border-white/5 rounded-2xl p-5">
                            <p className="text-slate-500 text-xs uppercase tracking-wider mb-2">{item.title}</p>
                            <p className={`text-3xl font-bold ${item.numColor}`}>{item.numbers}</p>
                            <p className="text-slate-600 text-xs mt-1">{item.para}</p>
                        </div>
                    ))}
                </div>

                {/* Filters */}
                <div className="flex flex-wrap items-center gap-3 mb-5">
                    <div className="relative flex-1 min-w-48">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-sm">🔍</span>
                        <input
                            type="text"
                            placeholder="Search by title or description…"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full bg-[#13141d] border border-white/6 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-600 focus:border-indigo-500/40"
                        />
                    </div>

                    {/* Completion filter */}
                    <div className="flex gap-1 bg-[#13141d] border border-white/6 rounded-xl p-1">
                        {(["all", "pending", "completed"] as const).map((item) => (
                            <button key={item} onClick={() => setFilterCompleted(item)}
                                className={`cursor-pointer pill px-3 py-1.5 rounded-lg text-xs font-medium capitalize ${filterCompleted === item ? "bg-(--color-primary) text-white" : "text-slate-500 hover:text-slate-300"}`}>
                                {item}
                            </button>
                        ))}
                    </div>

                    {/* Priority filter */}
                    <div className="flex gap-1 bg-[#13141d] border border-white/6 rounded-xl p-1">
                        {(["all", "high", "medium", "low"] as const).map((item) => (
                            <button key={item} onClick={() => setFilterPriority(item)}
                                className={`cursor-pointer pill px-3 py-1.5 rounded-lg text-xs font-medium capitalize ${filterPriority === item ? "bg-(--color-primary) text-white" : "text-slate-500 hover:text-slate-300"}`}>
                                {item === "all" ? "All Priority" : item}
                            </button>
                        ))}
                    </div>
                </div>

                <p className="text-slate-600 text-xs mb-4">8 Tasks</p>

            </main >
        </div >
    )
}

export default Dashboard