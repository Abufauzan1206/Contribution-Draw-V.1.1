// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-storage.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAxFPxkSHtOop7H0b3L3IUtfDQJme-A_Ag",
    authDomain: "contribution-draw-v1-1.firebaseapp.com",
    projectId: "contribution-draw-v1-1",
    storageBucket: "contribution-draw-v1-1.firebasestorage.app",
    messagingSenderId: "444928307199",
    appId: "1:444928307199:web:11a37732f91dfa0e84c1ca",
    measurementId: "G-RH496ETR63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export { app };

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
