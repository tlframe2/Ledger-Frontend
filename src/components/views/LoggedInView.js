import React from 'react';
import Balance from '../Balance';
import NewTransactionForm from '../NewTransactionForm';
import TransactionList from '../TransactionList';
import Logout from '../auth/Logout';

const LoggedInView = () => {
  return (
    <>
      <Balance />
      <NewTransactionForm />
      <TransactionList />
      <Logout />
    </>
  );
}

export default LoggedInView;