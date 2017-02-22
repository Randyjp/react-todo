export var setSearchText = (SearchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    SearchText
  };
};

export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  };
};

export var addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text
  };
};

export var toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};
