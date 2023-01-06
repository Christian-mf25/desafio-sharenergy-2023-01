import { Request, Response } from "express";

import { CustomerRepository, ICustomer } from "../../repository";

const getAllCustomerController = async (_: Request, res: Response) => {
  const customer: ICustomer[] = await new CustomerRepository().findCustomers();

  return res.status(200).json(customer);
};

export default getAllCustomerController;
