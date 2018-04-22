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
import universalLoader from './universal';

// Create our express app (using the port optionally specified)
const app = express();
// port define by the environment or hardcoded port
const PORT = process.env.PORT || 3003;

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

// Set up route handling, include static assets and an optional API
app.use("/api", api);
app.use("/static", express.static(path.resolve(__dirname, "../build/static")));
app.use("/uploads", express.static(__dirname + "/../uploads"));
app.use("/img", express.static(path.resolve(__dirname, "../build/img")));
app.use("/js", express.static(path.resolve(__dirname, "../build/js")));
app.use(
  "/manifest.json",
  express.static(path.resolve(__dirname, "../build/manifest.json"))
);
app.use(
  "/favicon.ico",
  express.static(path.resolve(__dirname, "../build/favicon.ico"))
);
app.use(
  "/asset-manifest.json",
  express.static(path.resolve(__dirname, "../build/asset-manifest.json"))
);
app.use(
  "/service-worker.js",
  express.static(path.resolve(__dirname, "../build/service-worker.js"))
);
// app.use('/', apiState);
app.use('/', universalLoader);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
