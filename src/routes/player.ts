import { Router } from 'express';

import PlayerController from '../controllers/player';

import { addPlayer, updatePlayer } from '../utils/validators';
const router = Router();

router.get('/', PlayerController.getAll  );

router.post('/', addPlayer ,  PlayerController.add );

router.patch('/', updatePlayer, PlayerController.update );


export default router;