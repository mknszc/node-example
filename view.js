const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', '');

app.get("/", function (req, res) {
    res.render('index', {
        title: 'Hello EJS and Express',
        name: 'Özcan',
        surname: 'ÇAMOĞLU'
    });
});

app.listen(1453, function () {
    console.log('Server Running');
});