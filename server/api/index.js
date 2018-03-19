import add from './add';

import express from 'express';

const router = express.Router();

router.use('/api', add);


export default router;
