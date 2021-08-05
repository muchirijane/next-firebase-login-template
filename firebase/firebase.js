import firebase from "firebase";
import "firebase/firestore";

const config = {
  // apiKey: process.env.NEXT_APP_FB_API_KEY,
  // authDomain: process.env.NEXT_APP_FB_AUTH_DOMAIN,
  // projectId: process.env.NEXT_APP_FB_PROJECT_ID,
  // storageBucket: process.env.NEXT_APP_FB_STORAGE_BUCKET,
  // messagingSenderId: process.env.NEXT_APP_FB_MESSAGING_SENDER_ID,
  // appId: process.env.NEXT_APP_FB_APP_ID,
  apiKey: "AIzaSyC8X8YEnQUujfQ7v-3hGBbe2Fdw-w4aZZE",
  authDomain: "login-42e76.firebaseapp.com",
  projectId: "login-42e76",
  storageBucket: "login-42e76.appspot.com",
  messagingSenderId: "1095112905389",
  appId: "1:1095112905389:web:1232fd958689b830c46c24",
};
// Initialize Firebase

const fire = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
//const fire = firebase.initializeApp(config);
export default fire;
console.log(firebase.name);
