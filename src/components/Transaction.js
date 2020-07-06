import React, { useContext } from 'react';
import { TransactionContext } from '../contexts/TransactionContext';

const Transaction = ({ transaction }) => {
  const { removeTransaction } = useContext(TransactionContext);

  return (
    <li onClick={() => removeTransaction(transaction.id)}>
      {transaction.description} - {transaction.amount}
    </li>
  );
}

export default Transaction;