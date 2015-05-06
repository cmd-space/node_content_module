// http server
var http = require('http');
//var fs = require('fs');

var static_contents = require('./static.js');

//creating a server
server = http.createServer(function (request, response){
//    response.writeHead(200, {'Content-type': 'text/html'});
//    console.log('Request', request.url);
//    if(request.url === '/'){
//    fs.readFile('views/index.html', 'utf8', function (errors, contents){
//      response.write(contents); 
//      response.end();
//    });
    static_contents(request, response);  //this will serve all static files automatically
})
server.listen(8000);
console.log("Running in localhost at port 8000");