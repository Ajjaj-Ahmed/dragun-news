// Import the functions you need from the SDKs you need

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9_DpKDLwlVhvMrmYSezKn_rmL23-ou90",
  authDomain: "dragon-news-auth-a0821.firebaseapp.com",
  projectId: "dragon-news-auth-a0821",
  storageBucket: "dragon-news-auth-a0821.firebasestorage.app",
  messagingSenderId: "367370280546",
  appId: "1:367370280546:web:481b28d1c57bcaf900fb3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);