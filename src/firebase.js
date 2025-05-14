// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRKheFNZVJJ5MTYdvrhWCxXMSy_K4Y4RI",
  authDomain: "classix-nine0one.firebaseapp.com",
  databaseURL: "https://classix-nine0one.firebasestorage.app",
  projectId: "classix-nine0one",
  storageBucket: "kelas9g-cf642.appspot.com",
  messagingSenderId: "710090534009",
  appId: "1:710090534009:web:2c38fa6d8803da61df78a8",
  measurementId: "G-9WNV47LNQB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();