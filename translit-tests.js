// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by translit.js.
import { name as packageName } from "meteor/akerius:translit";

// Write your tests here!
// Here is an example.
Tinytest.add('translit - example', function (test) {
  test.equal(packageName, "translit");
});
