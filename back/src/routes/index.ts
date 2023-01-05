import { Router } from "express";

import routesCustomer from "./Customer";

const apiRouter = Router();

apiRouter.use("/customer", routesCustomer);

export default apiRouter;
