// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZhafuDzLmttLPHWHjDcf2XhzYvQVxk_4",
  authDomain: "netflix-gpt-724.firebaseapp.com",
  projectId: "netflix-gpt-724",
  storageBucket: "netflix-gpt-724.firebasestorage.app",
  messagingSenderId: "969892607113",
  appId: "1:969892607113:web:f18b5fc13869ee5a75c258",
  measurementId: "G-06C7JWJYGX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();