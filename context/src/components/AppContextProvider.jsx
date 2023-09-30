import React, { createContext } from "react";
// C-P-C

// Create Context
export const AppContext = createContext();

const appName = "Deffy Duck";

// Provide Context
export const AppContextProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{ appName }}> {children} </AppContext.Provider>
  );
};
