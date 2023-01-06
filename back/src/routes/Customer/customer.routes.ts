import { Router } from "express";
import {
  createCustomerController,
  deleteCustomerController,
  getAllCustomerController,
  getOneCustomerController,
} from "../../controller";

const routesCustomer = Router();

routesCustomer.post("", createCustomerController);
routesCustomer.get("", getAllCustomerController);
routesCustomer.get("/:email", getOneCustomerController);
routesCustomer.patch("");
routesCustomer.delete("/:email", deleteCustomerController);

export default routesCustomer;
