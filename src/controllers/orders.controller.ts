import { Request, Response } from 'express';
import orderService from '../services/order.service';

async function getOrders(req: Request, res: Response) {
  const response = await orderService.getOrders();
  return res.status(200).json(response.data);
}

export default { getOrders };
