const connect = require('connect');
const app = connect();

function headInfo(request, response, next) {
    response.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });

    next();
}

app.use(headInfo);

app.use('/home', function (request, response, next) {
    response.write('Home Page');

    response.end();
});

app.use('/contact', function (request, response, next) {
    response.write('Contact Page');

    response.end();
});

app.listen(1453);