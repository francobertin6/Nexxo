
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAshfULtyN8fXlkbqVTgXSf8g8cPqSFh-k",
  authDomain: "nexxocompany.firebaseapp.com",
  projectId: "nexxocompany",
  storageBucket: "nexxocompany.appspot.com",
  messagingSenderId: "435000753704",
  appId: "1:435000753704:web:d895405a8bf204d3d37f1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const DB = getFirestore(app);