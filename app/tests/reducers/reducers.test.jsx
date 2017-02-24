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

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        text: 'walk the dog'
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });

    it('should toggle todo', () => {
      var todo = [
        {
          id: 1,
          text: 'some text',
          completed: false,
          createdAt: 'sdfdsfs',
          completedAt: undefined
        }
      ];

      var action = {
        type: 'TOGGLE_TODO',
        id: 1
      };
      var res = reducers.todosReducer(df(todo), df(action));

      expect(res[0].completed).toEqual(true);
      expect(res[0].completedAt).toNotBe(undefined);
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
