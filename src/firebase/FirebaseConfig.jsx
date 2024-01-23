// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7iCrfJWCmS-vVs13OnsJezXhYIdKid9A",
  authDomain: "ecommerce-f9ad0.firebaseapp.com",
  projectId: "ecommerce-f9ad0",
  storageBucket: "ecommerce-f9ad0.appspot.com",
  messagingSenderId: "631197245948",
  appId: "1:631197245948:web:d9ae88a5bbc1847ea2d279"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } 