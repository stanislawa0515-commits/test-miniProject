// Import the Firebase apps you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { 
    getFirestore, 
    collection, 
    doc, 
    addDoc, 
    setDoc, 
    getDocs, 
    getDoc, 
    updateDoc, 
    deleteDoc, 
    query, 
    where, 
    orderBy, 
    limit 
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Your web app's Firebase configuration (Updated with your real project keys)
const firebaseConfig = {
    apiKey: "AIzaSyDsbE3cpvyAGIjG82FYXQ0AiAcvvRqQqx4",
    authDomain: "beats-test.firebaseapp.com",
    projectId: "beats-test",
    storageBucket: "beats-test.firebasestorage.app",
    messagingSenderId: "800910726691",
    appId: "1:800910726691:web:f590337fd33f21b863c396"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export instances and Firestore shorthand tracking references
export { 
    db, collection, doc, addDoc, setDoc, getDocs, getDoc, updateDoc, deleteDoc, query, where, orderBy, limit 
};
