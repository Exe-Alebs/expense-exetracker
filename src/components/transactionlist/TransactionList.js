import React from 'react';
import './Transaction.css';
import Transaction from './Transaction';
import { useContext } from 'react';
import { GlobalContext } from './../../context/GlobalState';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3> History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
