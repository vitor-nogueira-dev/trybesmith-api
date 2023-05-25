import ProductModel from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';

async function createProduct(product: Product): Promise<ServiceResponse<Product>> {
  const insertedProduct = await ProductModel.create(product);
  console.log(insertedProduct, 'insertedProduct');
  const response: ServiceResponse<Product> = {
    status: 'SUCCESS',
    data: insertedProduct.dataValues as Product,
  };
  return response;
}
export default {
  createProduct,
};