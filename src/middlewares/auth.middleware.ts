import { Request, Response, NextFunction } from 'express';

import CustomError from '../utils/custom.error';
import UserModel from '../database/models/user.model';

async function validUserIdBody(userId: number): Promise<void> {
  if (!userId) {
    throw new CustomError(400, '"userId" is required');
  }

  if (typeof userId !== 'number') {
    throw new CustomError(422, '"userId" must be a number');
  }

  const user = await UserModel.findByPk(userId);
  if (!user) {
    throw new CustomError(404, '"userId" not found');
  }
}

function validProductIds(productIds: number[]) {
  if (!productIds) {
    throw new CustomError(400, '"productIds" is required');
  }
  if (!Array.isArray(productIds)) {
    throw new CustomError(422, '"productIds" must be an array');
  }
  if (productIds.length === 0) {
    throw new CustomError(422, '"productIds" must include only numbers');
  }
}

async function validInsertOrders(req: Request, res: Response, next: NextFunction) {
  try {
    const { userId, productIds } = req.body;
    await validUserIdBody(userId);
    validProductIds(productIds);
    return next();
  } catch (error) {
    const { statusCode, message } = error as CustomError;
    return res.status(statusCode).json({ message });
  }
}

export default {
  validInsertOrders,
};
