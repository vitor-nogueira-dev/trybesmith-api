import { Request, Response, NextFunction } from 'express';

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

export default {
  validInsertOrders,
};
