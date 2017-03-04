var expect = require('expect');
//deep freeze check that our functions don't update the params passed to them
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('toggleShowCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });

  describe('authReducer', () => {
    it('should store uid in login', () => {
      const action = {
        type: 'LOGIN',
        uid: 'jflkfjql0924902034'
      };

      var res = reducers.authReducer(df({}), df(action));
      expect(res.uid).toEqual(action.uid);
    });

    it('should remove the auth on logout', () => {
      const action = {
        type: 'LOGOUT'
      };

      var state = {
        uid: 'dsfnlkdsfjsldkfds'
      };

      var res = reducers.authReducer(df(state), df(action));
      expect(res).toEqual({});
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        todo: {
          id: 'abc123',
          text: 'Something to do',
          completed: false,
          createdAt: 92384275
        }
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });

    it('should update todo', () => {
      var todo = [
        {
          id: 1,
          text: 'some text',
          completed: false,
          createdAt: 'sdfdsfs',
          completedAt: undefined
        }
      ];
      var updates = {
        completed: false,
        completedAt: null
      };
      var action = {
        type: 'UPDATE_TODO',
        id: todo[0].id,
        updates
      };
      var res = reducers.todosReducer(df(todo), df(action));

      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(todo[0].text);
    });

    it('should add exisiting todos', () => {
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

      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    });
  });
});
