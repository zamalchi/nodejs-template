
var http = require('http');

var _ = require('lodash');

function run (req, res) {
	
	var l = ['a','b','c','d'];
	return _.map(l, function (x, i) { return (i + " : " + x) }).join("\n");

}

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type' : 'text/plain'});

	var html = run(req, res);

	res.end(html);

}).listen(1337, '127.0.0.1');