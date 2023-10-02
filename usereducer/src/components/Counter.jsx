import React from "react";
import { useReducer } from "react";

const reducer = (state, action) => {
  //   if (action.type === "INC_COUNT") {
  //     return state + 1;
  //   }
  //   if (action.type === "DEC_COUNT") {
  //     return state - 1;
  //   }
  //   if (action.type === "RESET_COUNT") {
  //     return initialState;
  //   }

  switch (action.type) {
    case "INC_COUNT":
      return state + 1;
    case "DEC_COUNT":
      return state - 1;
    case "RESET_COUNT":
      return initialState;
    default:
      throw new Error("Action type is not valid");
  }
};
const initialState = 0;

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count : {state}</h1>
      <button onClick={() => dispatch({ type: "INC_COUNT" })}>Add 1</button>
      <button onClick={() => dispatch({ type: "DEC_COUNT" })}>Sub 1</button>
      <button onClick={() => dispatch({ type: "RESET_COUNT" })}>Reset</button>
    </div>
  );
};

export default Counter;
