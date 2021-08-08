import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDn0bz2vhN6c8QCYjDdmKPfp0k6DwomSps",
  authDomain: "whatsapp-2-ee0d2.firebaseapp.com",
  databaseURL: "https://whatsapp-2-ee0d2-default-rtdb.firebaseio.com",
  projectId: "whatsapp-2-ee0d2",
  storageBucket: "whatsapp-2-ee0d2.appspot.com",
  messagingSenderId: "603989106821",
  appId: "1:603989106821:web:bffff7d16a463995ea49ec",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

export const db = app.firestore();
export const auth = app.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
