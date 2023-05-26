import Sequelize from 'sequelize';
import { ServiceResponse } from '../types/ServiceResponse';
import ProductModel from '../database/models/product.model';
import OrderModel, {
  OrderInputtableTypes,
  OrderSequelizeModel,
} from '../database/models/order.model';

async function getOrders(): Promise<ServiceResponse<OrderSequelizeModel[]>> {
  const orders = await OrderModel.findAll({
    attributes: [
      'id', 'userId',
      [Sequelize.literal('JSON_ARRAYAGG(`productIds`.`id`)'), 'productIds'],
    ],
    include: [{
      model: ProductModel,
      attributes: [],
      as: 'productIds',
    }],
    group: ['Order.id'],
    raw: true,
  });
  const response: ServiceResponse<OrderSequelizeModel[]> = {
    status: 'SUCCESS',
    data: orders,
  };

  return response;
}

async function createOrder(
  order: OrderInputtableTypes,
): Promise<ServiceResponse<OrderSequelizeModel>> {
  const { userId } = order;
  const newOrder = await OrderModel.create({ userId });
  console.log(newOrder, 'newOrder');
  return {
    status: 'SUCCESS',
    data: newOrder,
  };
}

export default { getOrders, createOrder };
