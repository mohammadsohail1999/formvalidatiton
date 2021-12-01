import { createContext, useContext } from "react";

export const AuthContext = createContext();

export const GetAuthState = () => {
  return useContext(AuthContext);
};
