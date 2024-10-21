import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyDU5wPOlkHVbZfwVCAfByFFuVxkQWN7xuw",

  authDomain: "test-project-32ae3.firebaseapp.com",

  projectId: "test-project-32ae3",

  storageBucket: "test-project-32ae3.appspot.com",

  messagingSenderId: "696700196724",

  appId: "1:696700196724:web:b351a1140bc2a5b9343e21"

};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


export { app, auth };