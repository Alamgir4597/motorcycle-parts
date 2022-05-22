// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDsRNNFT15DtsvsCryN7ZF4FKdcTygFa3c",
    authDomain: "assignment-12-b0eda.firebaseapp.com",
    projectId: "assignment-12-b0eda",
    storageBucket: "assignment-12-b0eda.appspot.com",
    messagingSenderId: "655232821484",
    appId: "1:655232821484:web:77e481b8d28a91d2395dc9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;