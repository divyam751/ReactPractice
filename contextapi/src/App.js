import { useContext } from "react";
import { ThemeContext } from "./Components/Context/ThemeContext";
import { AuthContext } from "./Components/Context/AuthContext";

function App() {
  // consume the value
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { isAuth, login, logout } = useContext(AuthContext);
  console.log(isAuth);

  return (
    <div
      className='App'
      style={{
        background: theme === "dark" ? "black" : "white",
        color: theme === "dark" ? "white" : "black",
      }}
    >
      <h1>App Component</h1>
      <h1>theme:{theme}</h1>
      <button onClick={toggleTheme}>Change Theme</button>

      <br />
      <br />

      <h1>
        Login status:
        {isAuth ? "USER LOGGED IN" : "USER NOT LOGGED IN"}
      </h1>

      {isAuth ? (
        <button onClick={logout}>Logut</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
}

export default App;
