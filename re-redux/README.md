# REDUX (State management library)

- Based on FLUX Atchitecture

# Imp Question

## 3 Principles of REDUX

- Single Source of Truth
- State is read only
- Changes are made with pure functions

# Here we are creating Couter APP with REDUX

- npm i reudx

# Folder structure

- src/Redux
- - store.js
- - action.js
- - reducer.js
- - actionType.js

# create store

- reducer function ---> state,action => {type, payload}

# actionType.js

```javascript
export const ADD_ONE = "ADD_ONE";
export const SUB_ONE = "SUB_ONE";
```

# action.js

```javascript
export const ADD_ACTION = () => {
  return { type: "ADD_ONE", payload: 1 };
};
export const SUB_ACTION = () => {
  return { type: "SUB_ONE", payload: 1 };
};
```

# reducer.js

```javascript
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
```

# store.js

```javascript
import { legacy_createStore } from "redux";
import { reducer } from "./reducer";
const intitialState = {
  count: 10,
};

export const store = legacy_createStore(reducer, intitialState);
```
