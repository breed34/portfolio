// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvlvI1f_pbUujQW2nlntvDd_Y9oNsJO9Q",
  authDomain: "portfolio-64a7c.firebaseapp.com",
  projectId: "portfolio-64a7c",
  storageBucket: "portfolio-64a7c.firebasestorage.app",
  messagingSenderId: "425866946910",
  appId: "1:425866946910:web:db81cb97e48ad97aa747cf",
  measurementId: "G-C9XYD3EWCN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
