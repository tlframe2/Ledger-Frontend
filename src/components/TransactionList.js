import React, { useContext } from 'react';
import Transaction from './Transaction';
import { TransactionContext } from '../contexts/TransactionContext';

const TransactionList = () => {
  const { transactions } = useContext(TransactionContext);

  const income = transactions.filter(transaction => transaction.type === 'inc');
  const expenses = transactions.filter(transaction => transaction.type === 'exp');

  return (
    <div className="bottom">
      <div className="transaction-list-container">
        <h2 className="income__title">Income</h2>
        <ul className="transaction-list">
          {income.map(transaction => <Transaction key={transaction.id} transaction={transaction} />)}
        </ul>
      </div>
      <div className="transaction-list-container">
        <h2 className="expenses__title">Expenses</h2>
        <ul className="transaction-list">
          {expenses.map(transaction => <Transaction key={transaction.id} transaction={transaction} />)}
        </ul>
      </div>
    </div>
  );
}

export default TransactionList;