import firebase from 'firebase/app';
import { createContext } from 'react';

export default createContext<{ currentUser: firebase.User | null } | null>(
  null
);
