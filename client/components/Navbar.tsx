import React from 'react'

function Navbar() {
    const nav_items = ["Home", "About", "Tasks"]
    return (
        <nav className='w-full h-20 flex items-center justify-between px-20 py-4'>
            <div>
                <img src="" alt="logo" />
                <h1>Taskify</h1>
            </div>
            <ul className='w-full flex justify-center items-center gap-3'>
                {nav_items.map((item, index) => (
                    <li key={item + index} >
                        {item}
                    </li>
                ))}
            </ul>
                <button>Sign up</button>
        </nav>
    )
}

export default Navbar