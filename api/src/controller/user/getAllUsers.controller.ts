import { Request, Response } from "express";
import { IUser, UserRepository } from "../../repositories";

const getAllUsersController = async (_: Request, res: Response) => {
  const users: IUser[] = await new UserRepository().findUsers();

  return res.status(200).json(users);
};

export default getAllUsersController;
