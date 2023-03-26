// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcSks6vgK91NZGRNpZ77AuyM-jKJUR3rU",
  authDomain: "meesho-clone-c83ec.firebaseapp.com",
  projectId: "meesho-clone-c83ec",
  storageBucket: "meesho-clone-c83ec.appspot.com",
  messagingSenderId: "671657393058",
  appId: "1:671657393058:web:ef935f526b5cbf715110fb"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
