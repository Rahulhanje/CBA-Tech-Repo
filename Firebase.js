// Import the functions you need from the SDKs you need
// import React from 'react';
 import {initializeApp} from 'firebase/app';
 import {getAuth, GoogleAuthProvider} from 'firebase/auth';

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const firebaseConfig = {
  apiKey: "AIzaSyAkUZDyyslFWxaJGQBxxLWcSb5NKr49978",
  authDomain: "auth-react-app-4a5cb.firebaseapp.com",
  projectId: "auth-react-app-4a5cb",
  storageBucket: "auth-react-app-4a5cb.firebasestorage.app",
  messagingSenderId: "816062435623",
  appId: "1:816062435623:web:f1007d5f767f85e85b1902",
  measurementId: "G-NM6YNCST6V"
};
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider};




// const firebaseConfig = {
//   apiKey: "AIzaSyD-EXAMPLE1234567890",
//   authDomain: "your-project-id.firebaseapp.com",
//   projectId: "your-project-id",
//   storageBucket: "your-project-id.appspot.com",
//   messagingSenderId: "1234567890",
//   appId: "1:1234567890:web:abcdef123456"
// };


