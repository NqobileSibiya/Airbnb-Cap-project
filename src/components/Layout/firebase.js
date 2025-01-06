import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBs-YZE9tDB_sCy5FhVO071Hkcb3Tmc018",
    authDomain: "airbnb-cap-project.firebaseapp.com",
    projectId: "airbnb-cap-project",
    storageBucket: "airbnb-cap-project.appspot.com",
    messagingSenderId: "344449115876",
    appId: "1:344449115876:web:711a4a479faf72fce8eef1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };