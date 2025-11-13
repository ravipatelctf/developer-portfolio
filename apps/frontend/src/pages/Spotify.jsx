
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios"
import { useEffect, useState } from "react";

export default function Spotify() {
    const [currentSong, setCurrentSong] = useState(null);
    const [topTracks, setTopTracks] = useState({});
    const [followingArtists, setFollowingArtists] = useState({});

    const SERVER_BASE_URL = import.meta.env.VITE_SERVER_BASE_URL;


    useEffect(() => {
        setTimeout(() => {
            getCurrentlyPlayingSong();
            getTopTracks();
            getFollowingArtists();
        }, 3000)
    }, []);

    function handleSpotifyAccessToken() {
        window.location.href = `${SERVER_BASE_URL}/refresh_token`
    }

    async function getCurrentlyPlayingSong() {
        const response = await axios.get(`${SERVER_BASE_URL}/currently-playing-song`, {
            withCredentials: true,
        });
        // console.log("current song:", response.data);
        setCurrentSong(response.data);
    }

    async function getTopTracks() {
        const response = await axios.get(`${SERVER_BASE_URL}/top-tracks`, {
            withCredentials: true,
        });
        // console.log(response.data);
        setTopTracks(response.data);
    }

    async function getFollowingArtists() {
        const response = await axios.get(`${SERVER_BASE_URL}/following-artists`, {
            withCredentials: true,
        });
        // console.log(response.data);
        setFollowingArtists(response.data);
    }
    
    return (
        <>
            <Header />
                <main className="container">
                    <h2 className="text-white display-1 fw-bold text-center">My Spotify Info</h2>
                    <section>
                        <button onClick={handleSpotifyAccessToken} className="btn btn-primary btn-sm fw-bold">Get New Access Token</button>
                    </section>
                    <section className="row text-white py-4">
                        <div className="col-md-6 col-lg-4 mb-4">
                            <div className="card bg-black text-white border p-4">
                                <h5 className="text-center mb-2">Currently Playing Song</h5>
                                { currentSong ?
                                (
                                <div>
                                    <div className="mb-4">
                                    {
                                        currentSong?.item?.album?.images?.slice(0, 1).map((image, index) => (
                                            <img key={index} src={image?.url} alt={`${currentSong?.item?.name} song image`} className="rounded img-fluid" />
                                        ))
                                    }
                                    </div>
                                    <p><strong>Song: </strong>{currentSong?.item?.name}</p>
                                    <p>
                                        <span className="fw-bold">Artists: </span>
                                        <span>
                                        {
                                            currentSong?.item?.artists?.map(artist => artist?.name).join(", ")
                                        }
                                        </span>
                                    </p>
                                </div>
                                ) : (
                                    <p>No Song Playing</p>
                                )
                                } 
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4">
                            <div className="card bg-black text-white border p-4">
                                <h5 className="mb-2">Artists That I follow</h5>
                                <ul className="nav-group">
                                    {
                                        followingArtists?.artists?.items?.map((item, index) => (
                                            <li key={index} className="nav-group-item">{item?.name}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4">
                            <div className="card bg-black text-white border p-4">
                                <h5 className="mb-2">Top Ten Tracks</h5>
                                <ul className="nav-group">
                                    {
                                        topTracks?.items?.map((item, index) => (
                                            <li key={index} className="nav-group-item">{item?.name}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </section>
                </main>
            <Footer />
        </>
    );
}