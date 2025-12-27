import { useState, useEffect } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";
import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaInstagram,
} from "react-icons/fa";
import TopButton from "./TopButton";

const Footer = () => {
    const email = "nahidazad07@gmail.com";
    const [copied, setCopied] = useState(false);
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <footer className="bg-black text-white">
            <div className="border-t border-white/20" />

            <div className="max-w-6xl mx-auto pt-10 px-3 sm:px-6 flex flex-col items-center gap-6">

                {/* Name */}
                <div className="flex flex-col items-center text-center">
                    <div className="text-2xl sm:text-3xl font-['Metal']">Nahid Azad</div>
                    <div className="text-xs sm:text-sm text-white/60 max-w-xs">
                        full-stack developer · problem solver · marlboro enjoyer
                    </div>
                </div>

                {/* Socials */}
                <div className="flex flex-wrap justify-center gap-5 text-white/60">
                    <a href="https://github.com/inv-nahid" target="_blank" rel="noreferrer"
                        className="flex items-center gap-2 hover:text-white transition-colors">
                        <FaGithub size={22} className="hover:text-green-500 transition-colors duration-700" />
                        <p className="text-sm">GitHub</p>
                    </a>

                    <a href="https://www.linkedin.com/in/tagnahid" target="_blank" rel="noreferrer"
                        className="flex items-center gap-2 hover:text-white transition-colors">
                        <FaLinkedin size={22} className="hover:text-blue-500 transition-colors duration-700" />
                        <p className="text-sm">LinkedIn</p>
                    </a>

                    <a href="https://x.com/xizt_7" target="_blank" rel="noreferrer"
                        className="flex items-center gap-2 hover:text-white transition-colors">
                        <FaTwitter size={22} className="hover:text-blue-400 transition-colors duration-700" />
                        <p className="text-sm">Twitter</p>
                    </a>

                    <a href="https://www.instagram.com/xizt_07" target="_blank" rel="noreferrer"
                        className="flex items-center gap-2 hover:text-white transition-colors">
                        <FaInstagram size={22} className="hover:text-pink-600 transition-colors duration-700" />
                        <p className="text-sm">Instagram</p>
                    </a>
                </div>

                {/* Copy Email */}
                <div
                    className="
        flex items-center gap-3
        border border-white/20 hover:border-red-700
        transition-colors
        px-4 py-2
        text-white/70
        text-sm
      "
                >
                    <span>{copied ? "Email copied!" : "Copy my email"}</span>
                    <button onClick={handleCopy} aria-label="Copy email">
                        {copied ? <FiCheck size={14} /> : <FiCopy size={14} />}
                    </button>
                </div>

                {/* Time + Arabic */}
                <div className="flex flex-col sm:flex-row items-center gap-3">
                    <div className="text-red-700 text-xs tracking-wide uppercase">
                        {time.toLocaleTimeString()}
                    </div>
                    <div className="font-['Fjalla_One'] text-2xl sm:text-3xl text-red-700">
                        ٱلْحَمْدُ لِلّٰهِ
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-3 py-4 text-[11px]">
                    <div>© 2025 NAHID. ALL RIGHTS RESERVED</div>
                    <TopButton />
                </div>

            </div>
        </footer>

    );
};

export default Footer;
