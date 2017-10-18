const url = require('url');
const querystring = require('querystring');
var str = 'http://hui.e.meituan.com/hui/appbalancedetail?balanceId=9997513&bizlogintoken=QlnG-rvv10tQ0CnfDAloOT0bkZ8cmfO4&tokensource=ecomapp&uuid=521BF886936908E7E1A697E70B264C5B786321DCA4EB0352CE67B6A578B0C41F&version=6.0.0&utm_term=6.0.0&plat=android';

console.log(querystring.parse((url.parse(str).query)));

