var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {hashHistory} = require('react-router');

var actions = require('actions');
var store = require('configureStore').configure();
import firebase from 'app/firebase/';
import router from 'app/router/';

firebase.auth().onAuthStateChanged((user) => {
	if (user) {
		hashHistory.push('/todos');
	} else {
		hashHistory.push('/');
	}
});

store.dispatch(actions.startAddTodos());

//load foundation
$(document).foundation(); //fire-up foundation

//load app costum css
require('style!css!sass!applicationStyles')


///the provier is a component of the react-redux library that lets your componet
//and it's children to have access to the redux store
ReactDOM.render(
	<Provider store={store}>
		{router}
	</Provider>,
	document.getElementById('app')
);
