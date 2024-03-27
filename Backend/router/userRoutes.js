import Router from 'express';
import CreateUserController from '../controllers/CreateUserController'

const UserRouter = Router();


const createUser = new CreateUserController();


userRouter.post('/sign-up', createUser.handle);



export { userRouter };