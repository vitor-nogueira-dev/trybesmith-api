import { Request, Response } from 'express';
import loginService from '../services/login.service';

async function verifyLogin(req: Request, res: Response) {
  const user = req.body;
  const response = await loginService.verifyLogin(user);
  if (response.status === 'SUCCESS') {
    return res.status(200).json(response.data);
  }
  return res.status(401).json(response.data);
}

export default { verifyLogin };