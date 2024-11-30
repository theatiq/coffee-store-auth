// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDnkuV8tKQPORorB66n01fBO65ntC2Pgjo",
    authDomain: "coffee-atiqur.firebaseapp.com",
    projectId: "coffee-atiqur",
    storageBucket: "coffee-atiqur.firebasestorage.app",
    messagingSenderId: "459037795732",
    appId: "1:459037795732:web:5c4ab50bd60419bc471b81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);