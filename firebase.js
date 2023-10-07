// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBZJed7FwnoVbYSNbtKoH6aLp7ZB9mMjM",
  authDomain: "twitter-clone-694e4.firebaseapp.com",
  projectId: "twitter-clone-694e4",
  storageBucket: "twitter-clone-694e4.appspot.com",
  messagingSenderId: "769817818037",
  appId: "1:769817818037:web:81372966cb13fe80ca5ffc"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
