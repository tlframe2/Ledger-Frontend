import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export const TransactionContext = createContext();

const TransactionContextProvider = props => {
  const [transactions, setTransactions] = useState([]);
  
  const addTransaction = async (type, description, amount) => {
    const originalData = [...transactions];
    const newTransaction = { id: uuidv4(), type, description, amount: parseFloat(amount) };
    setTransactions([...transactions, { id: uuidv4(), type, description, amount: parseFloat(amount) }]);

    console.log(newTransaction);

    try {
      await axios.post('https://ledger-backend.herokuapp.com/transaction', newTransaction);
    } catch (err) {
      setTransactions(originalData);
      alert(err.message);
    }
  }

  const removeTransaction = async id => {
    const originalData = [...transactions];
    setTransactions(transactions.filter(transaction => transaction.id !== id));

    console.log(id);

    try {
      await axios.delete(`https://ledger-backend.herokuapp.com/transaction/${id}`);
    } catch (err) {
      setTransactions(originalData);
      alert(err.message);
    }
  }

  const getTransactions = async () => {
    const { data } = await axios.get('https://ledger-backend.herokuapp.com/transaction');
    setTransactions(data);
  }

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <TransactionContext.Provider value={{ transactions, addTransaction, removeTransaction }}>
      {props.children}
    </TransactionContext.Provider>
  );
}

export default TransactionContextProvider;