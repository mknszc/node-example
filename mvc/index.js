const express = require('express');
const app = express();
const personController = require('./controller');

app.set('view engine', 'ejs');
app.set('views', './view');
app.use('/person', personController);

app.listen(1453, function () {
    console.log('Server Running');
});