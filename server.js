/**
 * Created by 1303721 on 30/11/2015.
 */
var http = require('http');
var port = process.env.PORT || 1337;

http.createServer(function(request, response){
    response.writeHead(200, { 'Content-type': 'text/plain'});
    response.end('Hello World test \n');
}).listen(port);