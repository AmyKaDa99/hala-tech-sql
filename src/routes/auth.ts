import { Router } from 'express';

import UserController from '../controllers/auth';

import {auth} from '../utils/validators';

const router = Router();

router.post('/register', auth , UserController.register);

router.post('/login',  auth , UserController.login );


export default router;