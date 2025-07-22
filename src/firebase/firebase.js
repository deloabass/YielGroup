// src/firebase/firebase.js

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Configuration de ton projet Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBhNZYuD8pZ3X8_jk4txTZ2KANaBHG6HVs",
  authDomain: "yielgroup.firebaseapp.com",
  projectId: "yielgroup",
  storageBucket: "yielgroup.firebasestorage.app",
  messagingSenderId: "161360028237",
  appId: "1:161360028237:web:93ead6b3b36c68227ab204",
  measurementId: "G-QGMLL9G17W"
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
