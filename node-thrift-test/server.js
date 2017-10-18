var thrift = require('thrift')
var Calculator = require('./gen-nodejs/Calculator.js')

var server = thrift.createServer(Calculator, {
  ping: function (result) {
    console.log(result)
    result(null)
  },
  add: function (n1, n2, result) {
    result(null, n1 + n2)
  }
})

server.listen(9090, function () {
  console.log('server is running....')
})
