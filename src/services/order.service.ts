import Sequelize from 'sequelize';
import { ServiceResponse } from '../types/ServiceResponse';
import ProductModel from '../database/models/product.model';
import OrderModel, {
  OrderInputtableTypes,
  OrderSequelizeModel,
} from '../database/models/order.model';
import { ReturnProduct } from '../types/ReturnProduct';

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

async function searchProducts(productIds: number[]): Promise<ReturnProduct[]> {
  const products = await Promise.all(
    productIds.map(async (productId) => {
      const product = await ProductModel.findByPk(productId, {
        attributes: ['name', 'price'],
      });
      return product && { name: product.dataValues.name, price: product.dataValues.price };
    }),
  );
  return products as ReturnProduct[];
}

async function createOrder(
  order: OrderInputtableTypes,
): Promise<ServiceResponse<OrderInputtableTypes>> {
  const newOrder = await OrderModel.create({ userId: +order.userId });
  const { id } = newOrder.dataValues;

  const productIds = order.productIds as number[];
  const products = await searchProducts(productIds);

  const productsToInsert = products.filter(Boolean).map((product) => ({
    name: product.name,
    price: product.price,
    orderId: id,
  }));

  await ProductModel.bulkCreate(productsToInsert);

  return {
    status: 'SUCCESS',
    data: { userId: order.userId, productIds },
  };
}

export default { getOrders, createOrder, searchProducts };
