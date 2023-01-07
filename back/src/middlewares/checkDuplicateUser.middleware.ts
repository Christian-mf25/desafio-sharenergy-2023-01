import { Request, Response, NextFunction } from "express";
import { UserRepository } from "../repositories";

import { ErrorHandler } from "../utils";

const checkDuplicateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const username = req.body.username;
    const checkUsername = await new UserRepository().findOneUser(username);

    if (checkUsername) {
      throw new ErrorHandler(422, "Username is already in use");
    }

    return next();
  } catch (e) {
    return res.status(e.statusCode).json({ error: e.message });
  }
};

export default checkDuplicateUser;
