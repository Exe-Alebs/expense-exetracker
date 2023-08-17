import transactionEnum from './Transaction';
export const AppReducer = (state, action) => {
  switch (action.type) {
    case transactionEnum.deleteTransaction:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case transactionEnum.addTransaction:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};
export default AppReducer;
