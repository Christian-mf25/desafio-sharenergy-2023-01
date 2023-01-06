import { Request, Response, NextFunction } from "express";
import { CustomerRepository } from "../repository";
import { ErrorHandler } from "../utils";

const checkDuplicateCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const email = req.body.email;
    const phone = req.body.phone;
    const cpf = req.body.cpf;

    const checkEmail = await new CustomerRepository().findOneCustomer(email);
    const checkPhone = await new CustomerRepository().findByPhone(phone);
    const checkCpf = await new CustomerRepository().findByCpf(cpf);

    if (checkEmail) {
      throw new ErrorHandler(422, "E-mail is already in use");
    }

    if (checkPhone) {
      throw new ErrorHandler(422, "Phone is already in use");
    }

    if (checkCpf) {
      throw new ErrorHandler(422, "CPF is already in use");
    }
    return next();
  } catch (e) {
    return res.status(e.statusCode).json({ error: e.message });
  }
};

export default checkDuplicateCustomer;
