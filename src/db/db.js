
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDs6msCLmVpOHWyIYjGsaQSDjw4tMcvr2M",
  authDomain: "ecommerce-80c0a.firebaseapp.com",
  projectId: "ecommerce-80c0a",
  storageBucket: "ecommerce-80c0a.appspot.com",
  messagingSenderId: "267931380087",
  appId: "1:267931380087:web:a7c201ed5cd32fd97b1972"
};


initializeApp(firebaseConfig);

const db = getFirestore()

export default db