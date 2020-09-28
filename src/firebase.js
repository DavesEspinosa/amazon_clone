import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBcGLxpkQgdqytwg7BoHFFb8JduGlMikMY",
  authDomain: "clone-cf967.firebaseapp.com",
  databaseURL: "https://clone-cf967.firebaseio.com",
  projectId: "clone-cf967",
  storageBucket: "clone-cf967.appspot.com",
  messagingSenderId: "179778675875",
  appId: "1:179778675875:web:18ab8b977aef0f0141cb16",
  measurementId: "G-MNQSLJW9H9",
};

//to handle the login and logout
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
