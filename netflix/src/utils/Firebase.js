// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgb66jHKZMC0AWVgHYc9R36gsxFanrMhE",
  authDomain: "netflix-gpt-cdd10.firebaseapp.com",
  projectId: "netflix-gpt-cdd10",
  storageBucket: "netflix-gpt-cdd10.appspot.com",
  messagingSenderId: "187288001895",
  appId: "1:187288001895:web:e0ba7747a82307602ca3c2",
  measurementId: "G-KMDKL7C5P8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();