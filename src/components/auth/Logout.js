import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

const Logout = () => {
  const { logout } = useContext(UserContext);

  return (
    <button className="logout-btn" onClick={logout}>
      Log out
    </button>
  );
}

export default Logout;