import React from 'react';
import Balance from './components/Balance';
import NewTransactionForm from './components/NewTransactionForm';
import TransactionContextProvider from './contexts/TransactionContext';
import TransactionList from './components/TransactionList';
import './App.css';

function App() {
  return (
    <TransactionContextProvider>
      <Balance />
      <NewTransactionForm />
      <TransactionList />
    </TransactionContextProvider>
  );
}

export default App;