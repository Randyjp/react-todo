var $ = require('jQuery');

module.exports = {
  setTodos: function (todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function () {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {

    }

    return $.isArray(todos) ?  todos : [];
  },
  filterTodos: function (todos, showCompleted, searchText) {
    var filterTodos = todos;

    // filter by showCompleted
    filterTodos = filterTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    // filter by searchText
    // filterTodos = filterTodos.filter((todo) =>{});

    // sort todos with non-completed first
    return filterTodos;
  },
};
