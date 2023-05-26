import { NextFunction, Request, Response } from 'express';
import UserModel from '../database/models/user.model';
import CustomError from '../utils/custom.error';
import jwtUtil from '../utils/jwt.util';

async function findUserByUsername(username: string) {
  const user = await UserModel.findOne({ where: { username } });
  return user;
}

async function validateToken(token: string) {
  const decoded = jwtUtil.verify(token);
  const user = await findUserByUsername(decoded.username);
  if (!user) {
    throw new CustomError(401, 'Invalid token');
  }
}

function handleTokenError(res: Response) {
  res.status(401).json({ message: 'Invalid token' });
}

function handleTokenNotFound(res: Response) {
  res.status(401).json({ message: 'Token not found' });
}

async function userIsLogged(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization;

  if (token) {
    try {
      await validateToken(token);
      next();
    } catch (error) {
      handleTokenError(res);
    }
  } else {
    handleTokenNotFound(res);
  }
}

export default {
  userIsLogged,
};
