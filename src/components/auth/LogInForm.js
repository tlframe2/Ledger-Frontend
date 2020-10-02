import React, { useState, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

const LogInForm = ({ toggleForm }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const { login } = useContext(UserContext);

  const handleLogin = e => {
    e.preventDefault();
    login(username, password);
  }

  const handleToggle = e => {
    e.preventDefault();
    toggleForm('register');
  }

  return (
    <>
      <form className="login-form" onSubmit={handleLogin}>
        <h1 className="title">Ledger</h1>
        <h3 className="subtitle">Log In</h3>
        <label for="username">Username</label>
        <input type="text" id="username" value={username} onChange={e => setUsername(e.target.value)} />
        <label for="password">Password</label>
        <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
        <input className="submit-btn" type="submit" value="Submit" />
        <button className="toggle-form" onClick={handleToggle}>Not a user? Register an account.</button>
      </form>
    </>
  );
}

export default LogInForm;