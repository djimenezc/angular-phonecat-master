//var http = require('http');
//
//http.createServer(function(req, res) {
//	res.writeHead(200, {
//		'Content-Type' : 'text/plain'
//	});
//	res.end('Hello World\n');
//}).listen(1337, '127.0.0.1');
//
//console.log('Server running at http://127.0.0.1:1337/');
//
//function say(word) {
//	console.log(word);
//}
//
//function execute(someFunction, value) {
//	someFunction(value);
//}
//
//execute(say, "Hello");


var http = require("http");
var url = require("url");

function start(route) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    route(pathname);

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started at http://127.0.0.1:8888.");
}

exports.start = start;
