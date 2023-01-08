import { ReactNode } from "react";

export interface ICustomerProvidersProps {
  children: ReactNode;
}

export interface ICustomer {
  _id?: string;
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  cpf?: string;
}

export interface ICustomerProviderData {
  createCustomer: (data: ICustomer) => void;
  deleteCustomer: (email: string) => void;
  updateCustomer: (data: ICustomer, email: string) => void;
  getOneCustomer: (email: string) => void;
  oneCustomer: ICustomer;
  customers: ICustomer[];
}
