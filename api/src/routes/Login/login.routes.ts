import { Router } from "express";
import userLogin from "../../controller/login";
import { validateShape } from "../../middlewares";
import { loginShape } from "../../shapes";

const routerLogin = Router();

routerLogin.post("", validateShape(loginShape), userLogin);

export default routerLogin;
