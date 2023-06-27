import { ADD_ONE, SUBTRACT_ONE } from "./actionTypes";

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_ONE: {
      return {
        ...state,
        count: state.count + payload,
      };
    }
    case SUBTRACT_ONE: {
      return {
        ...state,
        count: state.count - payload,
      };
    }
    default:
      return state;
  }
};
