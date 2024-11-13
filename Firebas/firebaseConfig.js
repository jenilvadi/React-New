// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXYmGEFFTF2FLTpkMHZn0RkHcY3_CgSRQ",
  authDomain: "react1-aa1e1.firebaseapp.com",
  projectId: "react1-aa1e1",
  storageBucket: "react1-aa1e1.appspot.com",
  messagingSenderId: "134146334982",
  appId: "1:134146334982:web:045497d5621dda3d713e87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export { auth }
export {db}