import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 h-18 mb-12 font-['Fjalla_One'] tracking-widest bg-black/30 backdrop-blur-sm border-b border-white/10">
            <Link to="/" className='text-white font-semibold text-xl underline decoration-red-500 hover:text-red-500 transition-colors duration-500'>
                NAHID.
            </Link>
            <div className='flex gap-8 text-white'>
                <Link to='/about' className='hover:text-red-500 transition-colors duration-500' >ABOUT</Link>
                <a className='hover:text-red-500 transition-colors duration-500' >PROJECTS</a>
                <a className='hover:text-red-500 transition-colors duration-500' >GITHUB</a>
                <a className='hover:text-red-500 transition-colors duration-500' >RESUME</a>
                <Link to='/blogs' className='hover:text-red-500 transition-colors duration-500' >BLOG</Link>
            </div>
        </nav >
    )
}

export default Navbar