
import express from "express";
import dotenv from "dotenv";
import querystring from "querystring";
import axios from "axios";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://127.0.0.1:5173",
  credentials: true,
}))

const PORT = process.env.PORT || 8000;

app.get('/login', function(req, res) {

  const scope = 'user-read-private user-read-email user-top-read user-read-currently-playing user-follow-read';

  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: process.env.SPOTIFY_CLIENT_ID,
      scope: scope,
      redirect_uri: process.env.SPOTIFY_REDIRECT_URI
    }));
});


app.get('/callback', async function(req, res) {

  const code = req.query.code || null;

    const callbackResponse = await axios.post(`https://accounts.spotify.com/api/token`, 
      {
        code: code,
        redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
        grant_type: 'authorization_code'
      },
      {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + (new Buffer.from(process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET).toString('base64'))
        }
      }
    )
    res.cookie("access_token", callbackResponse.data.access_token);
    res.redirect(`http://127.0.0.1:5173/spotify`);
  });

app.get("/spotify/top-ten-tracks", async (req, res) => {
  const accessToken = req.cookies.access_token;
  const response = await axios.get('https://api.spotify.com/v1/me/top/tracks?limit=10', {
      headers: {
          Authorization: 'Bearer ' + accessToken
      }
  });
  // console.log("top tracks:", response.data);
  res.status(200).json(response.data)
})

app.get("/spotify/currently-playing-song", async (req, res) => {
  const accessToken = req.cookies.access_token;
  const response = await axios.get(`https://api.spotify.com/v1/me/player/currently-playing`, {
      headers: {
          Authorization: 'Bearer ' + accessToken
      }
  });
  // console.log("currently playing song:", response.data);
  res.status(200).json(response.data)
})

app.get("/spotify/followed-artists", async (req, res) => {
  const accessToken = req.cookies.access_token;
  const response = await axios.get(`https://api.spotify.com/v1/me/following?type=artist`, {
      headers: {
          Authorization: 'Bearer ' + accessToken
      }
  });
  // console.log("followed artists:", response.data);
  res.status(200).json(response.data)
})


app.get("/", (req, res) => {
    res.json({message: "Welocome to REST API server or ravipatelctf."})
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT:${PORT}`);
})