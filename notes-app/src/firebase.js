import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyDQV53_p2SqxO-fyRoLF9cBk6BDgSFNUfs",
  authDomain: "login-firebase-b8017.firebaseapp.com",
  projectId: "login-firebase-b8017",
  storageBucket: "login-firebase-b8017.appspot.com",
  messagingSenderId: "344825520645",
  appId: "1:344825520645:web:a0c8412cee882ac059726c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);

export{ db };