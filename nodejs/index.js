var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};

handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/find"] = requestHandlers.find;
handle["/ls"] = requestHandlers.ls;

server.start(router.route, handle);

