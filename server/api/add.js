import express from 'express';

const router = express.Router();


router.get('/', (req, res, next) => {
    res.json({Hello: 'Hello'});
});

export default router;
