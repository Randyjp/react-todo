var React = require('react');
var ReactDOM = require('react-dom');
//eqivalent to var Router = require('react-router').Route
//good for all the variables
var {Router, Route, IndexRoute, browserHistory} = require('react-router');

//load foundation
$(document).foundation(); //fire-up foundation

//load app costum css
require('style!css!sass!applicationStyles')

ReactDOM.render(
	<p>Boler plate 3</p>,
	document.getElementById('app')
);
