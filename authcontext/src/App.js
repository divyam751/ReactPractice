import "./App.css";
import { ThemeContext } from "./Context/ThemeContext";
import { useContext } from "react";
function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
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
    </div>
  );
}

export default App;
