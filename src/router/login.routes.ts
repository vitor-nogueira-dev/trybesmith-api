import { Router } from 'express';
import loginMiddleware from '../middlewares/login.middleware';
import loginController from '../controllers/login.controller';

const loginRouter = Router() as Router;

loginRouter.post(
  '/',
  loginMiddleware.validateUsername,
  loginMiddleware.validatePassword,
  loginController.verifyLogin,
);

export default loginRouter;