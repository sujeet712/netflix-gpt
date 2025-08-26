// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFT5NALX6BGeA8SLtCAofcXC8HkRhBuCk",
  authDomain: "netflix-gpt-17cd7.firebaseapp.com",
  projectId: "netflix-gpt-17cd7",
  storageBucket: "netflix-gpt-17cd7.firebasestorage.app",
  messagingSenderId: "410129256557",
  appId: "1:410129256557:web:f240fe6b1bc032deb56f64",
  measurementId: "G-7KDCF918PM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
