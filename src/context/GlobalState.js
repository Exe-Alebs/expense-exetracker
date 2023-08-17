import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import transactionEnum from './Transaction';
//initial state
const initialState = {
  transactions: [],
};
//create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  const deleteTransaction = (id) => {
    dispatch({
      type: transactionEnum.deleteTransaction,
      payload: id,
    });
  };

  const addTransaction = (transaction) => {
    dispatch({
      type: transactionEnum.addTransaction,
      payload: transaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
