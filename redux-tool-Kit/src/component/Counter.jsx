import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/counterSlice";
const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="flex column">
      <h1>Counter</h1>
      <div className="flex">
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          -
        </button>
        <h1>{count}</h1>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
