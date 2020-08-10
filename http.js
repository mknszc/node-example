const http = require("http");

http.createServer(function (req, res) {
    res.end("Hello");
}).listen(155);

console.log("server ok")