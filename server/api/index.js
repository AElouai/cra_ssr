import books from './books';

import express from 'express';

const router = express.Router();

router.use('/books', books);


export default router;
