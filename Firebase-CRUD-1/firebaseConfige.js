// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAp7QIlNUS-MHlXZPl-tT_kN4N6Rz9K0II",
  authDomain: "fir-2-6357b.firebaseapp.com",
  projectId: "fir-2-6357b",
  storageBucket: "fir-2-6357b.firebasestorage.app",
  messagingSenderId: "345753596721",
  appId: "1:345753596721:web:9914f2fb466a5a6730b610",
  measurementId: "G-SQBF9X397M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const db = getFirestore(app)

export {auth,db}