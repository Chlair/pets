
var compose = function(f,g) {
  return function(x) {
    return f(g(x));
  };
};


var toUpperCase = function(x) { return x.toUpperCase(); };
var exclaim = function(x) { return x + '!'; };
var shout = compose(exclaim, toUpperCase);//
console.log(shout.toString());



console.log(shout("send in the clowns"));
// 里层的执行结果作为外层的入参
// 递归执行
