import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAvO44vLyV6cu2uoKIE_hcxnTSe8ETC-GM",
  authDomain: "restuarent-ec715.firebaseapp.com",
  databaseURL: "https://restuarent-ec715-default-rtdb.firebaseio.com",
  projectId: "restuarent-ec715",
  storageBucket: "restuarent-ec715.appspot.com",
  messagingSenderId: "431024750751",
  appId: "1:431024750751:web:57e9dbebe86a2f7c8462aa",
  measurementId: "G-1827C8DT8Y"
};

// Initialize Firebase
if (!firebase.apps.length ) {
    firebase.initializeApp(firebaseConfig);
   }
  
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  
  const auth = getAuth(app)
  const db = getFirestore(app)
  
  export {auth, db, firebase}
  