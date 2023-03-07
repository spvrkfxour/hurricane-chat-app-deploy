import firebase from 'firebase/compat/app'
import { initializeApp } from 'firebase/app';
import 'firebase/compat/firestore'
import 'firebase/compat/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDSgSOlo00cU9LhP595keftOHAxjIZOulo",
  authDomain: "chat-app-5b309.firebaseapp.com",
  projectId: "chat-app-5b309",
  storageBucket: "chat-app-5b309.appspot.com",
  messagingSenderId: "537167609840",
  appId: "1:537167609840:web:0ab54679798f523494a735",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
