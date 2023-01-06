import { Request, Response } from "express";
import { DeleteResult } from "typeorm";

import { CustomerRepository } from "../../repository";
import { ErrorHandler } from "../../utils";

const deleteCustomerController = async (req: Request, res: Response) => {
  try {
    const customer: DeleteResult =
      await new CustomerRepository().deleteCustomer(req.params);

    if (!customer.affected) {
      throw new ErrorHandler(404, "Customer not found");
    }

    return res.status(204).json();
  } catch (e) {
    return res.status(e.statusCode).json({ error: e.message });
  }
};

export default deleteCustomerController;
