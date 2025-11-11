
import { useState } from "react";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";

export default function Spotify() {
    const [topTracks, setTopTracks] = useState([]);
    const [currentlyPlayingSong, setCurrentlyPlayingSong] = useState(null);
    const [followedArtists, setFollowedArtists] = useState(null);

    useEffect(() => {
        const timeout = setTimeout(() => {
            handleSpotify();
        }, 60 * 60 * 1000);

        return () => clearTimeout(timeout);
    }, []);


    function handleSpotify() {
        window.location.href = `http://127.0.0.1:3000/login`;
    }

    useEffect(() => {
        getTopTracks();
        getCurrentlyPlayingSong();
        getFollowedArtistsList();
    }, []);

    async function getTopTracks() {
        try {
            const response = await axios.get("http://127.0.0.1:3000/spotify/top-ten-tracks", {
                withCredentials: true,
            });
            // console.log("Top 10 Tracks:", response.data.items);
            setTopTracks(response.data.items)
        } catch (err) {
            console.error("Error fetching top tracks:", err.response?.data || err.message);
        }
    }

    async function getCurrentlyPlayingSong() {
        try {
            const response = await axios.get("http://127.0.0.1:3000/spotify/currently-playing-song", {
                withCredentials: true,
            });
            // console.log("currently playing song:", response.data.item.album.images);
            setCurrentlyPlayingSong(response.data)
        } catch (err) {
            console.error("Error fetching top tracks:", err.response?.data || err.message);
        }
    }

    async function getFollowedArtistsList() {
        try {
            const response = await axios.get("http://127.0.0.1:3000/spotify/followed-artists", {
                withCredentials: true,
            });
            // console.log("followed artists:", response.data.artists.items);
            setFollowedArtists(response.data.artists.items);
        } catch (err) {
            console.error("Error fetching top tracks:", err.response?.data || err.message);
        }
    }

    return (
        <>
            <Header />
            <main className="container py-4">
                <h2 className="text-white text-center display-1 fw-bold">My Spotify Info</h2>
                <div className="d-flex gap-2 d-flex justify-content-center">
                    <button onClick={handleSpotify} className="btn btn-primary fw-bold btn-sm">Refresh</button>
                    {/* <button onClick={getTopTracks} className="btn btn-primary fw-bold btn-sm">Get Top Tracks</button>
                    <button onClick={getCurrentlyPlayingSong} className="btn btn-primary fw-bold btn-sm">Get Currenty Playing song</button> */}
                </div>
                <section className="py-4 row">
                <div className="col-lg-4 col-md-6 mb-2">
                    <div className="card bg-black border p-4">
                        {/* Song and artist info when available */}
                        { currentlyPlayingSong?.is_playing ? (
                        <div>
                            <h2 className="text-white">Currently Playing Song</h2>
                            <p className="text-white"><strong>Song: </strong>{currentlyPlayingSong?.item?.name}</p>
                            <p className="text-white"><strong>Artists: </strong>
                            {
                                currentlyPlayingSong 
                                && currentlyPlayingSong?.item?.artists?.length > 0 
                                && currentlyPlayingSong?.item?.artists?.map(artist => artist.name).join(", ")
                            }
                            </p>
                        </div>
                        ) : (
                            <p className="text-white">No song playing</p>
                        )}
                        <div>
                            {currentlyPlayingSong?.item?.album?.images?.slice(0, 1).map((image, index) => (
                                <img key={index} src={`${image?.url}`} alt="album image" className="img-fluid rounded" />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-2">
                    {/* list of artists */}
                    <div className="card bg-black border p-4">
                    <h2 className="text-white">Artists that I follow</h2>
                    <ul className="nav-group">
                        {followedArtists && followedArtists?.map((artist, index) => (
                                <li key={index} className="nav-group-item">
                                    <p className="text-white">{artist?.name}</p>
                                </li>
                            ))}
                    </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="card bg-black border p-4">
                        <h2 className="text-white">Top Ten Tracks</h2>
                        <ul className="nav-group">
                            {topTracks?.map((track, index) => (
                                <li key={index} className="nav-group-item">
                                    <p className="text-white">{track?.name}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                </section>
            </main>
            <Footer />
        </>
    );
}