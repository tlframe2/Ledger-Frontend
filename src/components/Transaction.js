import React, { useContext, useState } from 'react';
import { TransactionContext } from '../contexts/TransactionContext';

const Transaction = ({ transaction }) => {
  const { removeTransaction } = useContext(TransactionContext);
  const [classList, setClassList] = useState('delete-btn hide-btn');
  //onClick={() => removeTransaction(transaction.id)}

  return (
    <li className="transaction">
      <div className="transaction-description">{transaction.description}</div>
      <div 
        className="right" 
        onMouseEnter={() => setClassList('delete-btn show-btn')}
        onMouseLeave={() => setClassList('delete-btn hide-btn')}
      >
        <div 
          //className="transaction-amount"
          className={
            transaction.type === 'inc' 
            ? 'transaction-amount income-amount'
            : 'transaction-amount expenses-amount'
          }
        >
          {
            transaction.type === 'inc' 
            ? `+ ${transaction.amount}`
            : `- ${transaction.amount}`
          }
        </div>
        <button className={classList} onClick={() => removeTransaction(transaction.id)}>
          <i className="ion-ios-close-outline"></i>
        </button>
      </div>
    </li>
  );
}

export default Transaction;