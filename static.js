var fs = require('fs');

module.exports = function ( request, response ) {
    response.writeHead(200, {'Content-type': 'text/html'});
    console.log('Request', request.url);
    if(request.url === '/'){
        fs.readFile('views/index.html', 'utf8', function (errors, contents){
            response.write(contents); 
            response.end();
        });
    } else if (request.url === '/ninja') {
        fs.readFile('views/ninja.html', 'utf8', function (errors, contents){
            response.write(contents);
            response.end('Hi There, Ninja');
        })
    }
}