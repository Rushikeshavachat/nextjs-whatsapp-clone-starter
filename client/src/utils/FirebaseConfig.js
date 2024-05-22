// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getAuth} from "firebase/auth"
// const firebaseConfig = {
//   apiKey: "AIzaSyBXrQaoY2trfYht8oUdl88Jg5UibdWpVMU",
//   authDomain: "whatsapp-use.firebaseapp.com",
//   projectId: "whatsapp-use",
//   storageBucket: "whatsapp-use.appspot.com",
//   messagingSenderId: "718654106451",
//   appId: "1:718654106451:web:385dcedd78b8802acacfa6",
//   measurementId: "G-MWEFZJ3WNC"
// };

// // Initialize Firebase
// const app=initializeApp(firebaseConfig);
// export const firebaseAuth=getAuth(app)
// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXrQaoY2trfYht8oUdl88Jg5UibdWpVMU",
  authDomain: "whatsapp-use.firebaseapp.com",
  projectId: "whatsapp-use",
  storageBucket: "whatsapp-use.appspot.com",
  messagingSenderId: "718654106451",
  appId: "1:718654106451:web:385dcedd78b8802acacfa6",
  measurementId: "G-MWEFZJ3WNC"
};

// Initialize Firebase
const app=initializeApp(firebaseConfig);
export const firebaseAuth=getAuth(app)