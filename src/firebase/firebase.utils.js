import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDHxgfccjFmE_duJWUDCVLLeBvu6FZ_m00",
    authDomain: "crwn-db-523e5.firebaseapp.com",
    projectId: "crwn-db-523e5",
    storageBucket: "crwn-db-523e5.appspot.com",
    messagingSenderId: "195122117580",
    appId: "1:195122117580:web:2c1014342a8f00f4f0bb69",
    measurementId: "G-X3T671RYLR"
  };
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider =  new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;