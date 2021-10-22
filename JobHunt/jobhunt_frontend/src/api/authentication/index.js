import React, {  useContext, createContext, useMemo } from "react";
import { useProvideAuth } from "./UseProvideAuth/UseProvideAuth";
const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
export  const useAuth = () => {
  return useContext(authContext);
};