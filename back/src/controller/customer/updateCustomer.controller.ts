import { Request, Response } from "express";
import { CustomerRepository } from "../../repository";

const updateCustomerController = async (req: Request, res: Response) => {
  try {
    const data = await new CustomerRepository().updateCustomer(
      req.params,
      req.validated
    );

    // if (!data.affected) {
    //   throw new ErrorHandler(404, "Customer not found");
    // }

    const customer = await new CustomerRepository().findOneCustomer(
      req.params.email
    );
		return res.status(200).json(customer)
  } catch (err) {
    return res.status(err.statusCode).json({ error: err.message });
  }
};

export default updateCustomerController;
