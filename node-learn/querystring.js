var querystring = require('querystring');
var url = require('url');
const xtend = require('xtend');
var st = 'http://mpay.paymt.paydev.sankuai.com/mwallet/front/common/login-access?source=1&mwalletId=12000002135803&BSID=V5VfAmlB2UsRD47AgkOasZoV7lFcyliO&page=home';

//console.log(url.parse(st));

var query = querystring.parse(url.parse(st).query);

query = xtend(query, {a: 'test'});
querystring.stringify(query);
console.log(query)
console.log(querystring.stringify(query));
