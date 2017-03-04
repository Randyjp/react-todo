import firebase, {firebaseRef, githubProvider} from 'app/firebase/';
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
    var todoRef = firebaseRef.child('todos').push(todo);
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

export var startAddTodos = () => {
  return(dispatch, getState) => {
    return firebaseRef.child('todos').once('value').then((snapshot) => {
      var todosFirebase = snapshot.val() || {};
      var todoKeys = Object.keys(todosFirebase);

      var todos = todoKeys.map((key) => {
        return {
          ...todosFirebase[key],
          id: key
        }
      });

      dispatch(addTodos(todos));
    }, (e) => {
      console.log("Error happened", e);
    });
  }
};

export var updateTodo = (id, updates) => {
  return {
    type: 'UPDATE_TODO',
    id,
    updates
  };
};

export var startToggleTodo = (id, completed) => {
  return (dispatch, getState) => {
    var todoRef = firebaseRef.child(`todos/${id}`);
    var updates = {
      completed,
      completedAt: completed ? moment().unix() : null
    };

    //allows to the chain in the test(returning)
    return todoRef.update(updates).then(() =>{
      dispatch(updateTodo(id, updates));
    });
  };
};

export var login = (uid) => {
  return {
    type: 'LOGIN',
    uid
  };
};

export var logout = () => {
  return {
    type: 'LOGOUT'
  };
};

export var startLogin = () => {
  return (dispatch, getState) => {
    return firebase.auth().signInWithPopup(githubProvider).then((result) => {
      console.log('Auth worked!', result);
    }, (error) => {
      console.log('Unable to auth', error);
    });
  };
};

export var startLogout = () => {
  return (dispatch, getState) => {
    return firebase.auth().signOut().then(() => {
      console.log('Logged out!');
    });
  };
};
