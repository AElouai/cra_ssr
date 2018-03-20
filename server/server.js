// parse the body to json
import bodyParser from 'body-parser';
import compression from 'compression';
// used server
import express from 'express';
// for managing logging
import morgan from 'morgan';
import path from 'path';

// endpoint Api if you ever wanted to use Node REST api
import api from './api';
// SSR of Redux State
import apiState from './setSetate';
// file that render React in Server and return Html output
import universalLoader from './reactReduxSSR/universal';

// Create our express app (using the port optionally specified)
const app = express();
// port define by the environment or hardcoded port
const PORT = process.env.PORT || 3003;

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

// Set up route handling, include static assets and an optional API
app.use('/api', api);
app.use('/static',express.static(path.resolve(__dirname, '../build/static')));
app.use('/img',express.static(path.resolve(__dirname, '../build/img')));
app.use('/manifest.json',express.static(path.resolve(__dirname, '../build')));
app.use('/service-worker.js',express.static(path.resolve(__dirname, '../build')));
app.use('/', apiState);
app.use('/', universalLoader);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
