import { Request, Response } from 'express';
import productService from '../services/product.service';

async function createProduct(req: Request, res: Response) {
  const product = req.body;
  const response = await productService.createProduct(product);
  console.log(response.data, 'response.data');
  res.status(201).json(response.data);
}

export default {
  createProduct,
};