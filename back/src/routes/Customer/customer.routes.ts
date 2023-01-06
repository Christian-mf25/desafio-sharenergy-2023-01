import { Router } from "express";
import {
  createCustomerController,
  getAllCustomerController,
  getOneCustomerController,
} from "../../controller";

const routesCustomer = Router();

routesCustomer.post("", createCustomerController);
routesCustomer.get("", getAllCustomerController);
routesCustomer.get("/:email", getOneCustomerController);
routesCustomer.patch("");
routesCustomer.delete("");

export default routesCustomer;
