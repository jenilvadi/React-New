// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtfFT6K90mGb3CBzVHRxyXKNsiICKHSeQ",
  authDomain: "auth-2bf19.firebaseapp.com",
  projectId: "auth-2bf19",
  storageBucket: "auth-2bf19.firebasestorage.app",
  messagingSenderId: "190219448498",
  appId: "1:190219448498:web:74f39d8374eed5169d59ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider ; 
export { auth, provider };