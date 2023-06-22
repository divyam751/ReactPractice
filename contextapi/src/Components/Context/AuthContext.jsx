import React, { createContext, useState } from "react";

// create context

export const AuthContext = createContext();

// 2. provide this context

export default function AuthContextProvider(props) {
  console.log(props);
  const [isAuth, setIsAuth] = useState(false);
  // login
  const login = () => {
    setIsAuth(true);
  };

  // logout
  const logout = () => {
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{ login, logout, isAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
}
