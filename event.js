const http = require('http');

const server = http.createServer(function (request, response) {
    response.write('Hello');

    response.end();
});

server.listen(177);

console.log('Server running');

server.on('connection', function (socket) {
    console.log('New login');
});

server.on('request', function (socket) {
    console.log('New request');
});