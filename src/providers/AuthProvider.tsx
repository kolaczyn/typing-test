import firebase from 'firebase/app';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import AuthContext from '../contexts/AuthContext';
import app from '../firebase';

const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);
  const [, setPending] = useState(true);

  useEffect(() => {
    const unsubscribe = app.auth().onAuthStateChanged(user => {
      setCurrentUser(user);
      setPending(false);
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
