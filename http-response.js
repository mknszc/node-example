const http = require('http');

const server = http.createServer(function (request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });

    response.write('Hello  <b>Node.js </b> .' + request.url);

    response.end();
});

server.listen(1453);

console.log('server running');