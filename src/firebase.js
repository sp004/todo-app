import firebase from "firebase/compat/app"
import "firebase/compat/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfLxOEUCA06_ET3P4tYLhDB-lR3gEpx3Y",
  authDomain: "todo-app-2a321.firebaseapp.com",
  projectId: "todo-app-2a321",
  storageBucket: "todo-app-2a321.appspot.com",
  messagingSenderId: "831027498897",
  appId: "1:831027498897:web:8f9224c1f9fbbe82525430"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore()

export default db;