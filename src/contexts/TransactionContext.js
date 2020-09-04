import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export const TransactionContext = createContext();

/**
 * Contains transaction state and CRUD methods for dealing with transactions
 * @param {*} props - children of TransactionContextProvider
 */
const TransactionContextProvider = props => {
  const [transactions, setTransactions] = useState([]);
  
  /**
   * Creates new transaction
   * @param {string} type - 'inc' for income or 'exp' for expense
   * @param {string} description - transaction details e.g. 'Salary', 'Rent', etc
   * @param {number} amount - monetary value of transaction
   */
  const addTransaction = async (type, description, amount) => {
    const originalData = [...transactions];
    const newTransaction = { id: uuidv4(), type, description, amount: parseFloat(amount) };
    setTransactions([...transactions, newTransaction]);

    try {
      await axios.post('https://ledger-backend.herokuapp.com/transaction', newTransaction);
    } catch (err) {
      setTransactions(originalData);
      alert(err.message);
    }
  }

  /**
   * Deletes transaction
   * @param {*} id - id of transaction to be deleted
   */
  const removeTransaction = async id => {
    const originalData = [...transactions];
    setTransactions(transactions.filter(transaction => transaction.id !== id));

    try {
      await axios.delete(`https://ledger-backend.herokuapp.com/transaction/${id}`);
    } catch (err) {
      setTransactions(originalData);
      alert(err.message);
    }
  }

  /**
   * Retrieves all transactions
   */
  const getTransactions = async () => {
    const { data } = await axios.get('https://ledger-backend.herokuapp.com/transaction');
    setTransactions(data);
  }

  /**
   * Fetches transactions when component mounts
   */
  useEffect(() => {
    getTransactions();
  }, []);

  /**
   * Context provider
   * @return - Context provider that gives child components access to transaction state and CRUD methods
   */
  return (
    <TransactionContext.Provider value={{ transactions, addTransaction, removeTransaction }}>
      {props.children}
    </TransactionContext.Provider>
  );
}

export default TransactionContextProvider;