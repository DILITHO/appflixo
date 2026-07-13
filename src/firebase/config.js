import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAsGVKaGzoNBkjvXVt1sGYJ6vtGuaEZjGU",
  authDomain: "zonapeliculas-733c6.firebaseapp.com",
  projectId: "zonapeliculas-733c6",
  storageBucket: "zonapeliculas-733c6.firebasestorage.app",
  messagingSenderId: "757398738622",
  appId: "1:757398738622:web:ce773909ab2d19a04a38ef",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);