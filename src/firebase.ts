import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC_lefinF9TkRS-QEijuGP8rCLm41Whcq4',
  authDomain: 'typingtest-d1f3c.firebaseapp.com',
  projectId: 'typingtest-d1f3c',
  storageBucket: 'typingtest-d1f3c.appspot.com',
  messagingSenderId: '379302047831',
  appId: '1:379302047831:web:787171eebca0a9ac1c7312',
};

const app = firebase.initializeApp(firebaseConfig);

export default app;
