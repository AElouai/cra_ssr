import express from 'express';
const router = express.Router();
import fetch from 'node-fetch';

const baseUrl = 'https://ghibliapi.herokuapp.com/films';

router.get('/', function(req, res, next) {
  fetch(baseUrl, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
  })
    .then(response => response.json())
    .then(
      data => {
        req.reduxState.movies.lists = data;
        next();
      },
      error => {
        //in case we can't have Data form server we use local DATA
        console.log('error : ', error);
        next();
      },
    );
});

router.get('/:id', function(req, res, next) {
  const url = `${baseUrl}/${req.params.id}`;
  console.log('URL', url);
  fetch(url, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
  })
    .then(response => response.json())
    .then(
      data => {
        req.reduxState.movies.lists.push(data);
        next();
      },
      error => {
        //in case we can't have Data form server we use local DATA
        console.log('error : ', error);
        next();
      },
    );
});

export default router;
