import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthContextProvider(props) {
  const [isAuth, setIsAuth] = useState(false);

  const Login = () => {
    setIsAuth(true);
  };
  const Logout = () => {
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{ isAuth, Login, Logout }}>
      {props.children}
    </AuthContext.Provider>
  );
}
