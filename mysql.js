const mysql = require('mysql');

let connection = mysql.createConnection({
    host: '',
    user: '',
    password: '',
    database: ''
});

connection.connect(function (err) {
    if (err) throw err;

    console.log('Connection Success');

    let sql = `SELECT * FROM user LIMIT 2`;
    connection.query(sql, function (err, results, fields) {
        if (err) throw err;

        for (let i=0; i < results.length; i++) {
            console.log(results[i].id);
        }
    });
});