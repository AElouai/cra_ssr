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
        "id" : 1,
        "director" : "Rick Riordan",
        "producer" : "Marvel",
        "description" : "Percy Jackson and the Olympians and Percy Jackson and the Olympians and Percy Jackson and the Olympians and Percy Jackson and the Olympians and Percy Jackson and the Olympians and  ",
        "rt_score" : 384
    }
];


router.get('/', (req, res, next) => {
    res.json(books);
});

router.get('/:id', (req, res, next) => {
    res.json([books[req.params.id]]);
});
export default router;
