var React = require('react');
var ReactDom = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

import * as actions from 'actions';
//getting the raw react component
import {Todo} from 'Todo';

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });

  it('should dispatch TOGGLE_TODO on click', () => {
    var todoData = {
      id: 199,
      text: 'Test features',
      completed: true
    };
    var action = actions.startToggleTodo(todoData.id, !todoData.completed);

    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>);
    var $el = $(ReactDom.findDOMNode(todo));

    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });
});
