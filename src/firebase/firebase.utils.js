import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD9YKS4YypyHjEhWO-qfmWJwFGsGagEuy8",
    authDomain: "crwn-db-82df4.firebaseapp.com",
    databaseURL: "https://crwn-db-82df4.firebaseio.com",
    projectId: "crwn-db-82df4",
    storageBucket: "crwn-db-82df4.appspot.com",
    messagingSenderId: "543695017920",
    appId: "1:543695017920:web:0966a9af75146986569a25"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;