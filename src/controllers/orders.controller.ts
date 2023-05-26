import { Request, Response } from 'express';
import orderService from '../services/order.service';

async function getOrders(_req: Request, res: Response) {
  const response = await orderService.getOrders();
  return res.status(200).json(response.data);
}

async function createOrder(req: Request, res: Response) {
  const { userId, productIds } = req.body;

  const response = await orderService.createOrder({ userId, productIds });
  return res.status(201).json(response.data);
}

export default { getOrders, createOrder };
