var fs = require('fs');

function combinFiles(pathnames, callback) {
  var output = [];
  (function next(i, len) {
    if (i < len) {
      fs.readFile(pathnames[i], function (err, data){
        if (err) {
          callback(err);
        } else {
          output.push(data);
          next(i + 1, len);
        }
      })
    } else {
      callback(null, Buffer.concat(output));
    }
  })(0, pathnames.length);
}

module.exports = combinFiles;

