var React = require('react');
var ReactDom = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import * as actions from 'actions';
var {Addtodo} = require('Addtodo');

describe('Addtodo', () => {
  it('should exist', () => {
    expect(Addtodo).toExist();
  });

  it('should dispatch ADD_TODO when valid todo text', () => {
    var todoText = "clean house";
    var action = actions.startAddTodo(todoText);

    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<Addtodo dispatch={spy}/>);
    var $el = $(ReactDom.findDOMNode(addTodo));

    addTodo.refs.todo.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should not dispatch ADD_TODO when invalid todo text', () => {
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<Addtodo dispatch={spy}/>);
    var $el = $(ReactDom.findDOMNode(addTodo));

    addTodo.refs.todo.value = "";
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
