import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import jwt_decode from "jwt-decode";

export const UserContext = createContext();

const UserContextProvider = props => {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
    isAuthorized: false
  });

  const login = async (username, password) => {
    //const { data } = await axios.post("http://localhost:5000/login", { username, password });
    const { data } = await axios.post("https://ledger-backend.herokuapp.com/login", { username, password });
    const decoded = jwt_decode(data.token);

    setUserData({
      token: data.token,
      user: decoded.sub,
      isAuthorized: true
    });

    localStorage.setItem("token", data.token);
  }

  const register = async (username, password) => {
    //const { data } = await axios.post("http://localhost:5000/login", { username, password });
    const { data } = await axios.post("https://ledger-backend.herokuapp.com/register", { username, password });
    const decoded = jwt_decode(data.token);

    setUserData({
      token: data.token,
      user: decoded.sub,
      isAuthorized: true
    });

    localStorage.setItem("token", data.token);
  }

  const logout = () => {
    localStorage.setItem("token", "");
    setUserData({
      token: undefined,
      user: undefined,
      isAuthorized: false
    });
  }

  const checkLoggedIn = async () => {
    let token = localStorage.getItem("token");

    if (!token) {
      localStorage.setItem("token", "");
      token = "";
    } else {
      const decoded = jwt_decode(token);
      setUserData({
        token,
        user: decoded.sub,
        isAuthorized: true
      });
    }
  }

  useEffect(() => {
    checkLoggedIn();
  }, []);

  return (
    <UserContext.Provider value={{ userData, login, register, logout }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;