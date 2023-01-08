import { Request, Response } from "express";

import { CustomerRepository, ICustomer } from "../../repositories";

const createCustomerController = async (req: Request, res: Response) => {
  const customer: ICustomer = await new CustomerRepository().saveCustomer(
    req.validated
  );

  return res.status(201).json(customer);
};

export default createCustomerController;
