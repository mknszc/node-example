const http = require('http');

const server = http.createServer(function (request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });

    if (['/home', '/'].includes(request.url)) {
        response.write('Home page');

    } else if (['/contact'].includes(request.url)) {
        response.write('Contact Page');

    } else {
        response.writeHead(404, {
            'Content-Type': 'text/html; charset=utf-8'
        });

        response.write('404');
    }

    response.end();
});

server.listen(1455);

console.log('server running');