//setup data layer
//we need this to track the basket

import React, { createContext, useContext, useReducer } from "react";

//DATA LAYER
export const StateContext = createContext();

//BUILD A PROVIDER
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children} {/* referring to the App, hasta que no lo referenciemos */}
  </StateContext.Provider>
);

//this is how we use it inside of a compponent
export const useStateValue = () => useContext(StateContext);
