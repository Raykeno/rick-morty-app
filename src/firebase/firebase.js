import { initializeApp } from 'firebase/app';
import {
    getFirestore,
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    serverTimestamp,
    doc,
    orderBy,
    limit,
    onSnapshot,
    query,
    where,
  } from 'firebase/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
const fbConfig = {
    apiKey: "AIzaSyBfN2Vin9GflVGi3bWD3IXf5cAcf6_7nJ8",
    authDomain: "react-rick-morty-b0b48.firebaseapp.com",
    projectId: "react-rick-morty-b0b48",
    storageBucket: "react-rick-morty-b0b48.appspot.com",
    messagingSenderId: "771941146950",
    appId: "1:771941146950:web:e4c24dbf9d018683008547"
};
  
const app = initializeApp(fbConfig);
const db = getFirestore(app);

export {
    db,
getAuth,
createUserWithEmailAndPassword,
updateProfile,
onAuthStateChanged,
signInWithEmailAndPassword,
signOut,
getFirestore,
collection,
getDocs,
addDoc,
deleteDoc,
serverTimestamp,
doc,
orderBy,
limit,
onSnapshot,
query,
where
}