import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBSHy2PvxPyhqcJPR1l4tnJQwGnVV6e52Y',
  authDomain: 'typing-test-62b10.firebaseapp.com',
  projectId: 'typing-test-62b10',
  storageBucket: 'typing-test-62b10.appspot.com',
  messagingSenderId: '616405068548',
  appId: '1:616405068548:web:0e0d3ded93350da339be51',
  measurementId: 'G-KQ7E031QHZ',
};

const app = firebase.initializeApp(firebaseConfig);

export default app;
