
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBNtbDIPBFb-hNs7dlW9BMj2XmKUvbe8A8",
  authDomain: "reactjsauth-4d62e.firebaseapp.com",
  projectId: "reactjsauth-4d62e",
  storageBucket: "reactjsauth-4d62e.firebasestorage.app",
  messagingSenderId: "442696700334",
  appId: "1:442696700334:web:62c0483386d8bd32c0383f",
  measurementId: "G-J2CLZVZXDK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);