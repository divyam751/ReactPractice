import React, { useState } from "react";
import { store } from "../Redux/store";
import { ADD_ACTION, SUB_ACTION } from "../Redux/action";
const Counter = () => {
  const { getState, dispatch, subscribe } = store;
  const [render, setRender] = useState(1);
  //   console.log(data.getState());
  const handleInc = () => {
    dispatch(ADD_ACTION());
  };
  const handleDec = () => {
    dispatch(SUB_ACTION());
  };
  subscribe(() => {
    setRender((pre) => pre + 1);
  });
  return (
    <div>
      <h1>Count : {getState().count} </h1>
      <button onClick={() => handleInc()}>Inc</button>
      <button onClick={() => handleDec()}>Dec</button>
    </div>
  );
};

export default Counter;
