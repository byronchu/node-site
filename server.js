// import http[ module

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
