

import { Router, Request, Response } from 'express';
import SpotifyWebApi from 'spotify-web-api-node';
import dotenv from 'dotenv';
import { scopes } from '../config/constants';
import { getAlbumsByArtistName } from '../services/spotify.service';
import { saveRequest } from '../services/request.service';

dotenv.config();

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: process.env.SPOTIFY_URI_REDIRECT,
});

const spotifyRoutes: Router = Router();

spotifyRoutes.get('/login', (_req: Request, res: Response) => {
  res.redirect(spotifyApi.createAuthorizeURL(scopes, ''));
});

spotifyRoutes.get('/callback', (req: Request, res: Response) => {
  const error = req.query.error;
  const code = req.query.code;

  if (error) {
    console.error('Callback Error:', error);
    res.send(`Callback Error: ${error}`);
    return;
  }

  spotifyApi
    .authorizationCodeGrant(code as string)
    .then(data => {
      const access_token = data.body['access_token'];
      const refresh_token = data.body['refresh_token'];
      const expires_in = data.body['expires_in'];

      spotifyApi.setAccessToken(access_token);
      spotifyApi.setRefreshToken(refresh_token);

      console.log(
        `Spotify - sucessfully retreived access token. Expires in ${expires_in} s.`
      );

      res.send('Success! You can now close the window.');

      setInterval(async () => {
        const data = await spotifyApi.refreshAccessToken();
        const access_token = data.body['access_token'];

        console.log('The access token has been refreshed!');
        console.log('access_token:', access_token);
        spotifyApi.setAccessToken(access_token);
      }, expires_in / 2 * 1000);

    })
    .catch(error => {
      console.error('Error getting Tokens:', error);
      res.send(`Error getting Tokens: ${error}`);
    });
});

// Get albums by artist name
spotifyRoutes.get('/albums', async (req: Request, res: Response) => {
  try {
    const artistName = req?.query?.artistName as string;

    saveRequest(req.clientIp || '127.0.0.1', artistName);

    if (!artistName.trim()) {
      return res.status(400).send("You must provide the name of the artist");
    }

    const response = await getAlbumsByArtistName(artistName, spotifyApi);
    
    return res.status(200).send(response);

  } catch (error) {
    return res.status(500).send(`Error: ${error}`);
  }
});


export default spotifyRoutes;