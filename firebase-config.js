// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "<AIzaSyCvQf7OsKHyU0iDVTNVHtAM39iGqGaJBmc>",
    authDomain: "home-control-system-65102.firebaseapp.com",
    databaseURL: "https://home-control-system-65102-default-rtdb.firebaseio.com",
    projectId: "home-control-system-65102>",
    storageBucket: "home-control-system-65102.firebasestorage.app",
    messagingSenderId: "978357498053",
    appId: "1:978357498053:web:75f80980ab25d6aad480ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Export database
export { database };