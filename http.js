const http = require("http");

http.createServer(function (req, res) {
    res.end("Hello");
}).listen(20);

console.log("server ok")