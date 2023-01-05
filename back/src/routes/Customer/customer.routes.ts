import { Router } from "express";
import { createCustomerController, getAllCustomerController } from "../../controller";

const routesCustomer = Router();

routesCustomer.post("", createCustomerController);
routesCustomer.get("", getAllCustomerController);
routesCustomer.get("");
routesCustomer.patch("");
routesCustomer.delete("");

export default routesCustomer;
