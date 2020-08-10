const express = require('express');
const app = express();
const session = require('express-session');

app.use(session({
    secret: 'Special-key',
    resave: false,
    saveUninitialized: true
}));

app.get('/', function (req, res) {
    req.session.name = 'Özcan ÇAMOĞLU';
    res.send('Session Created');
});

app.get('/read', function (req, res) {
    if (req.session.name) {
        return res.send('Session : ' + req.session.name);
    }

    res.send('Session not found');
});

app.get('/remove', function (req, res) {
    if (req.session.name)  {
        req.session.destroy();
        return res.send('Session removed');
    }

    res.send('Session not found');
    res.end();
});

app.listen(1453, function () {
    console.log('Server Running');
});