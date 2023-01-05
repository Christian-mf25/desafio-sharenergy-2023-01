import { ObjectId } from "mongodb";

interface ICustomer {
  _id: ObjectId;
  name: string;
  email: string;
  phone: string;
  address: string;
  cpf: string;
}

interface ICustomerRepo {
  saveCustomer: (customer: ICustomer) => Promise<ICustomer>;
  findCustomers: () => Promise<ICustomer[]>;
}

export { ICustomer, ICustomerRepo };
