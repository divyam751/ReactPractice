import { store } from "../redux/store";
import { ADD_ACTION, SUB_ACTION } from "../redux/action";
import { useState } from "react";

const Counter = () => {
  const [render, setRender] = useState(1);
  const { getState, dispatch, subscribe } = store;

  console.log(getState().count);
  const handleAdd = () => {
    dispatch(ADD_ACTION());
  };
  const handleSub = () => {
    dispatch(SUB_ACTION());
  };
  subscribe(() => {
    setRender((pre) => pre + 1);
  });
  return (
    <div>
      <h1>Counter</h1>
      <div className="flex">
        <button className="btn flex" onClick={handleAdd}>
          +
        </button>
        <h1>{getState().count}</h1>
        <button className="btn flex" onClick={handleSub}>
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
