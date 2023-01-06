import { Request, Response } from "express";

import { CustomerRepository, ICustomer } from "../../repository";

const createCustomerController = async (req: Request, res: Response) => {
  const customer: ICustomer = await new CustomerRepository().saveCustomer(
    req.body
  );

  return res.status(201).json(customer);
};

export default createCustomerController;
