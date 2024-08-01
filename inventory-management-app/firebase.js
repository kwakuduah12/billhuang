// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLQy81o3tvqvWRun2vP5K5SWeK2tE4pF0",
  authDomain: "inventory-management-app-5e106.firebaseapp.com",
  projectId: "inventory-management-app-5e106",
  storageBucket: "inventory-management-app-5e106.appspot.com",
  messagingSenderId: "1076283803111",
  appId: "1:1076283803111:web:ffc68ff4be99a982602942",
  measurementId: "G-JT1R3LTG0N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
