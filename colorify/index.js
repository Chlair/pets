
// Opt in to strict mode of JavaScript, [ref](http://is.gd/3Bg9QR)
// Use this statement, you can stay away from several frequent mistakes 
'use strict';

alert('Hello world!');

// How to use a foreign module ?
// Take 'jquery' for example:
//
// 1. to install a dependency, exec the command in your terminal
// ```bash
// cortex install jquery --save
// ```

// 2. use `require(id)`:

// var $ = require('jquery');


// 3. define exports:
// `exports` is the API of the current module,
// If another module `require('colorify')`, it returns `exports`

// exports.my_method = function() {
// };

// or you could code like this:

// module.exports = {
// 	 my_method: function() {
// 	 }
// };

// But, NEVER do this: (Why?)
// exports = {my_method: ...}
var $ = require('jquery');

function colorify(selector, color){
  $(selector).css('background-color', color);
}

// 我们通过 `module.exports` 来定义当前模块的 API
module.exports = colorify;
