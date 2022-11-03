// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { deleteObject, getDownloadURL, getStorage, uploadBytes, uploadString } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-storage.js";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js';
import { getFirestore, addDoc, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js';
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
const auth = getAuth(app);
console.log('check point 2')
//HAN 20221101 try for google login ability
const provider = new GoogleAuthProvider();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
// function googleSignout() {
//   firebase.auth().signOut()
 
//   .then(function() {
//      console.log('Signout Succesfull')
//   }, function(error) {
//      console.log('Signout Failed')  
//   });
// }


onAuthStateChanged(auth, user => {
  if(user != null){
    console.log('logged in!');
  } else{
    console.log('No user');
  }
});
const db = getFirestore(app);

try {
  const docRef = await addDoc(collection(db, "product"), {
    first: "Alan",
    middle: "Mathison",
    last: "Turing",
    born: 1912
  });

  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}

const querySnapshot = await getDocs(collection(db, "product"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});
