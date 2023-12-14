import { Router } from 'express';
import { crashController } from '../../../controllers';
const router = Router();

router.post('/1', crashController.crash1);
router.post('/2', crashController.crash2);
router.post('/3', crashController.crash3);

export default router;
