import { Router } from 'express';

import TeamController from '../controllers/team';

import TeamPlayerController from '../controllers/team-player';

import { addTeam, updateTeam , addPlayerTeam} from '../utils/validators';

const router = Router();

router.get('/',TeamController.getAll  );

router.post('/', addTeam , TeamController.add );

router.patch('/', updateTeam, TeamController.update );

router.get('/:id',  TeamPlayerController.getAll  );

router.post('/players', addPlayerTeam, TeamPlayerController.add );

export default router;