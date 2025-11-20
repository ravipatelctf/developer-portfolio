
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Spotify from "./pages/Spotify";
import Quiz from "./pages/Quiz";
import { ToastContainer } from "react-toastify";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/spotify" element={<Spotify />} />
                <Route path="/quiz" element={<Quiz />} />
            </Routes>
            <ToastContainer autoClose={2000} position="top-center" />
        </Router>
    )
}