import { NextFunction, Request, Response } from 'express';

type IsValid = {
  statusCode: number;
  message: string;
};
function validateName(name: string): IsValid | void {
  if (!name) {
    return {
      statusCode: 400,
      message: '"name" is required',
    };
  }
  if (name.length < 3) {
    return {
      statusCode: 422,
      message: '"name" length must be at least 3 characters long',
    };
  }
  if (typeof name !== 'string') {
    return {
      statusCode: 422,
      message: '"name" must be a string',
    };
  }
}
function validatePrice(price: string): IsValid | void {
  if (!price) {
    return {
      statusCode: 400,
      message: '"price" is required',
    };
  }
  if (price.length < 3) {
    return {
      statusCode: 422,
      message: '"price" length must be at least 3 characters long',
    };
  }
  if (typeof price !== 'string') {
    return {
      statusCode: 422,
      message: '"price" must be a string',
    };
  }
}

function validateProduct(req: Request, res: Response, next: NextFunction): Response | void {
  try {
    const { name, price } = req.body;
    const isValidName = validateName(name) as IsValid;
    const isValidPrice = validatePrice(price) as IsValid;

    if (isValidName) {
      return res.status(isValidName.statusCode).json({ message: isValidName.message });
    }

    if (isValidPrice) {
      return res.status(isValidPrice.statusCode).json({ message: isValidPrice.message });
    }

    next();
  } catch (error) {
    return res.status(400).json({ message: (error as Error).message });
  }
}

export default validateProduct;