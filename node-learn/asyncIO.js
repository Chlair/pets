/* 将请求回调压入 事件回调中 */
var proxy = new events.EventEmitter();

var status = 'ready';

var select = function (cb) {
  proxy.once('selected', cb);

  
}

var db = function (action, cb) {
  
  setTimeout(()=> {
    cb();
    console.log(`${action} done`);
  }, 100);
};
