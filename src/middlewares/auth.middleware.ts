import { Request, Response, NextFunction } from 'express';

import jwtUtil from 'src/utils/jwt.util';
import UserModel from '../database/models/user.model';

class CustomError extends Error {
  statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
  }
}

function tokenEmptyField(token: string): void {
  if (!token) {
    throw new CustomError(401, 'Token not found');
  }
}

async function userIsLogged(token: string) {
  const decoded = jwtUtil.verify(token);
  const user = await UserModel.findOne({ where: { username: decoded.username } });
  if (!user) {
    throw new CustomError(401, 'Invalid token');
  }
}

function validUserIdBody(userId: number) {
  if (!userId) {
    throw new CustomError(400, '"userId" is required');
  }
  if (typeof userId !== 'number') {
    throw new CustomError(400, '"userId" must be a number');
  }
  const userExists = UserModel.findByPk(userId);
  if (!userExists) {
    throw new CustomError(404, 'User does not exist');
  }
}

function validProductIds(productIds: number[]) {
  if (!productIds) {
    throw new CustomError(400, '"productIds" is required');
  }
  if (!Array.isArray(productIds)) {
    throw new CustomError(400, '"productIds" must be an array');
  }
  if (productIds.length === 0) {
    throw new CustomError(400, '"productIds" must include only numbers');
  }
}

function validInsertOrders(req: Request, res: Response, next: NextFunction) {
  try {
    const { userId, productIds } = req.body;
    const { authorization } = req.headers;
    if (authorization !== undefined) {
      tokenEmptyField(authorization);
      userIsLogged(authorization);
    }
    validUserIdBody(userId);
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
