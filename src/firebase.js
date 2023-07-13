// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6IgunrjpZ6uuCf87CLfiyGjJiJaPX-aI",
  authDomain: "userform-c57df.firebaseapp.com",
  projectId: "userform-c57df",
  storageBucket: "userform-c57df.appspot.com",
  messagingSenderId: "234969386135",
  appId: "1:234969386135:web:84557ac0ed8f16d511edd2"
};


// Initialize Firebase

const app= initializeApp(firebaseConfig);
export const database = getDatabase(app);