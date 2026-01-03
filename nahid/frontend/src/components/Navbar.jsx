import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import MenuOpenIcon from "@mui/icons-material/MenuOpen"
import CloseIcon from "@mui/icons-material/Close"

import { useLocation } from "react-router-dom"

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const location = useLocation()
    const hideProjects = ["/about"].includes(location.pathname)

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "auto"
    }, [open])

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 h-18 mb-5 font-['Fjalla_One'] tracking-widest bg-black/30 backdrop-blur-sm border-b border-white/10">
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

                    {!hideProjects && (
                        <a
                            href="#projects"
                            className="hover:text-red-500 transition-colors duration-500"
                        >
                            PROJECTS
                        </a>
                    )}

                    <a href="https://github.com/inv-nahid" target="_blank" className=" hover:text-red-500 transition-colors duration-500">
                        GITHUB
                    </a>

                    <a href="../../public/NahidAzad_CSE_2026.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors duration-500">
                        RESUME
                    </a>

                    <Link to="#" className="hover:text-red-500 transition-colors duration-500">
                        BLOG
                    </Link>

                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setOpen(!open)}
                >
                    <div className="relative w-10 h-10 flex items-center justify-center">
                        <MenuOpenIcon
                            sx={{
                                position: "absolute",
                                transition: "all 300ms ease-out",
                                transform: open
                                    ? "scale(0.75) rotate(45deg)"
                                    : "scale(1) rotate(0deg)",
                                opacity: open ? 0 : 1,
                            }}
                            fontSize="medium"
                            className="hover:text-red-500 transition-colors duration-500"
                        />

                        <CloseIcon
                            sx={{
                                position: "absolute",
                                transition: "all 300ms ease-out",
                                transform: open
                                    ? "scale(1) rotate(0deg)"
                                    : "scale(0.75) rotate(-45deg)",
                                opacity: open ? 1 : 0,
                            }}
                            fontSize="medium"
                            className="hover:text-red-500 transition-colors duration-500"
                        />
                    </div>

                </button>
            </nav>

            {/* Mobile Menu */}

            <div
                className={`
                    fixed top-18 left-0 w-full
                    bg-black/80 backdrop-blur-[1px]
                    border-b border-white/10
                    md:hidden
                    flex flex-col items-center gap-6 py-6
                    font-['Fjalla_One'] tracking-widest text-white
                    z-40
                    transition-all duration-400 ease-out
                    ${open
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-4 pointer-events-none"}
                    `}
            >

                <Link to="/about" onClick={() => setOpen(false)} className="hover:text-red-500 transition-colors duration-500">
                    ABOUT
                </Link>
                {!hideProjects && (
                    <a
                        href="#projects"
                        className="hover:text-red-500 transition-colors duration-500"
                    >
                        PROJECTS
                    </a>
                )}
                <a onClick={() => setOpen(false)} className="hover:text-red-500 transition-colors duration-500">
                    GITHUB
                </a>
                <a onClick={() => setOpen(false)} className="hover:text-red-500 transition-colors duration-500">
                    RESUME
                </a>
                <Link to="/blogs" onClick={() => setOpen(false)} className="hover:text-red-500 transition-colors duration-500">
                    BLOG
                </Link>
            </div>

        </>
    )
}

export default Navbar
