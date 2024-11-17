// plugins/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAuo6bv2XcguxLWn0src4jMOlsoD3zoQgc",
  authDomain: "savdohubbase.firebaseapp.com",
  projectId: "savdohubbase",
  storageBucket: "savdohubbase.firebasestorage.app",
  messagingSenderId: "736348458631",
  appId: "1:736348458631:web:c42c7b41f74c6b23aa3222",
  measurementId: "G-6104YX3MC5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('db', db); // Сохраняем db в глобальный контекст Nuxt
});
