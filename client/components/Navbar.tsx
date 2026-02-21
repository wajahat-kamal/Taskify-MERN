import Image from 'next/image'
import React from 'react'

function Navbar() {
    const nav_items = ["Home", "About", "Tasks", "Pricing", "Products"]
    return (
        <nav className='bg-[#000310] w-full h-20 flex items-center justify-between px-30 py-4'>
            <div className='flex justify-center items-center gap-2'>
                <Image src="/logo.png" alt="logo" width={40} height={40} className='rounded'/>
                <h1 className='text-2xl text-[#5A5DC1]'>TASKIFY</h1>
            </div>
            <ul className='w-full flex justify-center items-center gap-8'>
                {nav_items.map((item, index) => (
                    <li key={item + index} >
                        {item}
                    </li>
                ))}
            </ul>
            <button className='bg-[#5A5DC1] px-6 py-2.5 rounded-4xl text-md'>Signup</button>
        </nav>
    )
}

export default Navbar