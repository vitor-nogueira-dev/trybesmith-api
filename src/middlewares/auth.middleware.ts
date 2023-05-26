import { Request, Response, NextFunction } from 'express';

import UserModel from '../database/models/user.model';

class CustomError extends Error {
  statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
  }
}

export default {
  validInsertOrders,
};
