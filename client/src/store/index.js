import React, { createContext, useContext, useReducer } from 'react';
import mainReducer from '../reducers';

const StateContext = createContext();

export const StateProvider = ({ children }) => (
  <StateContext.Provider
    value={useReducer(mainReducer, undefined, mainReducer)}>
    {children}
  </StateContext.Provider>
);

export const useStoreState = () => useContext(StateContext);
export const useDispatch = () => useStoreState()[1];
