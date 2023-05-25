import { Router } from 'express';
import productController from '../controllers/product.controller';

const productRouter = Router() as Router;

productRouter.post('/', productController.createProduct);
productRouter.get('/', productController.getProducts);

export default productRouter;