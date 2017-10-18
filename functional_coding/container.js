
var Container = function(x) {
  this.__value = x;
}

Container.of = function(x) { return new Container(x); };


Container.prototype.map = function(f){
  return Container.of(f(this.__value))
}

Container.of(2).map(function(two){ return two + 2 })

// this.__value = 2;
// 
// Container.of(4)
//

var Maybe = function(x) {
  this.__value = x;
}

Maybe.of = function(x) {
  return new Maybe(x);
}

Maybe.prototype.isNothing = function() {
  return (this.__value === null || this.__value === undefined);
}

Maybe.prototype.map = function(f) {
  return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this.__value));
}


var Left = function(x) {
  this.__value = x;
}

Left.of = function(x) {
  return new Left(x);
}

Left.prototype.map = function(f) {
  return this;
}

var Right = function(x) {
  this.__value = x;
}

Right.of = function(x) {
  return new Right(x);
}

Right.prototype.map = function(f) {
  return Right.of(f(this.__value));
}


var v = Right.of('a').map((x) => x+'m').map((x) => x + 'm2').map((x) => !!x);
console.log(v);
// 可以清楚的看到执行顺序
// 限定输入类型 一旦类型发生变更需要 终止并提醒 提醒

