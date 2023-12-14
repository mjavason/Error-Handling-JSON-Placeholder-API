import express from 'express';
const router = express.Router();
import crashRoute from './crash.route';

router.use('/crash', crashRoute);

export default router;
