import { Router } from 'express';

import  MatchController from '../controllers/match'

import PlayerMatchPositionController from '../controllers/player-match-position';

import { addMatch, updateMatch, addPMP, updatePMP } from '../utils/validators';
const router = Router();

router.get('/',  MatchController.getAll  );

router.post('/', addMatch ,  MatchController.add );

router.patch('/', updateMatch, MatchController.update );

router.get('/:id',  PlayerMatchPositionController.get)

router.post('/positions', addPMP ,  PlayerMatchPositionController.add)

router.patch('/positions', updatePMP, PlayerMatchPositionController.update)


export default router;