import React, { useState } from 'react';
import Illustration from '../Illustration';
import LogInForm from '../auth/LogInForm';
import RegisterForm from '../auth/RegisterForm';

const LoggedOutView = () => {
  const [displayForm, setDisplayForm] = useState('login');

  return (
    <div className="container">
      <Illustration />
      {
        displayForm === 'login' ?
        <LogInForm toggleForm={setDisplayForm} /> :
        <RegisterForm toggleForm={setDisplayForm} />
      }
    </div>
  );
}

export default LoggedOutView;