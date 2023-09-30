import { useContext } from "react";
import "./App.css";
import { AuthContext } from "./components/AuthContextProvider";

function App() {
  const { isAuth, login, logout } = useContext(AuthContext);
  return (
    <div className='App'>
      <h1>
        Authentication Status:{" "}
        {isAuth ? "User has logedIn" : "User has logedOut"}{" "}
      </h1>
      {isAuth ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>login</button>
      )}
    </div>
  );
}

export default App;
