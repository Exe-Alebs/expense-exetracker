import React from 'react';
import './Transaction.css';
import { useState } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { useContext } from 'react';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

  const onsubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 10000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
  };

  return (
    <div>
      <h3 className="">Add New Transaction</h3>
      <form onSubmit={onsubmit}>
        <div className="">
          <label htmlFor="text"> Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter transaction..."
          />
        </div>
        <div className="">
          <label htmlFor="amount">
            Amount <br />
            (negative: expense ,positive: income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  );
};
