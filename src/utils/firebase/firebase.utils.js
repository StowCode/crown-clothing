// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCa_Qq_AmCZyWJGN0qLichfNijewiLCgW0",
  authDomain: "crown-clothing-db-ce186.firebaseapp.com",
  projectId: "crown-clothing-db-ce186",
  storageBucket: "crown-clothing-db-ce186.appspot.com",
  messagingSenderId: "934147564868",
  appId: "1:934147564868:web:33f9ddef1a6997a3cc2311"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
    
    provider.setCustomParameters({
        prompt: "select_account"
    });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);