var React = require('react');
var TodoList = require('TodoList');
var Addtodo = require('Addtodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'clean the yard'
        },
        {
          id: 3,
          text: 'Walk the cat'
        },
        {
          id: 4,
          text: 'find meaning in life'
        }
      ]
    };
  },
  handleAddTodo: function (text) {
    alert('new todo:' + text);
  },
  handleSearch: function(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <Addtodo handleFormSubmit={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
