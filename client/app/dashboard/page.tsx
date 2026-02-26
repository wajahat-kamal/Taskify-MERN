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

                <header className='flex items-center justify-between mb-8'>
                    <div>
                        <p className="text-slate-400 text-sm mb-1">Good morning,</p>
                        <h1 className="text-2xl font-semibold tracking-tight">{user?.name} 👋</h1>
                    </div>
                    <div className="text-right">
                        <p className="text-slate-500 text-sm mt-1">{new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}</p>
                    </div>
                </header>
            </main>
        </div>
    )
}

export default page