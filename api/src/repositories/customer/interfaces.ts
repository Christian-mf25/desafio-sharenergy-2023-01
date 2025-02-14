import { DeleteResult, UpdateResult } from "typeorm";
import { ObjectId } from "mongodb";

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
	findByPhone: (phone: string) => Promise<ICustomer>;
	findByCpf: (cpf: string) => Promise<ICustomer>;
  updateCustomer: (
    dataCustomer: IdataUpdate,
    update: IdataUpdate
  ) => Promise<UpdateResult>;
  deleteCustomer: (dataCustomer: IdataUpdate) => Promise<DeleteResult>;
}

export { ICustomer, ICustomerRepo, IdataUpdate };
