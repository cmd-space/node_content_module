var fs = require('fs');
var path = require('path');

module.exports = function ( request, response ) {
//    response.writeHead(200, {'Content-type': 'text/html'});
    console.log('Request', request.url);
    if(request.url != '/favicon.ico'){
        var url = request.url;
        if(request.url === '/'){
            response.writeHead(200, {'Content-type': 'text/html'});
            fs.readFile('./views/index.html', 'utf8', function (errors, contents){
                response.write(contents); 
                response.end();
            });
        } else if(path.extname(url) === ''){
            var statView = fs.existsSync('./views'+url+'.html');
            if(statView){
                fs.readFile('./views'+request.url+'.html', 'utf8', function (errors, contents){
                  response.writeHead(200, {'Content-Type': 'text/html'});
                  response.write(contents);
                  response.end();
                })
            } else{
                response.end('File not found!');
            }
        } else if(path.extname(url) === '.css'){
            var statStyle = fs.existsSync('./stylesheets'+request.url);
            fs.readFile('./stylesheets'+request.url, 'utf8', function(errors, contents){
                response.writeHead(200, {'Content-Type': 'text/css'});
                response.write(contents);
                response.end();
            })
        } else if(path.extname(url) === '.jpeg' || path.extname(url) === '.png' || path.extname(url) === '.gif' || path.extname(url) === '.jpg'){
            var statImg = fs.existsSync('./images'+request.url);
            console.log(statImg);
            if(statImg){
                var str = path.extname(url);
                var imageType = str.substring(1, str.length);
                var cType = 'image/'+imageType;
                fs.readFile('./images'+request.url, function(errors, contents){
                    response.writeHead(200, {'Content-Type': cType});
                    response.write(contents);
                    response.end();
                })
            }
            
        } else{
            response.end('File not found!');
        }
    }
}