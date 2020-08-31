import React, { useContext } from 'react';
import { TransactionContext } from '../contexts/TransactionContext';

const Balance = () => {
  const { transactions } = useContext(TransactionContext);

  const amounts = transactions.map(transaction => transaction.type === 'exp' ? transaction.amount * -1 : transaction.amount);
  const total = amounts.length > 0 ? amounts.reduce((acc, item) => (acc += item), 0).toFixed(2) : 0;

  const monthsArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const currDate = new Date();
  const currMonth = monthsArr[currDate.getMonth()];
  const currYear = currDate.getFullYear();

  return (
    <div className="top">
      <div className="budget">
        <div className="date">Available Budget for {currMonth} {currYear}:</div>
        <div className="budget__value">
          {
            total > 0
            ? `+ ${total}`
            : total
          }
        </div>
      </div>
    </div>
  );
}

export default Balance;