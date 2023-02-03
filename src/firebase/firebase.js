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
 // DELETED so they don't get my firebase stuff
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
