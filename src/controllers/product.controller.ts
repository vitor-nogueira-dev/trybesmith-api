import { Request, Response } from 'express';
import productService from '../services/product.service';

async function createProduct(req: Request, res: Response) {
  const product = req.body;
  const response = await productService.createProduct(product);
  console.log(response.data, 'response.data');
  return res.status(201).json(response.data);
}

async function getProducts(_req: Request, res: Response) {
  const response = await productService.getProducts();
  return res.status(200).json(response.data);
}

export default {
  createProduct,
  getProducts,
};