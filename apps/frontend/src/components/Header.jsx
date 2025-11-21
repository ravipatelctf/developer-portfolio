import { useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { FaSpotify } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const SERVER_BASE_URL = import.meta.env.VITE_SERVER_BASE_URL;

    function handleSpotifyLogin() {
        window.location.href = `${SERVER_BASE_URL}/login`;
    }

    return (
        <header className="w-full bg-black py-3 border-b border-gray-800 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="no-underline">
                    <div className="flex items-center space-x-2 text-xl sm:text-2xl font-bold">
                        <span className="text-green-500">[</span>
                        <span className="text-white">"Ravi",</span>
                        <span className="text-white">"Shankar",</span>
                        <span className="text-white">"Patel"</span>
                        <span className="text-green-500">]</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-6 text-white">

                    <button
                        onClick={handleSpotifyLogin}
                        className="hover:text-green-400 transition"
                    >
                        <FaSpotify size="1.5em" />
                    </button>

                    <a
                        href="https://github.com/ravipatelctf/developer-portfolio"
                        target="_blank"
                        className="hover:text-green-400 transition"
                    >
                        <FaGithub size={23} />
                    </a>

                    <Link
                        to="/quiz"
                        className="px-3 py-1 border border-gray-600 text-white rounded text-sm font-semibold hover:bg-gray-700 transition"
                    >
                        AI Quiz
                    </Link>

                    {/* You can add unlimited links here:
                        <Link to="/about" className="...">About</Link>
                        <Link to="/projects" className="...">Projects</Link>
                    */}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white hover:text-green-400 transition"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {menuOpen && (
                <div className="md:hidden bg-black border-t border-gray-800 py-3 animate-fade-down">
                    <div className="flex flex-col space-y-4 px-5 text-white">

                        <button
                            onClick={handleSpotifyLogin}
                            className="flex items-center gap-2 text-left hover:text-green-400 transition"
                        >
                            <FaSpotify size={22} /> My Spotify Info
                        </button>

                        <a
                            href="https://github.com/ravipatelctf/developer-portfolio"
                            target="_blank"
                            className="flex items-center gap-2 hover:text-green-400 transition"
                        >
                            <FaGithub size={22} /> GitHub
                        </a>

                        <Link
                            to="/quiz"
                            className="w-fit px-3 py-1 border border-gray-600 text-white rounded text-sm font-semibold hover:bg-gray-700 transition"
                        >
                            AI Quiz
                        </Link>

                        {/* Add future links here */}
                        {/* 
                        <Link to="/projects" className="hover:text-green-400">Projects</Link>
                        <Link to="/contact" className="hover:text-green-400">Contact</Link>
                        */}
                    </div>
                </div>
            )}
        </header>
    );
}
