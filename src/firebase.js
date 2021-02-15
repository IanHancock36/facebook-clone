 import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDdtY2HlZTyjm2kWlykMBPOWkikDyX1e-A",
 authDomain: "facebook-clone-7b522.firebaseapp.com",
  projectId: "facebook-clone-7b522",
 storageBucket: "facebook-clone-7b522.appspot.com",
  messagingSenderId: "501780403929",
  appId: "1:501780403929:web:f6c2b25ca866b1b63b10c8",
 measurementId: "G-S11VPD0B7Y",
};


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider };
export default db; 