import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

export class AddTodo extends React.Component {
  constructor () {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit (e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var todo = this.refs.todo.value;

    if(todo && todo.length > 0) {
      this.refs.todo.value = "";
      dispatch(actions.startAddTodo(todo));
    } else {
      this.refs.todo.focus();
    }
  }
  render () {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Wha do you need to to?" ref="todo"/>
          <button className="button expanded" type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
}

export default connect()(AddTodo);
