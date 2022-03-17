// Import the functions you need from the SDKs you need
const{ initializeApp }= require("firebase/app");
const{ getAnalytics }= require("firebase/analytics");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB98u1m1ZGXCMPjSRRZKwzykCYaTQ8merk",
  authDomain: "twitter-clone-mern-a7d11.firebaseapp.com",
  projectId: "twitter-clone-mern-a7d11",
  storageBucket: "twitter-clone-mern-a7d11.appspot.com",
  messagingSenderId: "474492362638",
  appId: "1:474492362638:web:91b3b4128998685f9e8edf",
  measurementId: "G-NDERGDSYNV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);