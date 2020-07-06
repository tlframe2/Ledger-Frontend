import React, { useContext } from 'react';
import Transaction from './Transaction';
import { TransactionContext } from '../contexts/TransactionContext';

const TransactionList = () => {
  const { transactions } = useContext(TransactionContext);

  const income = transactions.filter(transaction => transaction.type === 'inc');
  const expenses = transactions.filter(transaction => transaction.type === 'exp');

  return (
    <>
      <div>
        <h2>Income</h2>
        <ul>
          {income.map(transaction => <Transaction key={transaction.id} transaction={transaction} />)}
        </ul>
      </div>
      <div>
        <h2>Expenses</h2>
        <ul>
          {expenses.map(transaction => <Transaction key={transaction.id} transaction={transaction} />)}
        </ul>
      </div>
    </>
  );
}

export default TransactionList;