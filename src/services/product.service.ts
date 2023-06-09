import ProductModel from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';

async function createProduct(product: Product): Promise<ServiceResponse<Product>> {
  const insertedProduct = await ProductModel.create(product);
  const response: ServiceResponse<Product> = {
    status: 'SUCCESS',
    data: insertedProduct.dataValues as Product,
  };
  return response;
}

async function getProducts(): Promise<ServiceResponse<Product[]>> {
  const products = await ProductModel.findAll();
  const response: ServiceResponse<Product[]> = {
    status: 'SUCCESS',
    data: products.map((product) => product.dataValues) as Product[],
  };
  return response;
}

export default {
  createProduct,
  getProducts,
};