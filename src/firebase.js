import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBLRq3Gs5issyRwsbjKcziELELZ6kkCCJY",
  authDomain: "disney-clone-736d2.firebaseapp.com",
  projectId: "disney-clone-736d2",
  storageBucket: "disney-clone-736d2.appspot.com",
  messagingSenderId: "654812525542",
  appId: "1:654812525542:web:c4b7ab75fb362dd215dc27",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();


export {auth , provider , storage};
export default db;