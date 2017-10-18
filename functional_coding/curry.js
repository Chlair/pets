
var add = function(x) {
  return function(y) {
    return x + y;
  };
};

var increment = add(1); //x=1
var addTen = add(10);// x = 10

increment(2); // y = 2
// 3

addTen(2);  // y = 2



var curry = require('lodash').curry;

var match = curry(function(what, str) {
  return str.match(what);
});

var replace = curry(function(what, replacement, str) {
  return str.replace(what, replacement);
});

var filter = curry(function(f, ary) {
  return ary.filter(f);
});

var map = curry(function(f, ary) {
  return ary.map(f);
});

console.log(match('c')('abcd'));
