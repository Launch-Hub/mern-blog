// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-motivir.firebaseapp.com",
  projectId: "mern-blog-motivir",
  storageBucket: "mern-blog-motivir.firebasestorage.app",
  messagingSenderId: "904790347607",
  appId: "1:904790347607:web:9a4411a8ecc244a381b812",
  measurementId: "G-FLQW6WKRZ0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Currently not in use
export const analytics = getAnalytics(app);
