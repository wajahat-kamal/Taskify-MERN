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



            </main>
        </div>
    )
}

export default page