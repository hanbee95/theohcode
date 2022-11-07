// import './styles.css';
import { 
  hideLoginError, 
  showLoginState, 
  showLoginForm, 
  showApp, 
  showLoginError, 
  btnLogin,
  btnSignup,
  btnLogout
} from './ui.js'

import { initializeApp } from  "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { 
  getAuth,
  onAuthStateChanged, 
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  connectAuthEmulator,
  GoogleAuthProvider,
  signInWithPopup
} from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js';


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
  const provider = new GoogleAuthProvider();
  //Google Login
  const googlelogin = () =>{
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);
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
    

  }
  

// Login using email/password
const loginEmailPassword = async () => {
    
  const loginEmail = txtEmail.value
  const loginPassword = txtPassword.value

  // step 1: try doing this w/o error handling, and then add try/catch
//   await signInWithEmailAndPassword(auth, loginEmail, loginPassword)

  //step 2: add error handling
  try {
    await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    console.log('check point 1')
  }
  catch(error) {
    console.log(`There was an error: ${error}`)
    showLoginError(error)
  }
}

// Create new account using email/password
const createAccount = async () => {
  const email = txtEmail.value
  const password = txtPassword.value

  try {
    await createUserWithEmailAndPassword(auth, email, password)
  }
  catch(error) {
    console.log(`There was an error: ${error}`)
    showLoginError(error)
  } 
}

// Monitor auth state
const monitorAuthState = async () => {
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log(user)
      showApp()
      showLoginState(user)

      hideLoginError()
      hideLinkError()
    }
    else {
      showLoginForm()
      lblAuthState.innerHTML = `You're not logged in.`
    }
  })
}

// Log out
const logout = async () => {
  await signOut(auth);
}
btngooglelogin.addEventListener("click", googlelogin) 
btnLogin.addEventListener("click", loginEmailPassword) 
btnSignup.addEventListener("click", createAccount)
btnLogout.addEventListener("click", logout)

// const auth = getAuth(firebaseApp);
// connectAuthEmulator(auth, "http://localhost:9099");

// monitorAuthState();