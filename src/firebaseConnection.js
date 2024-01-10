import firebase from 'firebase/app';
import 'firebase/database';
import { exp } from 'react-native/Libraries/Animated/src/Easing';
import 'firebase/auth';
import 'dotenv/config';


let firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID,
    measurementId: process.env.measurementId
  };

  if(!firebase.apps.length){
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
export default firebase