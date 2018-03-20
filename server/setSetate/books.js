import express from 'express';
const router = express.Router();

const books = [
    {
        "title" : "The Lightning Thief",
        "id" : 0,
        "director" : "Rick Riordan",
        "producer" : "Marvel",
        "description" : "Percy Jackson and the Olympians and Percy Jackson and the Olympians and Percy Jackson and the Olympians and Percy Jackson and the Olympians and Percy Jackson and the Olympians and  ",
        "rt_score" : 384
    },
    {
        "title" : "The Lightning Thief",
        "id" : 0,
        "director" : "Rick Riordan",
        "producer" : "Marvel",
        "description" : "Percy Jackson and the Olympians and Percy Jackson and the Olympians and Percy Jackson and the Olympians and Percy Jackson and the Olympians and Percy Jackson and the Olympians and  ",
        "rt_score" : 384
    }
];

router.get('/', function(req, res, next) {
  req.reduxState.books.lists = books;
  next();
});

router.get('/:id', function(req, res, next) {
  req.reduxState.books.lists = books[req.params.id];
  next();
});

export default router;
