// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXTtEA88NW1C80xQG_loYZAslNS0p6k90",
  authDomain: "exemplo-1-1814b.firebaseapp.com",
  databaseURL: "https://exemplo-1-1814b-default-rtdb.firebaseio.com",
  projectId: "exemplo-1-1814b",
  storageBucket: "exemplo-1-1814b.appspot.com",
  messagingSenderId: "824077129226",
  appId: "1:824077129226:web:560bdfa517a3e91e5f31f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth};