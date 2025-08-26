// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5sytFy4LdijCSE0IEMaTBtlOoMGRPHFY",
  authDomain: "netflixgpt-508e9.firebaseapp.com",
  projectId: "netflixgpt-508e9",
  storageBucket: "netflixgpt-508e9.firebasestorage.app",
  messagingSenderId: "132309437562",
  appId: "1:132309437562:web:ead98cb0a4b30889cf7fc3",
  measurementId: "G-V8PG3HSN92",
};

// Initialize Firebase 
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();
