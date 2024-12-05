// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1BaxTX0AOZUawD9v37xwUvedelsPahGU",
  authDomain: "movie-sphere-e592c.firebaseapp.com",
  projectId: "movie-sphere-e592c",
  storageBucket: "movie-sphere-e592c.firebasestorage.app",
  messagingSenderId: "26519504205",
  appId: "1:26519504205:web:5dbafdbb8777995547a304"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export default app;