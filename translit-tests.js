// Import Tinytest from the tinytest Meteor package.
//import {Tinytest} from "meteor/tinytest";

// Import and rename a variable exported by translit.js.
//import {name as packageName} from "meteor/akerius:translit";

// Write your tests here!
// Here is an example.
console.log('Test');

Tinytest.add('translit - example', function (test) {
	test.equal(packageName, "translit", 'Что-то пошло не так...');
});

Tinytest.add('translit - basic test - test 1', function (test) {
	var original = 'Привет, Мир!';
	var waitingFor = 'Privet Mir';
	var result = translit(original);
	console.log(result);
	test.equal(result, waitingFor, 'Что-то пошло не так...');
});

Tinytest.add('mypackage - basic tests', (test) => {

  // Get the result from our function under test.
  const result = 1;

  // Do the test ... calling myFunction with 1 should return 2.
  test.equal(result, 2);
});