// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signOut
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore';


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

const googleProvider = new GoogleAuthProvider();
    
    googleProvider.setCustomParameters({
        prompt: "select_account"
    });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    const userDocRef = doc(db, 'users', userAuth.uid)

    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);


    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
    
        try {
            await setDoc(userDocRef, {displayName, email, createdAt, ...additionalInformation,});
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    };

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    createUserWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)