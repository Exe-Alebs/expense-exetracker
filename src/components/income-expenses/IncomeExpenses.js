import React, { useContext } from 'react';
import './IncomeExpense.css';

import { GlobalContext } from '../../context/GlobalState';

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  return (
    <div className="incomeExpense">
      <div>
        <h4 className="H4">INCOME</h4>
        <h1 className="money-plus">₦{income}</h1>
      </div>
      <div>
        <h4 className="H4">EXPENSE </h4>
        <h1 className="money-minus">-₦{expense}</h1>
      </div>
    </div>
  );
};
