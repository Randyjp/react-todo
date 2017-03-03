var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');

var {Router, Route, IndexRoute, hashHistory} = require('react-router');


var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI= require('TodoAPI');
import Login from 'Login';
import TodoApp from 'TodoApp';

store.dispatch(actions.startAddTodos());

//load foundation
$(document).foundation(); //fire-up foundation

//load app costum css
require('style!css!sass!applicationStyles')
///the provier is a component of the react-redux library that lets your componet
//and it's children to have access to the redux store
ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path='/'>
				<Route path="todos" component={TodoApp}/>
				<IndexRoute component={Login}/>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
);
