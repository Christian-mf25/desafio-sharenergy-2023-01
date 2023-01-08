import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { History } from "history";

import { IUser, IUserProviderData, IUserProvidersProps } from "./interface";
import APICustomers from "../../Services/api";

const UserContext = createContext<IUserProviderData>({} as IUserProviderData);

const UserProvider = ({ children }: IUserProvidersProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [rememberMe, setRememberMe] = useState(false);
  const token = localStorage.getItem("@Burguer:token") || "";

  const login = (userData: IUser, history: History, remember?: boolean) => {
    APICustomers.post("/login", userData)
      .then((res) => {
        localStorage.clear();
				remember && (localStorage.setItem("@User:token", res.data.token))

        toast.success(`Bem vindo ${res.data.username}`);
        setIsLoggedIn(true);
        history.push("/dashboard");
      })
      .catch((e) => toast.error(e.response.data.error));
  };

  const logout = (history: History) => {
    localStorage.clear();
    setIsLoggedIn(false);
    history.push("/");
  };

  return (
    <UserContext.Provider
      value={{ token, login, logout, isLoggedIn }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { useUser, UserProvider };
