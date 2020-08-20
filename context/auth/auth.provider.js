// Vendor libs
import React, { useState, useEffect } from 'react';
import { AuthContext } from './auth.context';

// Context
const AuthProvider = ({ children }) => {
  // Members
  const users = [
    { email: 'user1@gmail.com', username: 'user-1', pwd: '123' },
    { email: 'user2@gmail.com', username: 'user-2', pwd: '123' },
    { email: 'user3@gmail.com', username: 'user-3', pwd: '123' },
  ];

  //Component state menbers
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    setCurrentUser(users[1]);
  }, []);

  const logIn = (u, p) => {
    const cu = users.find((usr) => usr.username === u && usr.pwd === p);
    if (cu) {
      setCurrentUser(cu);
    } else {
      throw new Error('Datos de usuario incorrectos');
    }
  };

  const logOut = () => {
    if (currentUser) {
      setCurrentUser(null);
    } else {
      alert('El usuario no está logueado');
    }
  };

  return (
    <AuthContext.Provider value={{ currentUser, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// Exportation
export { AuthProvider };
