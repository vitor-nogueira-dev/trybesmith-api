import { Router } from 'express';
import ordersController from '../controllers/orders.controller';

const ordersRouter = Router() as Router;

ordersRouter.get('/', ordersController.getOrders);

export default ordersRouter;