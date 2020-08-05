function f1(msj) {
    console.log(msj);
}

function f2(msj) {
    console.log(msj);
}

function hello(start, finish) {
    start('start');
    console.log('process');
    finish('finish');
}

hello(f1, f2);

