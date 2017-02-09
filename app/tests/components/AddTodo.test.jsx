var React = require('react');
var ReactDom = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Addtodo = require('Addtodo');

describe('Addtodo', () => {
  it('should exist', () => {
    expect(Addtodo).toExist();
  });

  it('should call handleAddTodo if valid todo entered', () => {
    var todoText = "clean house";
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<Addtodo handleFormSubmit={spy}/>);
    var $el = $(ReactDom.findDOMNode(addTodo));

    addTodo.refs.todo.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(todoText);
  });

  it('should not call handleAddTodo if invalid todo entered', () => {
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<Addtodo handleFormSubmit={spy}/>);
    var $el = $(ReactDom.findDOMNode(addTodo));

    addTodo.refs.todo.value = "";
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
