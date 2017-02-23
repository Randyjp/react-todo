var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('actions');

export var Todo = React.createClass({
  render: function() {
    var {text, id, completed, createdAt, completedAt, dispatch} = this.props;
    var todoClassName = completed ? 'todo todo__completed' : 'todo';
    var renderDate = () => {
      var message = 'Created ';
      var timestamp = createdAt;

      if (completed) {
        message = "Completed ";
        timestamp = completedAt;
      }
      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };

    return (
      <div className={todoClassName} onClick={()=>{
        // this.props.onToggle(id);
        dispatch(actions.toggleTodo(id));
      }}>
      <div>
        <input type="checkbox" checked={completed}/>
      </div>
      <div>
        <p>{text}</p>
        <p className="todo__subtext">{renderDate()}</p>
      </div>

      </div>
    );
  }
});

//by using connect we get access to things like dispatch
//the default export is what you get when you do: =>
// var somever = require('todo'), in this case the component passed to connect
//But you also want the raw react componet for testing purpuses that's why on top
//we added the keyword export to the component
export default connect()(Todo);
