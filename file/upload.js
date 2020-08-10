const http = require('http');
const fs = require('fs');
const formidable = require('formidable');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-type': 'text/html;charset=utf-8' });

    if (req.url == '/upload') {
        let upload = new formidable.IncomingForm();
        upload.parse(req, function (err, fields, files) {

            let filePath    = files.upload_file.path;
            let uploadPath  = __dirname + '/' + files.upload_file.name;

            fs.rename(filePath, uploadPath, function (error) {
                if (error) throw error;
                res.write('Success');
                res.end();
            });
        });

    } else {
        fs.createReadStream('form.html').pipe(res);
    }

}).listen(3000);