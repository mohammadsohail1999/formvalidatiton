// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdD9w1thgMH5b9Ja5-8SevEFCVONqnpho",
  authDomain: "react-auth-ecacc.firebaseapp.com",
  projectId: "react-auth-ecacc",
  storageBucket: "react-auth-ecacc.appspot.com",
  messagingSenderId: "553867946096",
  appId: "1:553867946096:web:8fcc0f38a3e72b0506acb5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth();
export default app;
