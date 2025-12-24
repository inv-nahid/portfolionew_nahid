import React from 'react'

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 h-18 mb-12 font-['Fjalla_One'] tracking-widest bg-black/30 backdrop-blur-sm border-b border-white/10">
            <a href="#" className='text-white font-semibold text-xl underline decoration-red-500 hover:text-red-500 transition-colors duration-500'>
                NAHID.
            </a>
            <div className='flex gap-8'>
                <a href="#" className='hover:text-red-500 transition-colors duration-500'>ABOUT</a>
                <a href="#" className='hover:text-red-500 transition-colors duration-500'>PROJECTS</a>
                <a href="#" className='hover:text-red-500 transition-colors duration-500'>GITHUB</a>
                <a href="#" className='hover:text-red-500 transition-colors duration-500'>RESUME</a>
            </div>
        </nav >
    )
}

export default Navbar