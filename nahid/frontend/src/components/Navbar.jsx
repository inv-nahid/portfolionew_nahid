import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import MenuOpenIcon from "@mui/icons-material/MenuOpen"
import CloseIcon from "@mui/icons-material/Close"

const Navbar = () => {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "auto"
    }, [open])

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 h-18 mb-12 font-['Fjalla_One'] tracking-widest bg-black/30 backdrop-blur-sm border-b border-white/10">
                <Link
                    to="/"
                    className="text-white font-semibold text-xl underline decoration-red-500 hover:text-red-500 transition-colors duration-500"
                >
                    NAHID.
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex gap-8 text-white">
                    <Link to="/about" className="hover:text-red-500 transition-colors duration-500">
                        ABOUT
                    </Link>
                    <Link to="/projects" className="hover:text-red-500 transition-colors duration-500">
                        PROJECTS
                    </Link>
                    <a className="hover:text-red-500 transition-colors duration-500">
                        GITHUB
                    </a>
                    <a className="hover:text-red-500 transition-colors duration-500">
                        RESUME
                    </a>
                    <Link to="/blogs" className="hover:text-red-500 transition-colors duration-500">
                        BLOG
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <CloseIcon fontSize="large" /> : <MenuOpenIcon fontSize="large" />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {open && (
                <div className="fixed top-18 left-0 w-full bg-black/90 backdrop-blur-sm border-b border-white/10 md:hidden flex flex-col items-center gap-6 py-6 font-['Fjalla_One'] tracking-widest text-white z-40">
                    <Link to="/about" onClick={() => setOpen(false)}>
                        ABOUT
                    </Link>
                    <Link to="/projects" onClick={() => setOpen(false)}>
                        PROJECTS
                    </Link>
                    <a onClick={() => setOpen(false)}>
                        GITHUB
                    </a>
                    <a onClick={() => setOpen(false)}>
                        RESUME
                    </a>
                    <Link to="/blogs" onClick={() => setOpen(false)}>
                        BLOG
                    </Link>
                </div>
            )}
        </>
    )
}

export default Navbar
