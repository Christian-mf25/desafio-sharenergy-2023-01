import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

import {
  ICustomer,
  ICustomerProviderData,
  ICustomerProvidersProps,
} from "./interfaces";
import APICustomers from "../../Services/api";

const CustomerContext = createContext<ICustomerProviderData>(
  {} as ICustomerProviderData
);

const CustomerProvider = ({ children }: ICustomerProvidersProps) => {
  const [customers, setCustomers] = useState<ICustomer[]>([] as ICustomer[]);
  const [oneCustomer, setOneCustomer] = useState<ICustomer>([] as ICustomer);
  const [action, setAction] = useState<boolean>(false);

  useEffect(() => {
    let getAllCustomers = async () => {
      await APICustomers.get("/customers").then((res) =>
        setCustomers(res.data)
      );
    };

    getAllCustomers();
  }, [action]);

  const getOneCustomer = async (email: string) => {
    await APICustomers.get(`/customers/${email}`)
      .then((res) => {
        setOneCustomer(res.data);
      })
      .catch((e) => toast.error(e.response.data.error));
  };

  const createCustomer = (data: ICustomer) => {
    APICustomers.post("/customers", data)
      .then(() => {
        toast.success("cliente cadastrado");
        setAction(!action);
      })
      .catch((e) => toast.error(e.response.data.error));
  };

  const deleteCustomer = (email: string) => {
    APICustomers.delete(`/customers/${email}`)
      .then(() => {
        toast.success("Cliente removido");
        setAction(!action);
      })
      .catch((e) => {
        toast.error(e.response.data.error);
      });
  };

  const updateCustomer = (data: ICustomer, email: string) => {
    APICustomers.patch(`/customers/${email}`, data)
      .then(() => {
        toast.success(`${data.name} Atualizado com sucesso!`);
        setAction(!action);
      })
      .catch((e) => {
        toast.error(e.response.data.error);
      });
  };

  return (
    <CustomerContext.Provider
      value={{
        customers,
        oneCustomer,
        createCustomer,
        deleteCustomer,
        updateCustomer,
        getOneCustomer,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
};

const useCustomers = () => useContext(CustomerContext);

export { CustomerProvider, useCustomers };
