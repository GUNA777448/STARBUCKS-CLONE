// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your Firebase config — keep this private, btw!
const firebaseConfig = {
  apiKey: "AIzaSyBtMHCufbArY-_aaV7hrNFhNpj-pp9P7wY",
  authDomain: "starbev-s.firebaseapp.com",
  projectId: "starbev-s",
  storageBucket: "starbev-s.appspot.com", // FIXED: storageBucket URL corrected here
  messagingSenderId: "386881028885",
  appId: "1:386881028885:web:d4036568140341932a5f1c",
  measurementId: "G-P30DVSV1BC",
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Optional: Initialize Analytics if you want
const analytics = getAnalytics(app);

// Firestore Database reference
const db = getFirestore(app);

export { app, db };
