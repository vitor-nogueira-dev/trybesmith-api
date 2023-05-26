import bcrypt from 'bcryptjs';
import jwtUtil from '../utils/jwt.util';
import { ServiceResponse } from '../types/ServiceResponse';
import UserModel from '../database/models/user.model';
import { Token } from '../types/Token';
import { Login } from '../types/Login';

async function verifyLogin(login: Login): Promise<ServiceResponse<Token>> {
  const foundUser = await UserModel.findOne({ where: { username: login.username } });

  if (!foundUser || !bcrypt.compareSync(login.password, foundUser.dataValues.password)) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }

  const { username } = foundUser.dataValues;

  const token = jwtUtil.sign({ username });

  return { status: 'SUCCESS', data: { token } };
}
export default {
  verifyLogin,
};