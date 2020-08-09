const express = require('express');
const app = express();
const router = express.Router();

router.get('/', function (req, res) {
    res.send('User get');
});

router.post('/', function (req, res) {
    res.send('User post');
});

router.put('/', function (req, res) {
    res.send('User put');
});

router.delete('/', function (req, res) {
    res.send('User delete');
});

app.use('/user', router);

app.listen(1453, function () {
    console.log('Server running');
});