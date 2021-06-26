import firebase from 'firebase/app';
import 'firebase/firestore'

firebase.initializeApp({
    apiKey: "AIzaSyCCgofO7VU0b8PeeAOL63N12uMUFS-TMkY",
    authDomain: "ionic-mindly.firebaseapp.com",
    projectId: "ionic-mindly",
    storageBucket: "ionic-mindly.appspot.com",
    messagingSenderId: "1097216898665",
    appId: "1:1097216898665:web:382f47e95234b9a3e694f8",
    measurementId: "G-J43DH34959"
});

const db = firebase.firestore(); // Our firestore DB

export default db;