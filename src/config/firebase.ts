import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBARv-liPCLFaTQFLKGiFPPG0GRfWXOJRs",
  authDomain: "outta-24538.firebaseapp.com",
  databaseURL: "https://outta-24538.firebaseio.com",
  projectId: "outta-24538",
  storageBucket: "outta-24538.appspot.com",
  messagingSenderId: "923759685196",
  appId: "1:923759685196:web:a4c8d02db1a4515215cee9",
  measurementId: "G-5YQ4NHM0CC",
};

if (firebase.apps.length === 0) {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

firebase.auth().useDeviceLanguage();

export default firebase;