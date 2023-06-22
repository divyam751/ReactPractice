// Create AppContext
//Provider
// Consume

import { createContext } from "react";

// Create Context

export const AppContext = createContext();

//Provider

export default function AppContextProvider({ children }) {
  const appName = "ContextAPI";

  return (
    <AppContext.Provider value={{ appName }}>{children}</AppContext.Provider>
  );
}
