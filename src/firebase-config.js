// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4DpAywt-xsgNQfAKWEPk3zVkFtaMHMY8",
  authDomain: "cpronwheels-2153c.firebaseapp.com",
  projectId: "cpronwheels-2153c",
  storageBucket: "cpronwheels-2153c.appspot.com",
  messagingSenderId: "899748895121",
  appId: "1:899748895121:web:7411d4b6200613a6af2230",
  measurementId: "G-VL72F3RW9V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}