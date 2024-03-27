import Router from 'express';
import CreateUserController from '../controllers/CreateUserController.js'

const userRouter = Router();

userRouter.post('/sign-up', CreateUserController.handle);



export default userRouter;