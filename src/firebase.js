// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdb1Fj8lGfKlJ5iqucVbBFa5xy8GcHZt8",
  authDomain: "start-bevs.firebaseapp.com",
  projectId: "start-bevs",
  storageBucket: "start-bevs.firebasestorage.app",
  messagingSenderId: "349042129566",
  appId: "1:349042129566:web:048597dcb8a6e1fe86998f",
  measurementId: "G-MFKZY4F60V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, analytics, db, auth };
