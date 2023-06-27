import React, { useState } from "react";
import { store } from "../Redux/store";
import { AddAction, SubAction } from "../Redux/action";

const Counter = () => {
  //   const [count, setCount] = useState(0);

  const [render, setRender] = useState(1111);

  const data = store;
  console.log(data);

  const { getState, dispatch, subscribe } = store;

  subscribe(() => {
    setRender((pre) => pre + 1);
  });

  console.log(data.getState());
  const handleAdd = () => {
    dispatch(AddAction());
  };
  const handleSub = () => {
    // setCount(count - 1);
    dispatch(SubAction());
  };

  return (
    <div>
      <h1>CounterApp </h1>
      <h1>Count : {getState().count}</h1>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSub}>Sub</button>
    </div>
  );
};

export default Counter;

//M   -- DataManagement  --state
//V    --view -- button
//C     --> Controler --  setCount
