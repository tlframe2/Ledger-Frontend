import React, { useState, useEffect, createContext, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export const TransactionContext = createContext();

/**
 * Contains transaction state and CRUD methods for dealing with transactions
 * @param {*} props - children of TransactionContextProvider
 */
const TransactionContextProvider = props => {
  const [transactions, setTransactions] = useState([]);
  const { userData, logout } = useContext(UserContext);

  let config = {
    headers: {
      Authorization: `Bearer ${userData.token}`
    }
  }
  
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
      // await axios.post('https://ledger-backend.herokuapp.com/transaction', newTransaction);
      // await axios.post('http://localhost:5000/transaction', newTransaction, config);
      await axios.post('https://ledger-backend.herokuapp.com/transaction', newTransaction, config);
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
      // await axios.delete(`https://ledger-backend.herokuapp.com/transaction/${id}`);
      // await axios.delete(`http://localhost:5000/transaction/${id}`, config);
      await axios.delete(`https://ledger-backend.herokuapp.com/transaction/${id}`, config);
    } catch (err) {
      setTransactions(originalData);
      alert(err.message);
    }
  }

  /**
   * Retrieves all transactions
   */
  // const getTransactions = async () => {
  //   //const { data } = await axios.get('https://ledger-backend.herokuapp.com/transaction');
  //   // const { data } = await axios.get('http://localhost:5000/transaction/byUser', config);
  //   try {
  //     const { data } = await axios.get('https://ledger-backend.herokuapp.com/transaction/byUser', config);
  //     setTransactions(data);
  //   } catch (err) {
  //     // console.log(typeof err.response.status);
  //     // console.log(err.response.status);
  //     if (err.response.status === 401 || err.response.status === 422) {
  //       logout();
  //     }
  //   }
  // }

  /**
   * Fetches transactions when component mounts
   */
  useEffect(() => {
    const getTransactions = async () => {
      //const { data } = await axios.get('https://ledger-backend.herokuapp.com/transaction');
      // const { data } = await axios.get('http://localhost:5000/transaction/byUser', config);
      try {
        const { data } = await axios.get('https://ledger-backend.herokuapp.com/transaction/byUser', config);
        setTransactions(data);
      } catch (err) {
        // console.log(typeof err.response.status);
        // console.log(err.response.status);
        if (err.response.status === 401 || err.response.status === 422) {
          logout();
        }
      }
    }
    getTransactions();
    // eslint-disable-next-line
  }, [userData.isAuthorized]);

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