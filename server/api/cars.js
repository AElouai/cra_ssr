import express from 'express';

const router = express.Router();


router.get('/cars', (req, res, next) => {
    res.json({Hello: 'Hello'});
});

export default router;
