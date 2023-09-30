import { useContext } from "react";
import "./App.css";
import { ThemeContext } from "./component/ThemeContextProvider";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      className='App'
      style={{
        backgroundColor: theme === "dark" ? "black" : "white",
        color: theme === "dark" ? "white" : "black",
      }}
    >
      <h1>Theme : {theme} </h1>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
}

export default App;
