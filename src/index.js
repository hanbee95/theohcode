// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5WVi9PIMBNO1B-1O39d0PLGHjbNJIHpc",
  authDomain: "the-oh--code.firebaseapp.com",
  projectId: "the-oh--code",
  storageBucket: "the-oh--code.appspot.com",
  messagingSenderId: "1065793139893",
  appId: "1:1065793139893:web:bb1bc1e0e5dd12898c7afc",
  measurementId: "G-1X9PRFKRFE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);