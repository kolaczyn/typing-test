import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import AuthContext from '../contexts/AuthContext';
import app from '../firebase';

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [_pending, setPending] = useState(true);

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);

  // if (pending) {
  //   return <h1>Please wait...</h1>;
  // }

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
