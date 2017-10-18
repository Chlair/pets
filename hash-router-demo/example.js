var http = require('http');
var HttpHashRouter = require('http-hash-router');

var router = HttpHashRouter();

router.set('/health', function health(req, res) {
    res.writeHead(302, { Location: 'https://www.baidu.com/'});
    res.end('OK');
});

var server = http.createServer(function handler(req, res) {
    router(req, res, {}, onError);

    function onError(err) {
        if (err) {
            // use your own custom error serialization.
            res.statusCode = err.statusCode || 500;
            res.end(err.message);
        }
    }
});
server.listen(3000);
