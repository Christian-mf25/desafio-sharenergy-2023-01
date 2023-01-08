import { ReactNode } from "react";
import { History } from "history";

export interface IUserProvidersProps {
  children: ReactNode;
}

export interface IUser {
  username: string;
  password: string;
}

export interface IUserProviderData {
  login: (userData: IUser, history: History, remember: boolean) => void;
  logout: (history: History) => void;

  // setRememberMe: React.Dispatch<React.SetStateAction<boolean>>;
  // rememberMe: boolean;
  isLoggedIn: boolean;
  token: string;
}
