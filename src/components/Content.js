import React, { useContext } from 'react';
import LoggedInView from './views/LoggedInView';
import LoggedOutView from './views/LoggedOutView';
import { UserContext } from '../contexts/UserContext';

const Content = () => {
  const { userData } = useContext(UserContext);

  return (
    <>
      {
        userData.isAuthorized ?
        <LoggedInView /> :
        <LoggedOutView />
      }
    </>
  );
}

export default Content;