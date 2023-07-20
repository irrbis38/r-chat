// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA97Y5iSPCRxbppuOa2FeOnlWqdg3SbbqU",
  authDomain: "r-chat-36db0.firebaseapp.com",
  projectId: "r-chat-36db0",
  storageBucket: "r-chat-36db0.appspot.com",
  messagingSenderId: "253307094176",
  appId: "1:253307094176:web:8af76450464fb64f32b5c5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
