import firebase, {fireBaseRef} from 'app/firebase/';
import moment from 'moment';

export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  };
};

export var addTodos = (todos) => {
    return {
      type: 'ADD_TODOS',
      todos
    };
};

export var startAddTodo = (text) => {
  return (dispatch, getState) => {
    //no id needed, firebase takes care of it
    var todo = {
        text,
        completed: false,
        createdAt: moment().unix(),
        completedAt: null
    };
    //push data to firebase
    var todoRef = fireBaseRef.child('todos').push(todo);
    //added to the redux store so the application can render it
    return todoRef.then(() => {
      //pass it to the addTodo action, this one renders it to the DOM
      dispatch(addTodo({
        ...todo,
        id: todoRef.key
      }));
    });
  };
};

export var addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  };
};

export var toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};
