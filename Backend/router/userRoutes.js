//userRouter.js

import Router from 'express';
import CreateUserController from '../controllers/CreateUserController.js'
import authenticateUserController from '../controllers/authenticateUserController.js';
import updateUserController from '../controllers/updateUserController.js';
import limiter from '../middlewares/limiter.js';

const userRouter = Router();

userRouter.post('/sign-up', CreateUserController.handle);
userRouter.post('/login', limiter, authenticateUserController.handle);
userRouter.put('/edit', validateToken, updateUserController.handle);


export default userRouter;