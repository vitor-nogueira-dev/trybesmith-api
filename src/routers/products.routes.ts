import { Router } from 'express';
import productController from '../controllers/product.controller';
import validateProduct from '../middlewares/product.middleware';

const productRouter = Router() as Router;

productRouter.post('/', validateProduct, productController.createProduct);
productRouter.get('/', productController.getProducts);

export default productRouter;