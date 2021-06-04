import firebase from 'firebase/app';
import 'firebase/database';
import { exp } from 'react-native/Libraries/Animated/src/Easing';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyCYIezoOE6ps1wjMuxKID-smhmlNPeZD5Y",
    authDomain: "suapresenca-3a3fe.firebaseapp.com",
    projectId: "suapresenca-3a3fe",
    storageBucket: "suapresenca-3a3fe.appspot.com",
    messagingSenderId: "952841950696",
    appId: "1:952841950696:web:d8850d79b30abb5050c05d",
    measurementId: "G-NEHPF7E0YV"
  };

  if(!firebase.apps.length){
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
export default firebase