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
  
  var loginstatus = 0;
  console.log('beforelogin'+loginstatus);
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  //Google Login
  const googlelogin = () =>{
    if (loginstatus == 0){
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      loginstatus = 1;
      console.log(user);
      console.log(user.displayName);
      console.log('afterlogin'+loginstatus);
      // ...
      
      if (loginstatus == 1){
        // console.log('login complete')
        const logintext = document.getElementById('logintext');
        logintext.innerText = user.displayName;
      }
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
  }

// TODO:: HAN 20221121 select activated ban/pick box
var selectedId = 'blueban1';
const selectingId = async () => {
  console.log(selectedId)
  if (selectedId =='blueban1'){
    selectedId = 'blueban2'    
  }
  else if (selectedId =='blueban2'){
    selectedId = 'blueban3'    
  }
  else if (selectedId =='blueban3'){
    selectedId = 'blueban4'    
  }
  else if (selectedId =='blueban4'){
    selectedId = 'blueban5'    
  }   
  else if (selectedId =='blueban5'){
    selectedId = 'redban1'    
  }  
  else if (selectedId =='redban1'){
    selectedId = 'redban2'    
  }    
  else if (selectedId =='redban2'){
    selectedId = 'redban3'    
  }      
  else if (selectedId =='redban3'){
    selectedId = 'redban4'    
  } 
  else if (selectedId =='redban4'){
    selectedId = 'redban5'    
  } 
  else if (selectedId =='redban5'){
    selectedId = 'bluepick1'    
  }    
  else if (selectedId =='bluepick1'){
    selectedId = 'bluepick2'    
  }     
  else if (selectedId =='bluepick2'){
    selectedId = 'bluepick3'    
  }  
  else if (selectedId =='bluepick3'){
    selectedId = 'bluepick4'    
  }  
  else if (selectedId =='bluepick4'){
    selectedId = 'bluepick5'    
  }    
  else if (selectedId =='bluepick5'){
    selectedId = 'redpick1'    
  }     
  else if (selectedId =='redpick1'){
    selectedId = 'redpick2'    
  }        
  else if (selectedId =='redpick2'){
    selectedId = 'redpick3'    
  }   
  else if (selectedId =='redpick3'){
    selectedId = 'redpick4'    
  }   
  else if (selectedId =='redpick4'){
    selectedId = 'redpick5'    
  }     
  else if (selectedId =='redpick5'){
    selectedId = 'blueban1'    
  }       
}

// TODO:: HAN 20221121 Want to add image with the id var(selectedId) - NOT WORKING!
const openImg = async () => {
  console.log('check point 1')
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
document.getElementsByClassName('sqimg').addEventListener('click', openImg);
document.getElementById('play').addEventListener('click', selectingId);
document.getElementById('logintext').addEventListener('click', googlelogin);
btngooglelogin.addEventListener("click", googlelogin) 
btnLogin.addEventListener("click", loginEmailPassword) 
btnSignup.addEventListener("click", createAccount)
btnLogout.addEventListener("click", logout)

// const auth = getAuth(firebaseApp);
// connectAuthEmulator(auth, "http://localhost:9099");

// monitorAuthState();