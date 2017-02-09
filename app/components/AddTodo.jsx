var React = require('react');

var Addtodo = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();

    var todo = this.refs.todo.value;

    if(todo && todo.length > 0) {
      var handleAddTodo = this.props.handleFormSubmit;
      this.refs.todo.value = "";
      handleAddTodo(todo);
    } else {
      this.refs.todo.focus();
    }
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Wha do you need to to?" ref="todo"/>
          <button className="button expanded" type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = Addtodo;
