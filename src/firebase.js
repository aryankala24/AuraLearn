// src/firebase.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";

// ✅ Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaoOqDzuLNDsmq2KsyBoIR7S83SIV7OVw",
  authDomain: "signin-7869c.firebaseapp.com",
  projectId: "signin-7869c",
  storageBucket: "signin-7869c.appspot.com", // ⚠️ corrected from "firebasestorage.app"
  messagingSenderId: "332302288482",
  appId: "1:332302288482:web:f1d947f6d70d84ef89733b",
  measurementId: "G-79VYCNQ1ZW"
};

// ✅ Initialize Firebase App
const app = initializeApp(firebaseConfig);

// ✅ Initialize Firebase Authentication
const auth = getAuth(app);

// ✅ Set up providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

// ✅ Export everything you need
export {
  auth,
  googleProvider,
  githubProvider,
  signInWithPopup,
};
