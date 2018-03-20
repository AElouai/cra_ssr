import movies from './movies';
import books from './books';
import express from 'express';

const router = express.Router();

router.use((req, res, next) => {
    req.reduxState = {
        movies:{
            favorites: [],
            lists: [],
            film: [],
        },
        books:{
            favorites: [],
            lists: [],
            car: [],
        }
    };
    next();
});
router.use('/movies', movies);
router.use('/books', books);


export default router;
