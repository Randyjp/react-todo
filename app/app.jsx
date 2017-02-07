var React = require('react');
var ReactDOM = require('react-dom');
var {Router, Route, IndexRoute, browserHistory} = require('react-router');

var TodoApp = require('TodoApp');
//load foundation
$(document).foundation(); //fire-up foundation

//load app costum css
require('style!css!sass!applicationStyles')

ReactDOM.render(
	<TodoApp/>,
	document.getElementById('app')
);
