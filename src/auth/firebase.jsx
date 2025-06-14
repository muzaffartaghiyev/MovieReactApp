// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



//* https://firebase.google.com/docs/auth/web/start
//* https://console.firebase.google.com/ => project settings
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyA8KlGZbJjn8o365LP31uX6JdibbLCMmuM",
  authDomain: "moviereactapp-134ee.firebaseapp.com",
  projectId: "moviereactapp-134ee",
  storageBucket: "moviereactapp-134ee.firebasestorage.app",
  messagingSenderId: "1020703556500",
  appId: "1:1020703556500:web:05663c191e04d7fe940581",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth= getAuth(app)