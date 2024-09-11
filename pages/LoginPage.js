// LoginPage.js
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const LoginPage = () => {
  // Use the AppContext to access the setUser function
  const { setUser } = useContext(AppContext);

  const handleLogin = () => {
    // login logic
    setUser({ username: 'johnDoe', role: 'admin' });
  };

  return (
    // login form
  );
};