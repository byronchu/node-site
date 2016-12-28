/*


var http = require('http')


// handle request and return response
function handleRequests(req, res) {
  res.end('Hello world!!');
}

//create server

var server = http.createServer(handleRequests);

//start server
server.listen(8080,function(){
  console.log('Listening on port 8080');
});
*/
///////  use express ///
var express = require('express');
var app = express();
var port = 8080;

var router = require('./app/routes');
app.use('/',router);

//start server
app.listen(port, function() {
  console.log('app started');
});

// route home page
