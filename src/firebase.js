import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCpkPf1TjWVzrfHEv1Ejfl_Oj2mSpdrJAI",
  authDomain: "one-store-e1dc7.firebaseapp.com",
  projectId: "one-store-e1dc7",
  storageBucket: "one-store-e1dc7.appspot.com",
  messagingSenderId: "311759247746",
  appId: "1:311759247746:web:e8f31d18a8ff3e1d93579b",
  measurementId: "G-FT65T9G1GB"
};

const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
export default app;