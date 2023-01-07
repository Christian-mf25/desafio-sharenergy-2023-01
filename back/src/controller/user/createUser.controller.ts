import { Request, Response } from "express";
import { IUser, UserRepository } from "../../repositories";

// import { CustomerRepository, ICustomer } from "../../repositories";

const createUserController = async (req: Request, res: Response) => {
  const user: IUser = await new UserRepository().saveUser(req.validated);

  const userToReturn = JSON.parse(JSON.stringify(user));
  delete userToReturn.password;

  return res.status(201).json(user);
};

export default createUserController;
