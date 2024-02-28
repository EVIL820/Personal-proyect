// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDN2ABnp_W9fheBFBdKv6S7-UUMUe3F7fg",
    authDomain: "my-react-app-8f143.firebaseapp.com",
    projectId: "my-react-app-8f143",
    storageBucket: "my-react-app-8f143.appspot.com",
    messagingSenderId: "396068863806",
    appId: "1:396068863806:web:1e0f2cc02bf8c5d35c766f",
    measurementId: "G-KJ9WVJGBEV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);