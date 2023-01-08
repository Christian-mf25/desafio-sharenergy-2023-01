import { ReactNode } from "react";

import { CustomerProvider } from "./Customers/customer.provider";

interface ProviderProps {
  children: ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
  return <CustomerProvider>{children}</CustomerProvider>;
};

export default Providers;
