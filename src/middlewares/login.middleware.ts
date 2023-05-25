import { Request, Response, NextFunction } from 'express';

function validateUsername(req: Request, res: Response, next: NextFunction) {
  const { username } = req.body;
  if (!username) {
    return res.status(400).json({ message: '"username" and "password" are required' });
  }
  next();
}

function validatePassword(req: Request, res: Response, next: NextFunction) {
  const { password } = req.body;
  if (!password) {
    return res.status(400).json({ message: '"username" and "password" are required' });
  }
  next();
} 

export default { validateUsername, validatePassword };