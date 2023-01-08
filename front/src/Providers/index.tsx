import { ReactNode } from "react";

import { CustomerProvider } from "./Customers/customer.provider";
import { UserProvider } from "./Users/user.provider";

interface ProviderProps {
  children: ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
  return (
    <CustomerProvider>
      <UserProvider>{children}</UserProvider>
    </CustomerProvider>
  );
};

export default Providers;
