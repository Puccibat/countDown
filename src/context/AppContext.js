import { createContext, useReducer } from 'react';

export const AppContext = createContext();

const initialState = {
  timer: null,
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TIMER':
      return { timer: action.payload };
    default:
      return state;
  }
};

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  console.log(state);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
