import firebase from 'firebase/app';
import 'firebase/storage';
require('dotenv').config();

const app = firebase.initializeApp({
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
});

export const storage = firebase.storage();

export default app;
