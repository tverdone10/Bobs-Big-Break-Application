import React, { useReducer, createContext, useContext } from "react";

const ClickContext = createContext(null);
// const AutoContext = createContext(null);

export let initialState = {
  masterCurrency: 0,
  autoInc: 0,
  clickInc: 0
};

export function reducerClick(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state.clickInc + 1;

    case "AUTO":
      return state.autoInc + 1;

    default:
      return state;
  }
}


export function ProviderClick({ children, reducer, initialState }) {
  return (
    <ClickContext.Provider value={useReducer(reducerClick, initialState)}>
      {children}
    </ClickContext.Provider>
  );
}

// need to figure out how to make a global provider for auto add state

export function useTest() {
  return useContext(ClickContext);
}
