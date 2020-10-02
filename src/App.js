import React from 'react';
// import Balance from './components/Balance';
// import NewTransactionForm from './components/NewTransactionForm';
// import TransactionList from './components/TransactionList';
// import Login from './components/Login';
import Content from './components/Content';
import TransactionContextProvider from './contexts/TransactionContext';
import UserContextProvider from './contexts/UserContext';
// import LoggedInView from './components/views/LoggedInView';
// import LoggedOutView from './components/LoggedOutView';
// import { UserContext } from './contexts/UserContext';
import './App.css';

function App() {
  //const { userData } = useContext(UserContext);

  return (
    <UserContextProvider>
      <TransactionContextProvider>
        {/* <Balance />
        <NewTransactionForm />
        <TransactionList /> */}
        <Content />
        {/* {
          userData.isAuthorized ?
          <LoggedInView /> :
          <LoggedOutView />
        } */}
      </TransactionContextProvider>
    </UserContextProvider>
  );
}

export default App;