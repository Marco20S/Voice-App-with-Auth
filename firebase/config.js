// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage, ref} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD55i7GDozkAWireMAXF5KXzT1rzyQ2_0w",
  authDomain: "audio-recorder-47614.firebaseapp.com",
  projectId: "audio-recorder-47614",
  storageBucket: "audio-recorder-47614.appspot.com",
  messagingSenderId: "959691542159",
  appId: "1:959691542159:web:841d0c75dd15de61c26afa",
  measurementId: "G-WEPHBBT75F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app)