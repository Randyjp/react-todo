import firebase from 'firebase';

try {
  var config = {
     apiKey: "AIzaSyDyG-w7ISYhM0HSP7n5dpQWJcSZGJOIBmU",
     authDomain: "randy-todo-app.firebaseapp.com",
     databaseURL: "https://randy-todo-app.firebaseio.com",
     storageBucket: "randy-todo-app.appspot.com",
     messagingSenderId: "683327424945"
   };

   firebase.initializeApp(config);
} catch (e) {

}

export var fireBaseRef = firebase.database().ref();
export default firebase;
