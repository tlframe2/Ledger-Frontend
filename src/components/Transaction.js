import React, { useContext, useState } from 'react';
import { TransactionContext } from '../contexts/TransactionContext';
import IosCloseCircleOutline from 'react-ionicons/lib/IosCloseCircleOutline';

/**
 * Displays details of transaction
 * @param {object} transaction - transaction object 
 */
const Transaction = ({ transaction }) => {
  const { removeTransaction } = useContext(TransactionContext);
  const [classList, setClassList] = useState('delete-btn hide-btn');

  return (
    <li className="transaction">
      <div className="transaction-description">{transaction.description}</div>
      <div 
        className="right" 
        onMouseEnter={() => setClassList('delete-btn show-btn')}
        onMouseLeave={() => setClassList('delete-btn hide-btn')}
      >
        <div 
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
          <IosCloseCircleOutline fontSize="22px" color="#DA634E" />
        </button>
      </div>
    </li>
  );
}

export default Transaction;