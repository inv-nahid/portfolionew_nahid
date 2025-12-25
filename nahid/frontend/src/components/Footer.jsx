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
        <footer className="bg-black text-white ">
            <div className="border-t border-white/20 px-3"></div>
            <div className="max-w-6xl mx-auto pt-10 flex flex-col items-center gap-3">

                <div className="flex flex-col items-center">
                    <div className="text-3xl font-['Metal']">Nahid Azad</div>
                    <div className="text-sm text-white/60">
                        full-stack developer · problem solver · marlboro enjoyer
                    </div>
                </div>

                <div className="flex gap-6 text-white/60 ">
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 hover:text-white transition-colors"
                    >
                        <FaGithub className="hover:text-green-600 transition-colors duration-500" size={25} />
                        <p className="text-sm">GitHub</p>
                    </a>

                    <a
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 hover:text-white transition-colors"
                    >
                        <FaLinkedin className="hover:text-blue-500 transition-colors duration-500" size={25} />
                        <p className="text-sm">LinkedIn</p>
                    </a>

                    <a
                        href="https://twitter.com/yourusername"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 hover:text-white transition-colors"
                    >
                        <FaTwitter className="hover:text-blue-400 transition-colors duration-500" size={25} />
                        <p className="text-sm">Twitter</p>
                    </a>

                    <a
                        href="https://instagram.com/yourusername"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 hover:text-white transition-colors"
                    >
                        <FaInstagram className="hover:text-pink-700 transition-colors duration-500" size={25} />
                        <p className="text-sm">Instagram</p>
                    </a>
                </div>

                {/* Copy box */}
                <div
                    className="
            flex items-center gap-4
            border border-white/20
            hover:border-red-700
            hover:text-red-700
            transition-colors
            px-5 py-3 mb-8 mt-8
            text-white/70"
                    data-cursor="invert"
                >
                    <span className="text-sm tracking-wide hover:border-red-700 transition-colors duration-500">
                        {copied ? "Email copied" : "Copy my email"}
                    </span>

                    <button
                        onClick={handleCopy}
                        className="text-white/60 transition-colors duration-500"
                        aria-label="Copy email"
                    >
                        {copied ? <FiCheck className="hover:text-green-500" size={14} /> : <FiCopy className="hover:text-green-500" size={14} />}
                    </button>
                </div>


                <div className="flex gap-5 mb-1">
                    {/* Current time */}
                    <div className="text-red-700 text-sm tracking-wide px-2 py-2 uppercase">
                        {time.toLocaleTimeString()}
                    </div>
                    <div className="font-['Fjalla_One'] text-3xl text-red-700">ٱلْحَمْدُ لِلّٰهِ</div>
                </div>
                <div className="flex justify-between items-center w-full py-4 px-8">
                    <div className="text-[11px]">© 2025 NAHID. ALL RIGHTS RESERVED</div>
                    <div><TopButton className="flex items-start" /></div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
