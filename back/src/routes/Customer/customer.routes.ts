import { Router } from "express";
import {
  createCustomerController,
  deleteCustomerController,
  getAllCustomerController,
  getOneCustomerController,
  updateCustomerController,
} from "../../controller";
import validateShape from "../../middlewares/validateShape.middleware";
import { userUpdateShape, customerShape } from "../../shapes";

const routesCustomer = Router();

routesCustomer.post("", validateShape(customerShape), createCustomerController);
routesCustomer.get("", getAllCustomerController);
routesCustomer.get("/:email", getOneCustomerController);
routesCustomer.patch(
  "/:email",
  validateShape(userUpdateShape),
  updateCustomerController
);
routesCustomer.delete("/:email", deleteCustomerController);

export default routesCustomer;
