var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
  render: function() {
    var {todos} = this.props;
    var renderTodos = () => {
      return todos.map((todo) => {
        //when creating several items while going throu a list you need to
        //provide a key or unique identifier for each so react knows how to keep
        //track. Also the ...(spread operator) 'spreads' all the attr from the
        //todo object as props to the Todo component.
        return (
          <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
        );
      });
    };
    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
});

module.exports = TodoList;
