import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyA6vthzs68dyAg2oxjNZJ_ooBiKyqzM1AU",
    authDomain: "theprojectworkplace.firebaseapp.com",
    projectId: "theprojectworkplace",
    storageBucket: "theprojectworkplace.appspot.com",
    messagingSenderId: "860130593622",
    appId: "1:860130593622:web:36d747810781e9c03564f7"
  };

  //initialize firebase

  firebase.initializeApp(firebaseConfig)

  //init services  //naming convension is optional
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()
  const projectStorage = firebase.storage()

  // timestamp
  const timestamp = firebase.firestore.Timestamp

  //things to export

  export { projectFirestore, projectAuth, projectStorage, timestamp }

