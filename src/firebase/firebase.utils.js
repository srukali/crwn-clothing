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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    console.log('snapshot', snapShot);

    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('Error creating user', error.message);
      }
    }

    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;
