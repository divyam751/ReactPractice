import "./App.css";
import { useContext } from "react";
import { AppContext } from "./Components/AppContext";
function App() {
  const value = useContext(AppContext);
  return (
    <div className='App'>
      <h1> Hello World</h1>
      <h1> {value.appName}</h1>
    </div>
  );
}

export default App;
