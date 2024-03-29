
import express from 'express';
import compression from 'compression';
import path from 'path';
import React from 'react';
import querystring from 'querystring';
import SpotifyWebApi from 'spotify-web-api-node';
import { renderToString } from 'react-dom/server';
import RouterContext from 'react-router/lib/RouterContext';
import createMemoryHistory from 'react-router/lib/createMemoryHistory';
import match from 'react-router/lib/match';
import template from './template';
import routes from '../routes';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Guest from './Guest';
import Song from './Song';


const port = process.env.PORT || parseInt(KYT.SERVER_PORT, 10);

const clientAssets = require(KYT.ASSETS_MANIFEST); // eslint-disable-line import/no-dynamic-require
const app = express();

const mongoURL = process.env.MONGODB_URI || 'mongodb://localhost/trouwen';

mongoose.Promise = Promise;
mongoose.connect(mongoURL);

// Remove annoying Express header addition.
app.disable('x-powered-by');

// Compress (gzip) assets in production.
app.use(compression());

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// Setup the public directory so that we can server static assets.
app.use(express.static(path.join(process.cwd(), KYT.PUBLIC_DIR)));

app.post('/addRSVP', (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  const query = {email: req.body.email};

  const guest = new Guest(req.body);
  guest.markModified('guests');
  const usertGuest = guest.toObject();
  delete usertGuest._id;

  Guest.findOneAndUpdate(query, {
    $set: usertGuest
  }, {
    upsert: true,
    runValidators: true,
    'new': true,
    setDefaultsOnInsert: true
  }, (err, doc) => {
    if (err)  return res.json({'success': false, err});
    return res.json({'success': 'true'})
  });
});

app.post('/addSong', (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  const query = {spotifyId: req.body.spotifyId, name: req.body.name,};

  Song.findOneAndUpdate(query, {
    $inc: {
      voting: 1
    }
  }, {
    upsert: true,
    runValidators: true,
    'new': true,
    setDefaultsOnInsert: true
  }, (err, doc) => {
    if (err)  return res.json({'success': false, err});
    return res.json({'success': true})
  });
});

app.get('/spotify/search', (req, res) => {
  const spotifyWebApi =  new SpotifyWebApi({
    clientId: '1a40c0ce7db3450989efa684a6f5325d',
    clientSecret: '977cd360a45d47e4a9ce8f58be741298'
  });

  spotifyWebApi.clientCredentialsGrant()
    .then(data => spotifyWebApi.setAccessToken(data.body['access_token']))
    .then(() => spotifyWebApi.searchTracks(req.query.q))
    .then((tracks) => {
      res.json(tracks);
    });

  // fetch('https://accounts.spotify.com/api/token', {
  //   method: 'POST',
  //   headers: {
  //     'Content-type': 'x-www-form-urlencoded',
  //     Authorization: 'Basic ' + new Buffer("1a40c0ce7db3450989efa684a6f5325d:977cd360a45d47e4a9ce8f58be741298").toString('base64'),
  //   },
  //   body: {
  //     grant_type: 'client_credentials',
  //   }
  // })
  // .then(response => console.log(response))
  // .then(json => {
  //   console.log(json);
  // });
});

// Setup server side routing.
app.get('*', (req, res) => {
  const history = createMemoryHistory(req.originalUrl);

  match({ routes, history }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, `${redirectLocation.pathname}${redirectLocation.search}`);
    } else if (renderProps) {
      // When a React Router route is matched then we render
      // the components and assets into the template.
      res.status(200).send(template({
        root: renderToString(<RouterContext {...renderProps} />),
        jsBundle: clientAssets.main.js,
        cssBundle: clientAssets.main.css,
      }));
    } else {
      res.status(404).send('Not found');
    }
  });
});

app.listen(port);
