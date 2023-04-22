import { createContext } from "react";

const init = (initState) => {
  return {
    ...initState,
  };
};

const initialState = {};

const reducer = (state, action) => {
  switch (action.type) {
    case "": {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

const reducerContext = createContext();
const { Provider } = reducerContext || {};

export { initialState, reducer, Provider, init, reducerContext };
