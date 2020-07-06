import React, { useState, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const TransactionContext = createContext();

const TransactionContextProvider = props => {
  const [transactions, setTransactions] = useState([]);
  
  const addTransaction = (type, description, amount) => {
    setTransactions([...transactions, { id: uuidv4(), type, description, amount: parseInt(amount) }]);
  }

  const removeTransaction = id => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  }

  return (
    <TransactionContext.Provider value={{ transactions, addTransaction, removeTransaction }}>
      {props.children}
    </TransactionContext.Provider>
  );
}

export default TransactionContextProvider;