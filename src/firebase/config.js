import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBxTDiPZN7ZAXzBph5ad6Uwr4xvlqAOzy0",
  authDomain: "fira-1ea50.firebaseapp.com",
  databaseURL: "https://fira-1ea50.firebaseio.com",
  projectId: "fira-1ea50",
  storageBucket: "fira-1ea50.appspot.com",
  messagingSenderId: "288603650104",
  appId: "1:288603650104:web:080326e13043f9e09fcecd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };