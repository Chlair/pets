var http = require("http");
// var combinFiles = require('./concactFile');
var validateFiles = require("./validateFiles");
var outputFiles = require("./outputFile");

var pathnames = ["./a.js", "./b.js", "./c.js"];

http
  .createServer(function(request, response) {
    console.log(request.url);
    console.log(request.headers);

    //    combinFiles(pathnames, function(err, data){
    //      if (err) {
    //        response.writeHead(404);
    //        response.end(err.message);
    //      } else {
    //        response.writeHead(200, 'application/javascript');
    //        response.end(data);
    //      }
    //    });

    validateFiles(pathnames, function(err, pathnames) {
      if (err) {
        response.writeHead(404);
        response.end(err.message);
      } else {
        response.writeHead(200, {
          "Content-Type": "application/javascript"
        });

        outputFiles(pathnames, response);
      }
    });
  })
  .listen(8124);
