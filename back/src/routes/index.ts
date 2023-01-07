import { Router } from "express";

import routesCustomer from "./Customer";
import routerLogin from "./Login";
import routesUser from "./User";

const apiRouter = Router();

apiRouter.use("/customers", routesCustomer);
apiRouter.use("/login", routerLogin);
apiRouter.use("/users", routesUser);

export default apiRouter;
