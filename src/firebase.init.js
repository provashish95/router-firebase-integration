// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCKHu-TbhAvTFwlGyEuDjbVh_9KS0bfzfg",
    authDomain: "router-firebase-integrat-5ccc1.firebaseapp.com",
    projectId: "router-firebase-integrat-5ccc1",
    storageBucket: "router-firebase-integrat-5ccc1.appspot.com",
    messagingSenderId: "345246396609",
    appId: "1:345246396609:web:3e1b023c2932f751d9a440"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;