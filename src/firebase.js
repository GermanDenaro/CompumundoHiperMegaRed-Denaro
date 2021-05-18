import firebase from 'firebase';
import 'firebase/firestore';


const configFirebase = firebase.initializeApp({
    apiKey: "AIzaSyCA9n0RQwM2nsiSVVQoRPgQgpnlG1SQ6yk",
    authDomain: "compumundohipermegared-64e48.firebaseapp.com",
    projectId: "compumundohipermegared-64e48",
    storageBucket: "compumundohipermegared-64e48.appspot.com",
    messagingSenderId: "819925515063",
    appId: "1:819925515063:web:1e72d596d5a10fcfbf38b2"
  });

  export function getFirebase() {
    return configFirebase;
}

export function getFirestore() {
    return firebase.firestore(configFirebase);
}