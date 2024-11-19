import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHYRmWJzyFJ3-aqp70mYUp58OdCq2J5sk",
  authDomain: "almacenamientto-d5fcb.firebaseapp.com",
  projectId: "almacenamientto-d5fcb",
  storageBucket: "almacenamientto-d5fcb.firebasestorage.app",
  messagingSenderId: "760837928412",
  appId: "1:760837928412:web:44cb0d9b0108cb99654b19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };