global.myName = 'Özcan ÇAMOĞLU';

let i;

console.time('time');

for (i = 1; i < 101; i++) {
    console.log(i + ' ' + myName)
}

console.timeEnd('time');

console.log(__filename);

console.log(__dirname);

console.log(Buffer.from("hello").toString("base64"));

setTimeout(function () {
    console.log("test");
}, 1000);

/*
setInterval(function () {
    console.log("repeat");
}, 1000);
*/

console.log(process.memoryUsage());

console.log(process.pid);