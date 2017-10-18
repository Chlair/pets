var thrift = require('thrift')
var Calculator = require('./gen-nodejs/Calculator')

var transport = thrift.TBufferedTransport()
var protocol = thrift.TBinaryProtocol()

var connection = thrift.createConnection("localhost", 9090, {
  transport: transport,
  protocol: protocol
})

connection.on('error', function (err) {
  console.log(111)
  console.log(err)
})

var client = thrift.createClient(Calculator, connection)

client.ping(function (err, response) {
  if (err) {
    return console.log(err)
  }
  connection.end()
  console.log(response)
})

client.add(1, 5, function (err, response) {
  if (err) {
    return console.log(err)
  }
  connection.end()
  console.log(response)
})
