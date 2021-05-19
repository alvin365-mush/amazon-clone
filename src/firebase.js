import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9pgAirf3qhlpTSPjSYyAsbIqKUljHgzM",
  authDomain: "clone-22134.firebaseapp.com",
  projectId: "clone-22134",
  storageBucket: "clone-22134.appspot.com",
  messagingSenderId: "583012749095",
  appId: "1:583012749095:web:56076742328275c044e302",
  measurementId: "G-ZZX8EVXTGQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };