import { Request, Response } from "express";
import { CustomerRepository } from "../../repository";

const getOneCustomerController = async (req: Request, res: Response) => {
  try {
    const customer = await new CustomerRepository().findOneCustomer(
      req.params.email
    );

    return res.status(200).json(customer);
  } catch (err) {
    return res.status(err.statusCode).json({ error: err.message });
  }
};

export default getOneCustomerController;
