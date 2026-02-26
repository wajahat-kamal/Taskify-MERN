"use client"
import React from 'react'
import { RootState } from '@/store/store'
import { useSelector } from 'react-redux'

function page() {
    const { user } = useSelector((state: RootState) => state.auth)

    return (
        <div className='bg-[#0e0f14] min-h-screen text-white'>
            <aside>
                <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-sm font-bold">T</div>
                <div>
                    {user?.name.split(" ").map(word => word[0]).join("").toUpperCase()}
                </div>
            </aside>
        </div>
    )
}

export default page