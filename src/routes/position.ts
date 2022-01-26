import { Router } from 'express';

import PositionController from '../controllers/position';

import { addPosition, updatePosition } from '../utils/validators';

const router = Router();

router.get('/', PositionController.getAll  );

router.post('/', addPosition , PositionController.add );

router.patch('/', updatePosition, PositionController.update );


export default router;