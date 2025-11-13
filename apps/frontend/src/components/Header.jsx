import { FaGithub } from "react-icons/fa6";
import { FaSpotify } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
    const SERVER_BASE_URL = import.meta.env.VITE_SERVER_BASE_URL;
    function handleSpotifyLogin() {
        window.location.href = `${SERVER_BASE_URL}/login`;
    }
    return (
        <div className="container py-3 bg-black d-flex align-items-center justify-content-between">
            <Link to={`/`} className="text-decoration-none">
            <div className="d-flex gap-2 align-items-center">
                <span className="text-success fw-bold fs-4">{`[`}</span>
                <span className="text-white fs-4 fw-bold">"Ravi", </span>
                <span className="text-white fs-4 fw-bold">"Shankar", </span>
                <span className="text-white fs-4 fw-bold">"Patel"</span>
                <span className="text-success fw-bold fs-4">{`]`}</span>
            </div>
            </Link>
            <div className="d-flex gap-2">
                <Link onClick={handleSpotifyLogin} className="text-decoration-none text-white">
                    <FaSpotify size="1.5em" />
                </Link>
                <a href="https://github.com/ravipatelctf/developer-portfolio" target="_blank"><FaGithub size={25} color="white" /></a>
            </div>
        </div>
    )
}