import express from 'express';
import productRouter from './router/products.routes';
import ordersRouter from './router/orders.routes';

const app = express();

app.use(express.json());
app.use('/products', productRouter);
app.use('/orders', ordersRouter);

export default app;
