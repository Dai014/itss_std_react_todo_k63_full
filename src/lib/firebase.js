import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBWVIFUL9_eXajsAB-WQYY2vrifMhGL3dk",
  authDomain: "fir-project-ff49f.firebaseapp.com",
  projectId: "fir-project-ff49f",
  storageBucket: "fir-project-ff49f.appspot.com",
  messagingSenderId: "722637539737",
  appId: "1:722637539737:web:e038caf24751ec1c966b08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);