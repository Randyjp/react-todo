var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('todoAPI', () => {
  //mocha lifecycle methods that runs before each test
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      var todos = [{
        id: 1,
        text: "hola",
        completed: false
      }];

      TodoAPI.setTodos(todos);

      var  actualTodos = JSON.parse(localStorage.getItem('todos'));
      expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid todos array', () => {
      var badTodos = "fjsadjflksdhfk";

      TodoAPI.setTodos(badTodos);

      expect(localStorage.getItem('todo')).toBe(null);
    });
  });

  describe('getTodos', () => {
    it('should return empty array for bad localStorage data', () => {
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it('should return todso for valid localStorage data', () => {
      var todos = [{
        id: 1,
        text: "hola",
        completed: false
      }];
      localStorage.setItem('todos', JSON.stringify(todos));

      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual(todos);
    });
  });

  describe('filterTodos', () => {
    var todos =
    [
      {
        id: 1,
        text: "hola",
        completed: true
      },
      {
        id: 2,
        text: "hdfdsfdsfdsfdsfola",
        completed: false
      },
      {
        id: 3,
        text: "hola",
        completed: true
      },
  ];

    it('should return all items if showCompleted is true', () => {
      var filterTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filterTodos.length).toBe(3);
    });

    it('should return all items if showCompleted is true', () => {
      var filterTodos = TodoAPI.filterTodos(todos, false, '');
      expect(filterTodos.length).toBe(1);
    });
  });
});
