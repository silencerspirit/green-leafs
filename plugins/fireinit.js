import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBu6TTr0vRAyb4rR_qjkg3NvuBHNUjEX9U",
  authDomain: "green-leafs.firebaseapp.com",
  databaseURL: "https://green-leafs.firebaseio.com",
  projectId: "green-leafs",
  storageBucket: "green-leafs.appspot.com",
  messagingSenderId: "248764246125"
}

!firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

const db = firebase.firestore()
db.settings({timestampsInSnapshots: true})

export default db