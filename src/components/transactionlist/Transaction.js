import React from 'react';
import './Transaction.css';
import { GlobalContext } from '../../context/GlobalState';
import { useContext } from 'react';
const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? '-' : '+'; // if amount is less than 0, then sign is '-'

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text}
      <span>
        {sign}₦{Math.abs(transaction.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        X
      </button>
    </li>
  );
};

export default Transaction;
