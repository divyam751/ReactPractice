import { ADD_ONE } from "./actionType";
import { SUB_ONE } from "./actionType";

export const ADD_ACTION = () => {
  return { type: ADD_ONE, payload: 1 };
};
export const SUB_ACTION = () => {
  return { type: SUB_ONE, payload: 1 };
};
