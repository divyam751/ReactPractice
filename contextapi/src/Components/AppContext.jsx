// Create Context
// Provider
// Consume

import { createContext } from "react";

//Create Context

export const AppContext = createContext();

//Provider

export default function AppContextProvider({ children }) {
  const appName = "Rohit";
  const login = () => {};
  return (
    <AppContext.Provider value={{ appName, login }}>
      {children}
    </AppContext.Provider>
  );
}
