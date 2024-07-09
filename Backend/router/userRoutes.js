//userRouter.js

import Router from 'express';
import CreateUserController from '../controllers/CreateUserController.js'
import authenticateUserController from '../controllers/authenticateUserController.js';
//import updateUserController from '../controllers/updateUserController.js';
//import limiter from '../middlewares/limiter.js';
import authenticateMiddleware from '../middlewares/authenticateToken.js';
import CreateUserDataController from '../controllers/CreateUserDataController.js';
import GetUserDataController from '../controllers/getUserDataController.js';
import getUserBasicDataController from '../controllers/getUserBasicDataController.js';
import { getPaciente, getPacienteById } from '../controllers/pacienteController.js';

const userRouter = Router();

userRouter.post('/sign-up', CreateUserController.handle);
userRouter.post('/login', authenticateUserController.handle);
userRouter.post('/user-data', authenticateMiddleware, CreateUserDataController.handle);
userRouter.get('/profile', authenticateMiddleware, GetUserDataController.handle);
userRouter.get('/basic-profile', authenticateMiddleware, getUserBasicDataController.handle);
//userRouter.put('/profile', authenticateMiddleware, updateUserController.handle);

userRouter.get('/pacientes', authenticateMiddleware, getPaciente);
userRouter.get('/pacientes/:id', authenticateMiddleware, getPacienteById);

export default userRouter;