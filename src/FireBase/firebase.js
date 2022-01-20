import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyBaHNcf2zk73XgCJUeAm6AyjFeRY_Blwfg",
  authDomain: "fan-community-a6b97.firebaseapp.com",
  projectId: "fan-community-a6b97",
  storageBucket: "fan-community-a6b97.appspot.com",
  messagingSenderId: "410060521698",
  appId: "1:410060521698:web:67904eb6a7c46cd4bfdebb",
  measurementId: "G-MXRQBK3QF2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);