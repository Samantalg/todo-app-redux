import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyB8lZkeyYiXIEbVGmYwSkhfYjD3gdkiEWI",
    authDomain: "react-udemy-course-ddd89.firebaseapp.com",
    projectId: "react-udemy-course-ddd89",
    storageBucket: "react-udemy-course-ddd89.appspot.com",
    messagingSenderId: "408089782614",
    appId: "1:408089782614:web:9b532c7bd6475c1e040ef7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebaseConfig