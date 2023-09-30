import { useContext } from "react";
import "./App.css";
import { AppContext } from "./components/AppContextProvider";

function App() {
  const value = useContext(AppContext);
  console.log(value);
  return (
    <div className='App'>
      <h1> {value.appName} </h1>
    </div>
  );
}

export default App;
