import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDr9DiuGeclnTgwPPK6m62MdM9K9R6O2aA",
    authDomain: "crwn-db-ec90b.firebaseapp.com",
    databaseURL: "https://crwn-db-ec90b.firebaseio.com",
    projectId: "crwn-db-ec90b",
    storageBucket: "crwn-db-ec90b.appspot.com",
    messagingSenderId: "484946873630",
    appId: "1:484946873630:web:30929b4d48250fa64d4d0f"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    console.log(firestore.doc('users/o2iu7423u4'));
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;