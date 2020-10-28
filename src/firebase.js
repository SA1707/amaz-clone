import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCsFO2nviKMHEr0h5C7rk0Xojw6_F9yVCU",
  authDomain: "clone-d14b9.firebaseapp.com",
  databaseURL: "https://clone-d14b9.firebaseio.com",
  projectId: "clone-d14b9",
  storageBucket: "clone-d14b9.appspot.com",
  messagingSenderId: "742814890404",
  appId: "1:742814890404:web:9a292e4d6e2776678de931",
  measurementId: "G-8DRHN9VLE3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
