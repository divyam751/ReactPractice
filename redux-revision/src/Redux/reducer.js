import { ADD_ONE, SUB_ONE } from "./actionType";

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_ONE:
      return { ...state, count: state.count + payload };
    case SUB_ONE:
      return { ...state, count: state.count - payload };
    default:
      return state;
  }
};
