import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDA1-HTM7v3n0i9V7_STRbPpAlsFzK3ur0",
    authDomain: "react-clone-new.firebaseapp.com",
    projectId: "react-clone-new",
    storageBucket: "react-clone-new.appspot.com",
    messagingSenderId: "896330213891",
    appId: "1:896330213891:web:d4861d270ec25e209c3c36",
    measurementId: "G-BG9MER7R9M"
  };


  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);

export {auth};