// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgvhb95CtAMHtUqKLjaaDwUmJDSOwUru0",
  authDomain: "movie-suggestion-41e8d.firebaseapp.com",
  projectId: "movie-suggestion-41e8d",
  storageBucket: "movie-suggestion-41e8d.appspot.com",
  messagingSenderId: "884660424201",
  appId: "1:884660424201:web:204fa9bf1293fc2346f2d8",
  measurementId: "G-ZK1XNRZ185"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export  const auth = getAuth(app);