import express from 'express';
import loginRouter from './routers/login.routes';
import productRouter from './routers/products.routes';
import ordersRouter from './routers/orders.routes';

const app = express();

app.use(express.json());
app.use('/products', productRouter);
app.use('/orders', ordersRouter);
app.use('/login', loginRouter);

export default app;
