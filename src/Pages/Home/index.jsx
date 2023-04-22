import React, { useReducer, memo } from "react";
import HomeMain from "./Main";
import { init, initialState, Provider, reducer } from "./Reducer";

function Home() {
  const [state, dispatch] = useReducer(reducer, initialState, init);
  return (
    <Provider value={{ state, dispatch }}>
      <HomeMain />
    </Provider>
  );
}

export default memo(Home);
