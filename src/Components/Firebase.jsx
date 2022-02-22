import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/storage";
//import { initializeApp } from "firebase/app";
//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAGqKlnE9q-vk0FnHeSbz2YqHSwpI6ATU4",
  authDomain: "sign-up-form-b6a91.firebaseapp.com",
  projectId: "sign-up-form-b6a91",
  storageBucket: "sign-up-form-b6a91.appspot.com",
  messagingSenderId: "933421685324",
  appId: "1:933421685324:web:5215d51a9641bfe5d732e9"
};
firebase.initializeApp(firebaseConfig);

export var auth = firebase.auth()
export var firestore = firebase.firestore();
export var googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export var serverTimeStamp =()=> firebase.firestore.FieldValue.serverTimestamp();
export var storage = firebase.storage().ref()


export default firebase;