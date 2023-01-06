import { ObjectId } from "mongodb";
import { DeleteResult } from "typeorm";

interface ICustomer {
  _id: ObjectId;
  name: string;
  email: string;
  phone: string;
  address: string;
  cpf: string;
}

interface IdataUpdate {
  [key: string]: string | number;
}

interface ICustomerRepo {
  saveCustomer: (customer: ICustomer) => Promise<ICustomer>;
  findCustomers: () => Promise<ICustomer[]>;
  findOneCustomer: (email: string) => Promise<ICustomer>;
  deleteCustomer: (dataCustomer: IdataUpdate) => Promise<DeleteResult>;
}

export { ICustomer, ICustomerRepo, IdataUpdate };
