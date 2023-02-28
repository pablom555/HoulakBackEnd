import express, { Express } from 'express';
import spotifyRoutes from './spotify.route';

const appRoutes:Express = express();

appRoutes.use('/spotify', spotifyRoutes);

export default appRoutes;
