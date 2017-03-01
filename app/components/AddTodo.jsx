var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var todo = this.refs.todo.value;

    if(todo && todo.length > 0) {
      this.refs.todo.value = "";
      dispatch(actions.startAddTodo(todo));
    } else {
      this.refs.todo.focus();
    }
  },
  render: function () {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Wha do you need to to?" ref="todo"/>
          <button className="button expanded" type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
});

export default connect()(AddTodo);
