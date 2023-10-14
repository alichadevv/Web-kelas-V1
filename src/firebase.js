// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmxEhoU5pn3EJsSOwj2NKXl2b22mbJ4e0",
  authDomain: "kelas9g-cf642.firebaseapp.com",
  projectId: "kelas9g-cf642",
  storageBucket: "kelas9g-cf642.appspot.com",
  messagingSenderId: "48427967548",
  appId: "1:48427967548:web:6cbca739706c397bb24f39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
