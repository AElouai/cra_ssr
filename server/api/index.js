import cars from './cars';

import express from 'express';

const router = express.Router();

router.use('/cars', cars);


export default router;
