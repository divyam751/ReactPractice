// import logo from "./logo.svg";
// import Post from "./Components/Post";
// import Timer from "./Components/Timer";
import MyTimer from "./Components/MyTimer";
import "./App.css";
import { useState } from "react";

function App() {
  const [showTimer, setShowTimer] = useState(true);
  return (
    <div className='App'>
      {showTimer && <MyTimer />}
      <button
        onClick={() => {
          setShowTimer(!showTimer);
        }}
      >
        {showTimer ? "Hide Timer" : "Show Timer"}
      </button>
    </div>
  );
}

export default App;
