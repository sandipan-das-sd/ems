// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider, signInWithPhoneNumber as signInWithPhoneNumberBase } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC3Ycd75NMXnsKXgQ2izonFWNXJrVH0t1g",
  authDomain: "sandipan-react-1.firebaseapp.com",
  databaseURL: "https://sandipan-react-1-default-rtdb.firebaseio.com",
  projectId: "sandipan-react-1",
  storageBucket: "sandipan-react-1.appspot.com",
  messagingSenderId: "703833726025",
  appId: "1:703833726025:web:285e36617168319212b398"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

const signInWithPhoneNumber = async (phoneNumber) => {
  try {
    // Your implementation for signInWithPhoneNumber
    const confirmationResult = await signInWithPhoneNumberBase(auth, phoneNumber);
    return confirmationResult;
  } catch (error) {
    console.error('Error initiating phone authentication:', error.message);
    throw error;
  }
};



export { app, auth, provider, FacebookAuthProvider, GithubAuthProvider, signInWithPhoneNumber };
