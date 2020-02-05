import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyARFOgYG-HIn0xfQMevt0ic1ayljngnjqo",
  authDomain: "commerce-db-95600.firebaseapp.com",
  databaseURL: "https://commerce-db-95600.firebaseio.com",
  projectId: "commerce-db-95600",
  storageBucket: "commerce-db-95600.appspot.com",
  messagingSenderId: "1044119667773",
  appId: "1:1044119667773:web:4cc283de4522861de2d654"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
