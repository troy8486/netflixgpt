// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBufOnmpG8y8F9Hpw7xDO_ht8pvYfgHH8k",
  authDomain: "netflixgpt-e6c4a.firebaseapp.com",
  projectId: "netflixgpt-e6c4a",
  storageBucket: "netflixgpt-e6c4a.appspot.com",
  messagingSenderId: "656064927612",
  appId: "1:656064927612:web:0616e1cf93a402e0ba76f9",
  measurementId: "G-S4YRG5G4Q8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



export const auth = getAuth();
