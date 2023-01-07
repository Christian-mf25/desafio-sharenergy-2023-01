import { Request, Response } from "express";

import { CustomerRepository } from "../../repositories";
import { ErrorHandler } from "../../utils";

const getOneCustomerController = async (req: Request, res: Response) => {
  try {
    const customer = await new CustomerRepository().findOneCustomer(
      req.params.email
    );

    if (!customer) {
      throw new ErrorHandler(404, "Customer not found");
    }

    return res.status(200).json(customer);
  } catch (e) {
    return res.status(e.statusCode).json({ error: e.message });
  }
};

export default getOneCustomerController;
