import { Router } from 'express';
import userisLoggedMiddleware from '../middlewares/userisLogged.middleware';
import ordersController from '../controllers/orders.controller';
import authMiddleware from '../middlewares/auth.middleware';

const ordersRouter = Router() as Router;

ordersRouter.get('/', ordersController.getOrders);
ordersRouter.post(
  '/',
  userisLoggedMiddleware.userIsLogged,
  authMiddleware.validInsertOrders,
  ordersController.createOrder,
);

export default ordersRouter;