var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');

var {Router, Route, IndexRoute, browserHistory} = require('react-router');

var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI= require('TodoApi');

// import './../playground/firebase/index';

store.subscribe(() => {
	var state = store.getState();
	console.log('New state', state);
	TodoAPI.setTodos(state.todos);
});

var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

//load foundation
$(document).foundation(); //fire-up foundation

//load app costum css
require('style!css!sass!applicationStyles')
///the provier is a component of the react-redux library that lets your componet
//and it's children to have access to the redux store
ReactDOM.render(
	<Provider store={store}>
		<TodoApp/>
	</Provider>,
	document.getElementById('app')
);
