// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBR19vz-GUZrmzWuLXOEFCDMR7Vc1zTWcA",
  authDomain: "ecommerce-f02f6.firebaseapp.com",
  projectId: "ecommerce-f02f6",
  storageBucket: "ecommerce-f02f6.appspot.com",
  messagingSenderId: "94046536828",
  appId: "1:94046536828:web:15bb3ace827a5a50db75f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;