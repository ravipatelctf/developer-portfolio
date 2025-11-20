import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import querystring from "querystring";
import axios from "axios";
import cookies from "cookie-parser";
import { generateGkProblem } from "./quiz.js";


const app = express();
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
}));
app.use(express.json());
app.use(cookies());

const PORT = process.env.PORT || 8000;
const isProduction = process.env.NODE_ENV === "production";

app.get("/", (req, res) => {
    res.json({message: "Welocome to REST API server of ravipatelctf."})
})

app.get('/login', function(req, res) {
  try {
  const state = 'abcdeabcdeabcde1';
  const scope = 'user-read-private user-read-email user-read-currently-playing user-follow-read user-top-read';

  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: process.env.SPOTIFY_CLIENT_ID,
      scope: scope,
      redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
      state: state
    })); 
  } catch (error) {
    console.error(error);
  }
});


app.get('/callback', async function(req, res) {
  try {
    const code = req.query.code || null;
    const state = req.query.state || null;

    if (state === null) {
      return res.redirect('/#' +
        querystring.stringify({
          error: 'state_mismatch'
        }));
    }

      const response = await axios.post(`https://accounts.spotify.com/api/token`, {
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
      );
      res.cookie("access_token", response.data.access_token, {
        httpOnly: true,
        secure: isProduction,
        sameSite: isProduction ? "none" : "lax",
      });
      res.cookie("refresh_token", response.data.refresh_token, {
        httpOnly: true,
        secure: isProduction,
        sameSite: isProduction ? "none" : "lax",
      });
      res.redirect(`${process.env.FRONTEND_URL}/spotify`);
    } catch (error) {
      console.error(error);
    }
});

app.get('/refresh_token', async function(req, res) {
  try {
    const refresh_token = req.cookies.refresh_token;

    const response = await axios.post(`https://accounts.spotify.com/api/token`, {
        refresh_token: refresh_token,
        grant_type: 'refresh_token'
    },
    {
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + (new Buffer.from(process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET).toString('base64'))
    }
    }
    );
    res.cookie("access_token", response.data.access_token, {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "none" : "lax",
    });
    res.redirect(`${process.env.FRONTEND_URL}/spotify`);
  } catch (error) {
    console.error(error);
  }
});

app.get('/currently-playing-song', async (req, res) => {
  try {
    const access_token = req.cookies.access_token;
    const response = await axios.get(`https://api.spotify.com/v1/me/player/currently-playing`, {
      headers: {
        Authorization: 'Bearer ' + access_token
      }
    });
    // console.log(response.data)
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
  }
});

app.get('/following-artists', async (req, res) => {
  try {
    const access_token = req.cookies.access_token;
    const response = await axios.get(`https://api.spotify.com/v1/me/following?type=artist&limit=10`, {
      headers: {
        Authorization: 'Bearer ' + access_token
      }
    });
    // console.log(response.data)
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
  }
});

app.get('/top-tracks', async (req, res) => {
  try {
    const access_token = req.cookies.access_token;
    const response = await axios.get(`https://api.spotify.com/v1/me/top/tracks?limit=10`, {
      headers: {
        Authorization: 'Bearer ' + access_token
      }
    });
    // console.log(response.data)
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
  }
});


// ---------------------------------------------------------------------------

app.get('/generate-gk-question', async (req, res) => {
  try {
    const response = await generateGkProblem();
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
  }
});

// ---------------------------------------------------------------------------

app.listen(PORT, () => {
    console.log(`Server is running on PORT:${PORT}`);
})