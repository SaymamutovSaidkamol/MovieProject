import { createContext, useContext, useReducer } from "react";

const Context = createContext();

export const ContextProvider = ({ children, initialState, reducer }) => {
  const data = useReducer(reducer, initialState);
  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const useContextValue = () => useContext(Context);
