import React, { useState, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

const RegisterForm = ({ toggleForm }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const { register } = useContext(UserContext);

  const handleRegister= e => {
    e.preventDefault();
    register(username, password);
  }

  const handleToggle = e => {
    e.preventDefault();
    toggleForm('login');
  }

  return (
    <>
      <form className="login-form" onSubmit={handleRegister}>
        <h1 className="title">Ledger</h1>
        <h3 className="subtitle">Register</h3>
        <label for="username">Username</label>
        <input type="text" id="username" value={username} onChange={e => setUsername(e.target.value)} />
        <label for="password">Password</label>
        <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
        <label for="confirm-password">Confirm Password</label>
        <input type="password" id="confirm-password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
        <input className="submit-btn" type="submit" value="Submit" />
        <button className="toggle-form" onClick={handleToggle}>Already a user? Log in.</button>
      </form>
    </>
  );
}

export default RegisterForm;