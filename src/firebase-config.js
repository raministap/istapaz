// Firebase konfiqurasiyası
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, query, where, orderBy, doc, deleteDoc, updateDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCiAg-P6g7MDv-xPsraWjHPmUdg-wGYWJU",
  authDomain: "istap-az.firebaseapp.com",
  projectId: "istap-az",
  storageBucket: "istap-az.firebasestorage.app",
  messagingSenderId: "1014728151709",
  appId: "1:1014728151709:web:8854f5e32d9812c2bffa74",
  measurementId: "G-PRPX39KNNW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export
export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, collection, addDoc, getDocs, query, where, orderBy, doc, deleteDoc, updateDoc, getDoc };
