/*// Load the node-router library by creationix
var server = require('node-router').getServer();

// Configure our HTTP server to respond with Hello World the root request
server.get("/", function (request, response) {
  response.simpleText(200, "Hello World!");
});

// Listen on port 8080 on localhost
server.listen(process.env.PORT || process.env.VCAP_APP_PORT);
*/
// Load the net module to create a tcp server.
var net = require('net');
var sys = require('util');
// Setup a tcp server
var server = net.createServer(function (socket) {

  // Every time someone connects, tell them hello and then close the connection.
  socket.addListener("connect", function () {
    sys.puts("Connection from " + socket.remoteAddress);
    socket.end("Hello World\n");
    console.log("Hello World\n");
  });

});

console.log( process.env );
console.log( process.env.PORT );
console.log( process.env.VCAP_APP_PORT);
console.log(process.env.PORT || process.env.VCAP_APP_PORT);
var port = Number(   process.env.PORT  || process.env.VCAP_APP_PORT || 7000 );
// Fire up the server bound to port 7000 on localhost
server.listen(process.env.PORT || process.env.VCAP_APP_PORT)//.listen( port );

// Put a friendly message on the terminal
console.log("TCP server listening on port 7000 at localhost.");