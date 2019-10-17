/*
 * Primary file for the API
 */

 // Dependencies

 var http = require('http');
 var url = require('url');

 // Configure

var server = http.createServer(function(req, res) {

    // Get the URL and parse it
    var parsedURL = url.parse(req.url, true);

    // Get the path
    var path = parsedURL.pathname;
    var trimmedPath = path.replace(/^\/+|\/+$/g, '');

    // Send the response
    res.end('Hello World\n');

    // Log the request path
    console.log('Request recieved on path: ' + trimmedPath);

});

 // Start the server

 server.listen(3000, function() {
     console.log("Server is listening on Port: 3000");
 });