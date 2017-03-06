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

  describe('filterTodos', () => {
    var todos =
    [
      {
        id: 1,
        text: "Hola",
        completed: true
      },
      {
        id: 2,
        text: "hdfdsfdsfdsfdsfola",
        completed: false
      },
      {
        id: 3,
        text: "todo la vida",
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

    it('should sort by completed status', () => {
      var filterTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filterTodos[0].completed).toBe(false);
    });

    it('should return all todos when searchText is empty', () => {
      var filterTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filterTodos.length).toBe(3);
    });

    it('should filter todos by searchText', () => {
      var searchText = 'hola';
      var filterTodos = TodoAPI.filterTodos(todos, true, searchText);
      expect(filterTodos.length).toBe(1);
    });

    it('should filter todos by uppercase searchText', () => {
      var searchText = 'Hola';
      var filterTodos = TodoAPI.filterTodos(todos, true, searchText);
      expect(filterTodos.length).toBe(1);
    });
  });
});
