import firebase from 'firebase';

var config = {
   apiKey: "AIzaSyDyG-w7ISYhM0HSP7n5dpQWJcSZGJOIBmU",
   authDomain: "randy-todo-app.firebaseapp.com",
   databaseURL: "https://randy-todo-app.firebaseio.com",
   storageBucket: "randy-todo-app.appspot.com",
   messagingSenderId: "683327424945"
 };
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref(); //reference to the database
//add info
firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0'
  },
  isRunning: true,
  user: {
    name: 'Randy',
    age: 27
  }
});
//update info
// firebaseRef.update({
//   isRunning: false,
//   'app/name': 'Todo Application'
// });

// firebaseRef.child('app').update({
//   name: 'Todo Applicationx'
// }).then(() => {
//   console.log('good');
// }, (e) => {
//   console.log('bad');
// });


//multipath update
// firebaseRef.update({
//   'app/name': 'New Todo',
//   'user/name': 'Andrew'
// });
//
// firebaseRef.child('app').update({
//   name: 'Todo Application'
// });
//
// firebaseRef.child('user').update({
//   name: 'Randy'
// });

//remove info
// firebaseRef.child('app/name').remove();
// firebaseRef.child('app').update({
//   version: '2.0',
//   name: null
// });

// firebaseRef.update({
//   isRunning: null
// });
//
// firebaseRef.child('user/age').remove();


//fetch information form db

// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('Got entire database',snapshot.key, snapshot.val());
// }, (e) => {
//   console.log('Error fetching...', e);
// });

//listen to changes in the db
// var logData = (snapshot) => {
//     console.log('Got value', snapshot.val());
// };
//
// firebaseRef.on('value', logData);
//
// firebaseRef.off(logData);
//
// firebaseRef.update({isRunning: false});


// firebaseRef.child('user').on('value', (snapshot) =>{
//   console.log('Got value', snapshot.val());
// });
//
// firebaseRef.update({
//   'user/name': 'Jose'
// });
//
// firebaseRef.update({
//   'app/name': 'Jose'
// });

//arrays

// var notesRef = firebaseRef.child('notes');
//
// //fires everytime new child is added to the ref
// notesRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
//
// });
//
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
//
// });
//
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
//
// });
// var newNoteRef = notesRef.push({
//   text: 'Walk the cat'
// });
//
// console.log('new id', newNoteRef.key);
 //creates the new item in the current ref and returns it
// newNoteRef.set({
//   text: 'Walk the cat'
// });


// var todosRef = firebaseRef.child('todos');
//
// todosRef.on('child_added', (snapshot) => {
//   console.log('Todo added', snapshot.key, snapshot.val());
// });
//
// todosRef.push({
//   text: 'clean house'
// });
//
// todosRef.push({
//   text: 'Drin beer'
// });
