import { Router } from "express";

import {
  createCustomerController,
  deleteCustomerController,
  getAllCustomerController,
  getOneCustomerController,
  updateCustomerController,
} from "../../controller/customer";
import { userUpdateShape, customerShape } from "../../shapes";
import { checkDuplicateCustomer, validateShape } from "../../middlewares";

const routesCustomer = Router();

routesCustomer.post("", checkDuplicateCustomer, validateShape(customerShape), createCustomerController);
routesCustomer.get("", getAllCustomerController);
routesCustomer.get("/:email", getOneCustomerController);
routesCustomer.patch("/:email", checkDuplicateCustomer, validateShape(userUpdateShape), updateCustomerController);
routesCustomer.delete("/:email", deleteCustomerController);

export default routesCustomer;
