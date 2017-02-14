// function add(a, b) {
//   return a + b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));

//
// var groupA = ['Jenn', 'Cory'];
// var groupB = ['Vikram'];
// var final = [3, ...groupA];
//
// console.log(final);

var person = ['Andrew', 25];
var personTwp = ['Jen', 29];

function sayHi(name, age) {
  console.log(`Hi ${name}, you are ${age}`);
}

sayHi(...person);
sayHi(...personTwp);


var names = ['Mike', 'Ben'];
var final = ['Randy', ...names];

final.forEach((name) => {
  console.log('hi ' + name);
});
