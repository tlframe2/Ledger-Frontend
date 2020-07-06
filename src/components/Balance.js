import React, { useContext } from 'react';
import { TransactionContext } from '../contexts/TransactionContext';

const Balance = () => {
  const { transactions } = useContext(TransactionContext);

  const amounts = transactions.map(transaction => transaction.type === 'exp' ? transaction.amount * -1 : transaction.amount);
  console.log(amounts);
  const total = amounts.length > 0 ? amounts.reduce((acc, item) => (acc += item), 0).toFixed(2) : 0;

  return (
    <div className="top">
      <div className="budget">
        <div className="budget__value">Balance is {total}</div>
      </div>
      
    </div>
  );
}

export default Balance;