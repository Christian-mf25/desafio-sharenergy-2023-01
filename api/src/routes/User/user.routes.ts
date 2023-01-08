import { Router } from "express";
import createUserController from "../../controller/user/createUser.controller";
import getAllUsersController from "../../controller/user/getAllUsers.controller";
import { checkDuplicateUser, validateShape } from "../../middlewares";
import { userShape } from "../../shapes";

const routesUser = Router();

routesUser.post("", checkDuplicateUser, validateShape(userShape), createUserController);
routesUser.get("", getAllUsersController);
routesUser.post("/login");

export default routesUser;
