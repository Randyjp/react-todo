import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
var expect = require('expect');
import firebase, {firebaseRef} from 'app/firebase/';

var actions = require('actions');

var createMockStore = configureMockStore([thunk]);

describe('actions', () => {
  it('should generate login action', () => {
      var action = {
        type: 'LOGIN',
        uid: 'll222333ffftt'
      };

      var res = actions.login(action.uid);

      expect(res).toEqual(action);
  });

  it('should generate logout action', () => {
      var action = {
        type: 'LOGOUT',
      };

      var res = actions.logout(action.uid);

      expect(res).toEqual(action);
  });

  it('should generate search text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    };
    var res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('should generate add todo action', () => {
    var action = {
      type: 'ADD_TODO',
      todo: {
        id: 'sdfdsf',
        text: 'sdjkjfsdf',
        completed: false,
        createdAt: 0
      }
    };
    var res = actions.addTodo(action.todo);

    expect(res).toEqual(action);
  });
  //done is for async test
  it('should create todo and dispatch ADD_TODO', (done) => {
    const store = createMockStore({});
    const todoText = 'My todo item';

    store.dispatch(actions.startAddTodo(todoText)).then(() => {
      const actions = store.getActions();//array of all actions fired in our mock store
      expect(actions[0]).toInclude({
        type: 'ADD_TODO'
      });
      expect(actions[0].todo).toInclude({
        text: todoText
      });
      done(); //tells karma test is done
    }).catch(done);
  });

  it('should generate add todos action object', () => {
    var todos = [{
      id: '111',
      text: 'anuything',
      completed: false,
      completedAt: undefined,
      createdAt: 330000
    }];

    var action = {
      type: 'ADD_TODOS',
      todos
    };
    var res = actions.addTodos(todos);

    expect(res).toEqual(action);
  });

  it('should generate toggle show completed action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    var res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  });

  it('should generate update todo action', () => {
    var action = {
      type: 'UPDATE_TODO',
      id: '2',
      updates: {completed: false}
    };
    var res = actions.updateTodo(action.id, action.updates);

    expect(res).toEqual(action);
  });

  describe('Test with firebase todos', () => {
    var testTodoRef;
    //mocha code that it is used to set something before tests
    beforeEach((done) => {
      var todosRef = firebaseRef.child('todos');

      todosRef.remove().then(() => {
        testTodoRef = firebaseRef.child('todos').push();

        return testTodoRef.set({
          text: 'Something to do',
          completed: false,
          createdAt: 23453453
        })
      })
      .then(() => done())
      .catch(done);
    });

    afterEach((done) => {
      testTodoRef.remove().then(() => done());
    });

    it('should toggle todo and dispatch UPDATE_TODO actions', (done) => {
      const store = createMockStore();
      const action = actions.startToggleTodo(testTodoRef.key, true);

        store.dispatch(action).then(() => {
          const mockActions = store.getActions();

          expect(mockActions[0]).toInclude({
            type: 'UPDATE_TODO',
            id: testTodoRef.key,
          });

          expect(mockActions[0].updates).toInclude({
            completed: true
          });

          expect(mockActions[0].updates.completedAt).toExist();
          done();
        }, done);
      });

      it('should get todos and dispatch ADD_TODOS actionss', (done) => {
        const store = createMockStore({});
        const action = actions.startAddTodos();

        store.dispatch(action).then(() => {
          const mockActions = store.getActions();

          expect(mockActions[0].type).toEqual('ADD_TODOS');
          expect(mockActions[0].todos.length).toEqual(1);
          // expect(mockActions[0].todos[0].text).toEqual('sadsa');
          expect(mockActions[0].todos[0].text).toEqual('Something to do');
          done();
        }, done)
      });
  });
});
