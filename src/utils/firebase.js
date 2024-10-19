// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDe73VlVBf45y185mppVXMHSLYnmwZhQNs",
  authDomain: "netflixgpt-f326e.firebaseapp.com",
  projectId: "netflixgpt-f326e",
  storageBucket: "netflixgpt-f326e.appspot.com",
  messagingSenderId: "851109789814",
  appId: "1:851109789814:web:f51bb64557f08eee349f57",
  measurementId: "G-3CNE7NSNZL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
