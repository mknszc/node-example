const child_process = require('child_process');

const operation = child_process.fork('child-process-example.js');

operation.on('message', function (message) {
    console.log('Message: ' + message);
});

operation.on('close', function (code) {
    console.log('Finish. Process Code: ' + code);
});