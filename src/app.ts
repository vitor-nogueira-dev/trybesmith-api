import express from 'express';
import productRouter from './router/products.routes';
import ordersRouter from './router/orders.routes';
import loginRouter from './router/login.routes';

const app = express();

app.use(express.json());
app.use('/products', productRouter);
app.use('/orders', ordersRouter);
app.use('/login', loginRouter);

export default app;
