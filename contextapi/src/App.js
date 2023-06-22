import React from "react";
import { useContext } from "react";
import { AppContext } from "./Components/AppContext";

console.log(React);

function App() {
  // 3. consume
  const value = useContext(AppContext);
  console.log(value);

  return (
    <div className="App">
      <h1>Hello PT-WEB-12</h1>
      <h1>{value.appName}</h1>
    </div>
  );
}

export default App;
