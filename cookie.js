const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.get('/', function (req, res) {
    res.cookie('name', 'Özcan ÇAMOĞLU', {
        expires: new Date(Date.now() + 5 * 100000)
    });

    res.send('Cookie created <a href="/cookie-read">Cookie Read</a>');
});

app.get('/cookie-read', function (req, res) {
    res.send('Cookie: ' + req.cookies.name + ' <a href="/cookie-remove">Cookie Remove</a>');
});

app.get('/cookie-remove', function (req, res) {
    res.clearCookie('name');
    res.send('Cookie Remove');
});

app.listen(1453, function () {
    console.log('Server Runnning.');
});