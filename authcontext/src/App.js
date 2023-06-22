import "./App.css";
import { AuthContext } from "./Context/AuthContext";
import { ThemeContext } from "./Context/ThemeContext";
import { useContext } from "react";
function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { isAuth, Login, Logout } = useContext(AuthContext);
  return (
    <div
      className='App'
      style={{
        background: theme === "dark" ? "black" : "white",
        color: theme === "dark" ? "white" : "black",
      }}
    >
      <h1>Hello World</h1>
      <h1>Theme : {theme} </h1>
      <button onClick={toggleTheme}>Toggle Button</button>
      <h1>Current Status : {isAuth ? "Loged In" : "Loged Out"}</h1>
      {isAuth ? (
        <button onClick={Logout}>Logout</button>
      ) : (
        <button onClick={Login}>Login</button>
      )}
    </div>
  );
}

export default App;
