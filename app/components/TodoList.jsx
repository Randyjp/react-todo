var React = require('react');
//connect let's the componets specify which date from the state they want to access
var {connect} = require('react-redux');
import Todo from 'Todo';
var TodoAPI = require('TodoAPI');

export var TodoList = React.createClass({
  render: function() {
    var {todos, showCompleted, searchText} = this.props;
    var renderTodos = () => {
      
      var filtered = TodoAPI.filterTodos(todos, showCompleted, searchText);

      if (filtered.length === 0) {
        return (
          <p className="container__message">Nothing to do</p>
        );
      }

      return filtered.map((todo) => {
        //when creating several items while going throu a list you need to
        //provide a key or unique identifier for each so react knows how to keep
        //track. Also the ...(spread operator) 'spreads' all the attr from the
        //todo object as props to the Todo component.
        return (
          <Todo key={todo.id} {...todo}/>
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


//this will set the returned object in the props for our components
export default connect(
  (state) => {
    return state;
  }
)(TodoList);
