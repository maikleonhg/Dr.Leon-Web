//userRouter.js

import Router from 'express';
import CreateUserController from '../controllers/CreateUserController.js'
import authenticateUserController from '../controllers/authenticateUserController.js';
//import updateUserController from '../controllers/updateUserController.js';
//import limiter from '../middlewares/limiter.js';
import authenticateMiddleware from '../middlewares/authenticateToken.js';
import CreateUserDataController from '../controllers/CreateUserDataController.js';
import GetUserDataController from '../controllers/getUserDataController.js';

const userRouter = Router();

userRouter.post('/sign-up', CreateUserController.handle);
userRouter.post('/login', authenticateUserController.handle);
userRouter.post('/user-data', authenticateMiddleware, CreateUserDataController.handle);
userRouter.get('/profile', authenticateMiddleware, GetUserDataController.handle);
//userRouter.put('/profile', authenticateMiddleware, updateUserController.handle);

export default userRouter;