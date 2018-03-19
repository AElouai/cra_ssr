import movies from './movies';

import express from 'express';

const router = express.Router();

router.use((req, res, next) => {
    req.reduxState = {
        movies:{
            favorites: [],
            lists: [],
            film: [],
        }
    };
    next();
});
router.use('/movies', movies);


export default router;
