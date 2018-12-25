import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBVSlh3v30hv98E0zv3oAkcTPLb81D-EJE",
    authDomain: "chat-app-57701.firebaseapp.com",
    databaseURL: "https://chat-app-57701.firebaseio.com",
    projectId: "chat-app-57701",
    storageBucket: "chat-app-57701.appspot.com",
    messagingSenderId: "257440356129"
  };
  
  export const firebaseApp = firebase.initializeApp(config);
  export const firebaseAuth = firebase.auth()
  export const firebaseRef = firebase.database()
  export const firebaseStorage = firebase.storage().ref()