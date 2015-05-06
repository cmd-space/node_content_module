var fs = require('fs');

module.exports = function ( request, response ) {
    response.writeHead(200, {'Content-type': 'text/html'});
    console.log('Request', request.url);
    if(request.url === '/'){
        fs.readFile('views/index.html', 'utf8', function (errors, contents){
            response.write(contents); 
            response.end();
        });
    } else if(request.url != '/favicon.ico'){
        var statView = fs.lstatSync('./views'+request.url+'.html');            
        if(statView.isFile){
            fs.readFile('./views'+request.url+'.html', 'utf8', function (errors, contents){
                response.write(contents);
                response.end();
            })
//            if(request.url === '/favicon.ico'){
//            request.writeHead(200, {'Content-type' : 'image/x-icon'});
//            request.end();
//            console.log('favicon requested');
//            return;
//            } 
        } else{
            response.end('File not found!');
        }
        }
}