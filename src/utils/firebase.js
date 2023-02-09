import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJOnxp2aX9pEu_qD4g9Df3ikNgQAkwgbQ",
  authDomain: "netplix-app-f9e12.firebaseapp.com",
  projectId: "netplix-app-f9e12",
  storageBucket: "netplix-app-f9e12.appspot.com",
  messagingSenderId: "644922867433",
  appId: "1:644922867433:web:a5f306db1c7716356b3a78",
};

const firebaseApp = initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();

export const userAuth = getAuth(firebaseApp);
