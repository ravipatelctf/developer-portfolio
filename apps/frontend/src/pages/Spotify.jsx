import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Spotify() {
    const [currentSong, setCurrentSong] = useState(null);
    const [topTracks, setTopTracks] = useState({});
    const [followingArtists, setFollowingArtists] = useState({});

    const SERVER_BASE_URL = import.meta.env.VITE_SERVER_BASE_URL;

    useEffect(() => {
        getCurrentlyPlayingSong();
        getTopTracks();
        getFollowingArtists();
    }, []);

    function handleSpotifyAccessToken() {
        window.location.href = `${SERVER_BASE_URL}/refresh_token`;
    }

    async function getCurrentlyPlayingSong() {
        try {
            const response = await axios.get(`${SERVER_BASE_URL}/currently-playing-song`, {
                withCredentials: true,
            });
            setCurrentSong(response.data);
        } catch (err) {
            console.error("currently playing error:", err);
        }
    }

    async function getTopTracks() {
        try {
            const response = await axios.get(`${SERVER_BASE_URL}/top-tracks`, {
                withCredentials: true,
            });
            setTopTracks(response.data || {});
        } catch (err) {
            console.error("top tracks error:", err);
        }
    }

    async function getFollowingArtists() {
        try {
            const response = await axios.get(`${SERVER_BASE_URL}/following-artists`, {
                withCredentials: true,
            });
            setFollowingArtists(response.data || {});
        } catch (err) {
            console.error("following artists error:", err);
        }
    }

    return (
        <>
            <Header />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-white">
                
                {/* Title */}
                <h2 className="text-center text-4xl sm:text-5xl font-extrabold mb-10">
                    My Spotify Info
                </h2>

                {/* Access Token Button */}
                <div className="flex justify-center mb-12">
                    <button
                        onClick={handleSpotifyAccessToken}
                        className="px-5 py-2.5 rounded-lg 
                                   bg-green-600 text-black font-semibold 
                                   hover:bg-green-500 transition"
                    >
                        Get New Access Token
                    </button>
                </div>

                {/* Main Responsive Grid */}
                <section className="
                    grid 
                    grid-cols-1 
                    md:grid-cols-2 
                    lg:grid-cols-3 
                    gap-8
                ">
                    {/* Currently Playing */}
                    <div className="bg-neutral-900 rounded-xl p-6 shadow-md border border-gray-800">
                        <h5 className="text-lg font-semibold mb-4 text-center">
                            Currently Playing Song
                        </h5>

                        {currentSong ? (
                            <div className="space-y-4">
                                {/* Album Image */}
                                <div className="flex justify-center">
                                    {currentSong?.item?.album?.images?.slice(0, 1).map((image, i) => (
                                        <img
                                            key={i}
                                            src={image?.url}
                                            alt={`${currentSong?.item?.name} cover`}
                                            className="rounded-lg w-40 h-40 object-cover shadow"
                                        />
                                    ))}
                                </div>

                                <p className="text-sm text-gray-300">
                                    <span className="font-semibold text-white">Song: </span>
                                    {currentSong?.item?.name}
                                </p>

                                <p className="text-sm text-gray-300">
                                    <span className="font-semibold text-white">Artists: </span>
                                    {currentSong?.item?.artists?.map(a => a?.name).join(", ")}
                                </p>
                            </div>
                        ) : (
                            <p className="text-sm text-gray-400 text-center">No Song Playing</p>
                        )}
                    </div>

                    {/* Following Artists */}
                    <div className="bg-neutral-900 rounded-xl p-6 shadow-md border border-gray-800">
                        <h5 className="text-lg font-semibold mb-4">Artists I Follow</h5>

                        <ul className="space-y-2 text-sm text-gray-300 max-h-64 overflow-auto pr-1">
                            {followingArtists?.artists?.items?.length > 0 ? (
                                followingArtists.artists.items.map((it, i) => (
                                    <li
                                        key={i}
                                        className="bg-neutral-800 px-3 py-2 rounded-md"
                                    >
                                        {it?.name}
                                    </li>
                                ))
                            ) : (
                                <li className="text-gray-400">No artists found</li>
                            )}
                        </ul>
                    </div>

                    {/* Top Tracks */}
                    <div className="bg-neutral-900 rounded-xl p-6 shadow-md border border-gray-800">
                        <h5 className="text-lg font-semibold mb-4">Top Ten Tracks</h5>

                        <ul className="space-y-2 text-sm text-gray-300 max-h-64 overflow-auto pr-1">
                            {topTracks?.items?.length > 0 ? (
                                topTracks.items.map((it, i) => (
                                    <li
                                        key={i}
                                        className="bg-neutral-800 px-3 py-2 rounded-md"
                                    >
                                        {it?.name}
                                    </li>
                                ))
                            ) : (
                                <li className="text-gray-400">No top tracks found</li>
                            )}
                        </ul>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
