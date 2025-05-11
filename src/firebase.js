import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBT3d_oYxr-hxrTY2mqcJbW-mj8Af8yzD8",
  authDomain: "todo-list-project-6d7f3.firebaseapp.com",
  projectId: "todo-list-project-6d7f3",
  storageBucket: "todo-list-project-6d7f3.firebasestorage.app",
  messagingSenderId: "35684246698",
  appId: "1:35684246698:web:5e7378018f8148ab76dcd3",
  databaseURL: 'https://todo-list-project-6d7f3-default-rtdb.europe-west1.firebasedatabase.app/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
