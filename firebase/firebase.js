import firebase from 'firebase'
var firebaseConfig = {
    apiKey:process.env.NEXT_APP_FB_API_KEY ,
    authDomain: process.env.NEXT_APP_FB_AUTH_DOMAIN,
    projectId: process.env.NEXT_APP_FB_PROJECT_ID,
    storageBucket: process.env.NEXT_APP_FB_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_APP_FB_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_APP_FB_APP_ID
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);