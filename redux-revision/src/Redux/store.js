import { legacy_createStore } from "redux";
import { reducer } from "./reducer";
const intitialState = {
  count: 10,
};

export const store = legacy_createStore(reducer, intitialState);
